import React, { useState } from "react"
import { proposalSummary, PROPOSAL_TYPE } from "../../shared/types"
import { NavigationProps, Navigation } from "../../shared/types"
import { NAVIGATION_ROUTES } from "../../../components/shared/components/menu/menu"
import TrendingItemsTemplate, {HeaderText} from "./trendingItemsTemplate"



export default function TrendingItemsScreen({ navigation }: NavigationProps): JSX.Element {
    const proposals: proposalSummary[] = [
        {
            title: "Proposal 1",
            proposalId: "11111",
            numberOfVotes: 20,
            type: PROPOSAL_TYPE.PROPOSAL
        },
        {
            title: "Proposal 1",
            proposalId: "11111e",
            numberOfVotes: 20,
            type: PROPOSAL_TYPE.PROPOSAL
        },
        {
            title: "Proposal 1",
            proposalId: "11111ew",
            numberOfVotes: 20,
            type: PROPOSAL_TYPE.PROPOSAL
        },
        {
            title: "Proposal 1",
            proposalId: "11111eh",
            numberOfVotes: 20,
            type: PROPOSAL_TYPE.PROPOSAL
        },
        {
            title: "Proposal 1",
            proposalId: "11111ejk",
            numberOfVotes: 20,
            type: PROPOSAL_TYPE.PROPOSAL
        },
        {
            title: "Proposal 1",
            proposalId: "11111ekk",
            numberOfVotes: 20,
            type: PROPOSAL_TYPE.PROPOSAL
        },
        {
            title: "Proposal 1",
            proposalId: "11111efg",
            numberOfVotes: 20,
            type: PROPOSAL_TYPE.PROPOSAL
        }
    ]

    const headerText:HeaderText = {title:"Trending", subTitle: 'Private'}

    const onPressHeader = () => navigation.navigate(NAVIGATION_ROUTES.PRIVATE_TRENDING_PROPOSALS)

    return (
<TrendingItemsTemplate proposals={proposals} navigation = {navigation} headerText={headerText} onPressHeader ={ onPressHeader} />
    )
}
