import React, { useState } from "react"
import { proposalSummary} from "../../shared/types"
import { NavigationProps, Navigation } from "../../shared/types"
import { NAVIGATION_ROUTES } from "../../../components/shared/components/menu/menu"
import TrendingItemsTemplate, { HeaderText } from "./trendingItemsTemplate"
import { ITEM_TYPE } from "../../../reducers/types"
import { useDispatch} from "react-redux"
import { setProposalDetailsAction } from "../../../actions/actions.proposalDetails"
import { ProposalDetails } from "../../../reducers/types"
import { image_example } from "../searchResults/image"

export default function PrivateTrendingItemsScreen({ navigation }: NavigationProps): JSX.Element {

    const dispatch = useDispatch()

        const onPressItem = (id: string, type: ITEM_TYPE, navigation: Navigation) => {
        //then api call to get proposal id details
        dispatch(setProposalDetailsAction(proposalDetailsExample))
        if (type === ITEM_TYPE.PROPOSAL) navigation.navigate(NAVIGATION_ROUTES.PROPOSAL_DETAILS)
        if (type === ITEM_TYPE.REFERENDUM) navigation.navigate(NAVIGATION_ROUTES.REFERENDUM_DETAILS)
    }
    

    const headerText: HeaderText = { title: "Private", subTitle: "Trending" }

    const onPressHeader = () => navigation.navigate(NAVIGATION_ROUTES.TRENDING_PROPOSALS)

    return (
        <TrendingItemsTemplate
            proposals={proposals}
            navigation={navigation}
            headerText={headerText}
            onPressHeader={onPressHeader}
            onPressItem={onPressItem}
        />
    )
}

const proposals: proposalSummary[] = [
        {
            title: "Proposal 1",
            proposalId: "11111",
            numberOfVotes: 20,
            type: ITEM_TYPE.REFERENDUM
        },
        {
            title: "Proposal 1",
            proposalId: "11111e",
            numberOfVotes: 20,
            type: ITEM_TYPE.PROPOSAL
        },
        {
            title: "Proposal 1",
            proposalId: "11111ew",
            numberOfVotes: 20,
            type: ITEM_TYPE.PROPOSAL
        },
        {
            title: "Proposal 1",
            proposalId: "11111eh",
            numberOfVotes: 20,
            type: ITEM_TYPE.PROPOSAL
        },
        {
            title: "Proposal 1",
            proposalId: "11111ejk",
            numberOfVotes: 20,
            type: ITEM_TYPE.PROPOSAL
        },
        {
            title: "Proposal 1",
            proposalId: "11111ekk",
            numberOfVotes: 20,
            type: ITEM_TYPE.PROPOSAL
        },
        {
            title: "Proposal 1",
            proposalId: "11111efg",
            numberOfVotes: 20,
            type: ITEM_TYPE.PROPOSAL
        }
    ]

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
