import React from "react"
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native"
import { styles as proposalDetailStyles } from "./style"
import { styles } from "../../shared/styles/styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import Menu, { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import Button from "../../shared/components/button/button"
import { BUTTON_COLORS } from "../../shared/components/button/button"
import { NavigationProps } from "../../shared/types"
import { MenuContainer, MainContainer, CenteredContainer } from "../../shared/components/containers/containers"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../reducers"
import { voteOnProposalAction } from "../../../actions/actions.proposalDetails"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Scroller } from "../../shared/components/scroller/scroller"
import { CustomSafeView } from "../../shared/components/safeView/safeView"
export default function ProposalDetailsScreen({ navigation }: NavigationProps): JSX.Element {
    const dispatch = useDispatch()

    const proposalDetails = useSelector((state: RootState) => state.proposalDetails)

    const onVote = () => {
        dispatch(voteOnProposalAction())
        navigation.navigate(NAVIGATION_ROUTES.THANKYOU_FOR_CREATING_PROPOSAL, {
            message: "Your vote has been recorded"
        })
    }

    const onPressComments = () => navigation.navigate(NAVIGATION_ROUTES.COMMENTS)

    return (
        <CustomSafeView showTopColor={true}>
            <BlueHeader
                title={"Proposal Details"}
                navigation={navigation}
                showArrow={true}
                route={NAVIGATION_ROUTES.TRENDING_PROPOSALS}
            />

            <MainContainer screenPadding={false}>
                <View style={proposalDetailStyles.image_container}>
                    <Image source={{ uri: proposalDetails.image }} style={{ width: "100%", height: "100%" }} />
                </View>
                <View style={[styles.screen_padding, proposalDetailStyles.content_container]}>
                    <Text style={proposalDetailStyles.text}>
                        {proposalDetails.numberOfVotes} Current Number of Votes
                    </Text>

                    <Scroller height={50}>
                        <Text style={proposalDetailStyles.text}>{proposalDetails.title}</Text>
                    </Scroller>

                    <Scroller height={80}>
                        <Text style={proposalDetailStyles.text}>{proposalDetails.description}</Text>
                    </Scroller>
                    <CenteredContainer>
                        <Button
                            text="VOTE"
                            width={124}
                            color={BUTTON_COLORS.BLUE}
                            onPress={onVote}
                            showPlusIcon={true}
                            paddingTop={15}
                        />
                    </CenteredContainer>
                    <Text style={proposalDetailStyles.text}>Comments</Text>

                    <Scroller height={120}>
                        <TouchableOpacity onPress={onPressComments}>
                            {renderComments(proposalDetails.comments!)}
                        </TouchableOpacity>
                    </Scroller>
                </View>
            </MainContainer>
            <MenuContainer>
                <View style={[styles.screen_padding, { width: "100%", height: "100%" }]}>
                    <Menu navigation={navigation} />
                </View>
            </MenuContainer>
        </CustomSafeView>
    )
}

interface comment {
    user: string
    comment: string
}

const renderComments = (comments: comment[]): JSX.Element[] => {
    return comments.map((item, i) => {
        return (
            <React.Fragment key={i}>
                <Text style={proposalDetailStyles.text}>
                    {item.user}... {item.comment}
                </Text>
                <View style={{ width: "100%", height: 20 }}></View>
            </React.Fragment>
        )
    })
}
