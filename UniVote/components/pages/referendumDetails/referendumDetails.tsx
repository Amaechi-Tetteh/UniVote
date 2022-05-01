import React, { useEffect } from "react"
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native"
import { styles as proposalDetailStyles } from "./style"
import { length_factor, styles } from "../../shared/styles/styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import Menu, { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import Button from "../../shared/components/button/button"
import { BUTTON_COLORS } from "../../shared/components/button/button"
import { NavigationProps } from "../../shared/types"
import { MenuContainer, MainContainer, CenteredContainer } from "../../shared/components/containers/containers"
import CheckBoxList from "../../shared/components/checkboxList/checkboxList"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../reducers"
import {
    voteOnProposalAction,
    setProposalDetailsAction,
    selectReferendumChoiceAction
} from "../../../actions/actions.proposalDetails"
import { ITEM_TYPE, ProposalDetails, ReferendumChoices } from "../../../reducers/types"
import { image_example } from "../searchResults/image"
import { ACTIONS } from "../../../actions/actions.proposalDetails"
import { SelectedReferendumChoice } from "../../../reducers/types"
import { useIsFocused } from "@react-navigation/native"
import { CustomSafeView } from "../../shared/components/safeView/safeView"
export default function ReferendumlDetailsScreen({ navigation }: NavigationProps): JSX.Element {
    const dispatch = useDispatch()
    const isFocused = useIsFocused()
    const referendumDetails = useSelector((state: RootState) => state.proposalDetails)

    const exampleReferendum: ProposalDetails = {
        type: ITEM_TYPE.REFERENDUM,
        title: "Fix pothole on Library Road",
        description:
            "Potholes really need to be fixed very soon. Otherwise all the cars will be destroyed and the council will be sued",
        choices: [
            { selected: false, label: "Raphael Barberis" },
            { selected: false, label: "Marc L" },
            { selected: false, label: "Marc C" },
            { selected: false, label: "Marc D" },
            { selected: false, label: "Marc F" }
        ],
        numberOfVotes: 0,
        image: "data:image/webp;base64," + image_example,
        id: "dsdsdsdsds"
    }

    useEffect(() => {
        // Update the document title using the browser API
        dispatch(setProposalDetailsAction(exampleReferendum))
    }, [isFocused])

    const handleSelected = (index: number, bool: boolean): { type: ACTIONS; payload: SelectedReferendumChoice } =>
        dispatch(selectReferendumChoiceAction({ index: index, selected: bool }))

    const onVote = () => {
        dispatch(voteOnProposalAction())
        navigation.navigate(NAVIGATION_ROUTES.THANKYOU_FOR_CREATING_PROPOSAL, {
            message: "Your vote has been recorded"
        })
    }

    return (
        <CustomSafeView showTopColor={true}>
            <BlueHeader
                title={"Referendum Details"}
                navigation={navigation}
                showArrow={true}
                route={NAVIGATION_ROUTES.TRENDING_PROPOSALS}
            />
            <MainContainer screenPadding={false}>
                <View style={proposalDetailStyles.image_container}>
                    <Image source={{ uri: referendumDetails.image }} style={{ width: "100%", height: "100%" }} />
                </View>
                <View style={[styles.screen_padding, proposalDetailStyles.content_container]}>
                    <Text style={proposalDetailStyles.text}>
                        {referendumDetails.numberOfVotes} Current Number of Votes
                    </Text>

                    <ScrollView
                        contentContainerStyle={{
                            flex: 1,
                            flexDirection: "row",
                            flexWrap: "wrap"
                        }}
                        style={[proposalDetailStyles.scroll_view_container, proposalDetailStyles.title_container]}
                    >
                        <Text style={proposalDetailStyles.text}>{referendumDetails.title}</Text>
                    </ScrollView>
                    <ScrollView
                        contentContainerStyle={{
                            flex: 1,
                            flexDirection: "row",
                            flexWrap: "wrap"
                        }}
                        style={[proposalDetailStyles.scroll_view_container, proposalDetailStyles.title_container]}
                    >
                        <Text style={proposalDetailStyles.text}>{referendumDetails.description}</Text>
                    </ScrollView>
                    <Text style={[styles.text, { paddingTop: 15 * length_factor, paddingBottom: 15 * length_factor }]}>
                        Candidates/Choices
                    </Text>
                    <View style={{ width: "100%", height: 150 * length_factor }}>
                        <CheckBoxList choices={referendumDetails.choices!} onChange={handleSelected} />
                    </View>
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
