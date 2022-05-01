import { image_example } from "./image"
import React from "react"
import { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../reducers"
import { setProposalDetailsAction } from "../../../actions/actions.proposalDetails"
import { ITEM_TYPE, ProposalDetails } from "../../../reducers/types"
import { ResultItem } from "../../shared/components/searchResults/searchResultsTemplate"
import SearchResultsTemplate from "../../shared/components/searchResults/searchResultsTemplate"
export default function SearchResultsScreen({ navigation }: any): JSX.Element {
    const results = useSelector((state: RootState) => state.search.searchResults)
    const dispatch = useDispatch()
    const onSelectItem = (id: string) => {
        ///contact backend
        dispatch(setProposalDetailsAction(proposalDetailsExample))
        navigation.navigate(NAVIGATION_ROUTES.PROPOSAL_DETAILS)
    }

    return (
        <SearchResultsTemplate
            onSelectItem={onSelectItem}
            results={results}
            navigation={navigation}
            itemHeight = {155}
            imageHeight = {100}
            titleFontSize={16}
            header="Search Proposal"
            route={NAVIGATION_ROUTES.SEARCH_PROPOSAL}
        />
    )
}

const proposalDetailsExample: ProposalDetails = {
    numberOfVotes: 16,
    title: "Fix pothole on Library Road",
    type: ITEM_TYPE.PROPOSAL,
    id: "11111",
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
        id: "sdddsds",
        title: "test title for app with a really long long title, so long long",
        image: "data:image/webp;base64," + image_example
    },
    {
        id: "sdddssddsdsds",
        title: "test title for app2",
        image: "data:image/webp;base64," + image_example
    },
    {
        id: "sdddssddsdsdssds",
        title: "test title for app3",
        image: "data:image/webp;base64," + image_example
    }
]
