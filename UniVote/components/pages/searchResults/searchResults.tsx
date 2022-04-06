import { image_example } from "./image"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import React, { useState } from "react"
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native"
import { styles } from "../../shared/styles/styles"
import Menu, { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import { renderSearchItems } from "../../shared/components/searchResults/renderSearchResults"
import { styles as resultsStyles } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../reducers"
import { setProposalDetailsAction } from "../../../actions/actions.proposalDetails"
import { ITEM_TYPE, ProposalDetails } from "../../../reducers/types"
import { MainContainer, MenuContainer } from "../../shared/components/containers/containers"
export default function SearchResultsScreen({ navigation }: any): JSX.Element {
    const results = useSelector((state: RootState) => state.search.searchResults)
    const dispatch = useDispatch()
    const onSelectItem = (proposalId: string) => {
        ///contact backend
        dispatch(setProposalDetailsAction(proposalDetailsExample))
        navigation.navigate(NAVIGATION_ROUTES.PROPOSAL_DETAILS)
    }

    return (
        <View style={styles.centered_container}>
            <BlueHeader title={"Search Proposal"} navigation={navigation} showArrow={true} />
            <SafeAreaView
                style={[
                    styles.centered_container,
                    styles.screen_padding,
                    { width: "100%", justifyContent: "flex-start" }
                ]}
            >
                <MainContainer>
                    <View style={resultsStyles.flat_list_wrapper}>{renderSearchItems(exampleResults, onSelectItem)}</View>
                </MainContainer>
                <MenuContainer>
                    <Menu navigation={navigation} />
                </MenuContainer>
            </SafeAreaView>
        </View>
    )
}

export interface ResultItem {
    proposalId: string
    image: string
    title: string
}

const proposalDetailsExample: ProposalDetails = {
    numberOfVotes: 16,
    title: "Fix pothole on Library Road",
    type: ITEM_TYPE.PROPOSAL,
    proposalId: "11111",
    description:
        "Potholes really need to be fixed very soon. Otherwise all the cars will be destroyed and the council will be sued",
    comments: [
        { user: "marc", comment: "this really sucks" },
        { user: "bob", comment: "yes i agree. its very bad" },
        {
            user: "mary",
            comment: "when will it get fixed? Some more textto see if i can get it to wrap onto a new line"
        }
    ],
    image: "data:image/webp;base64," + image_example
}

const exampleResults: ResultItem[] = [
    {
        proposalId: "sdddsds",
        title: "test title for app with a really long long title, so long long",
        image: "data:image/webp;base64," + image_example
    },
    {
        proposalId: "sdddssddsdsds",
        title: "test title for app2",
        image: "data:image/webp;base64," + image_example
    },
    {
        proposalId: "sdddssddsdsdssds",
        title: "test title for app3",
        image: "data:image/webp;base64," + image_example
    }
]
