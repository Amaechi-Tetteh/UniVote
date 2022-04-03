import React from "react"
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native"
import { styles as proposalDetailStyles } from "./style"
import { styles } from "../../shared/styles/styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import Menu, { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import Button from "../../shared/components/button/button"
import { BUTTON_COLORS } from "../../shared/components/button/button"
import { NavigationProps } from "../../shared/types"
import { MenuContainer, MainContainer } from "../../shared/components/containers/containers"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../reducers"
import { voteOnProposalAction } from "../../../actions/actions.proposalDetails"
import { TouchableOpacity } from "react-native-gesture-handler"

export default function ProposalDetailsScreen({ navigation }: NavigationProps): JSX.Element {

    const dispatch = useDispatch()

    const proposalDetails = useSelector((state:RootState) => state.proposalDetails)
    
    const onVote = () => dispatch(voteOnProposalAction())

     const onPressComments = () => navigation.navigate(NAVIGATION_ROUTES.COMMENTS)

    return (
        <View style={styles.centered_container}>
            <BlueHeader title={"Proposal Details"} navigation={navigation} showArrow={true} />
            <SafeAreaView style={[styles.centered_container, { width: "100%", justifyContent: "flex-start" }]}>
                <MainContainer>
                    <View style={proposalDetailStyles.image_container}>
                        <Image
                            source={{uri: proposalDetails.image}}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </View>
                    <View style={[styles.screen_padding, proposalDetailStyles.content_container]}>
                        <Text style={proposalDetailStyles.text}>{proposalDetails.numberOfVotes} Current Number of Votes</Text>

                        <ScrollView
                            contentContainerStyle={{
                                flex: 1,
                                flexDirection: "row",
                                flexWrap: "wrap"
                            }}
                            style={[proposalDetailStyles.scroll_view_container, proposalDetailStyles.title_container]}
                        >
                            <Text style={proposalDetailStyles.text}>{proposalDetails.title}</Text>
                        </ScrollView>
                        <ScrollView
                            contentContainerStyle={{
                                flex: 1,
                                flexDirection: "row",
                                flexWrap: "wrap"
                            }}
                            style={[proposalDetailStyles.scroll_view_container, proposalDetailStyles.title_container]}
                        >
                            <Text style={proposalDetailStyles.text}>{proposalDetails.description}</Text>
                        </ScrollView>

                        <Button
                            text="VOTE"
                            flexBasis={124}
                            color={BUTTON_COLORS.BLUE}
                            onPress={onVote}
                            showPlusIcon={true}
                            paddingTop={15}
                        />

                        <Text style={proposalDetailStyles.text}>Comments</Text>
                        <TouchableOpacity  onPress = {onPressComments}>
                        <ScrollView
                       
                            contentContainerStyle={{
                                flex: 1,
                                flexDirection: "row",
                                flexWrap: "wrap"
                            }}
                            style={[proposalDetailStyles.scroll_view_container, proposalDetailStyles.comment_container]}
                        >
                            {renderComments(proposalDetails.comments!) }
                        </ScrollView>
                        </TouchableOpacity>
                    </View>
                </MainContainer>
                <MenuContainer>
                    <View style={[styles.screen_padding, {width:'100%', height:'100%'}]} >
                    <Menu navigation={navigation} />
                    </View>
                </MenuContainer>
            </SafeAreaView>
        </View>
    )
}

interface comment {
    user: string
    comment: string
}

const renderComments = (comments: comment[]): JSX.Element[] => {
    console.log(comments)

    return comments.map((item, i) => {
        return (
            <React.Fragment key={i}>
                <Text style={proposalDetailStyles.text} >
                    {item.user}... {item.comment}
                </Text>
                <View style={{ width: "100%", height: 20 }}></View>
            </React.Fragment>
        )
    })
}
