import { comment } from "../reducers/types"
import { ProposalDetails } from "../reducers/types"
import { SelectedReferendumChoice } from "../reducers/types"

export enum ACTIONS {
    SET_PROPOSAL_ID = "SET PROPOSAL ID",
    RESET_PROPOSAL_DETAILS_ = "RESET PROPOSAL DETAILS",
    SET_PROPOSAL_DETAILS = "SET PROPOSAL DETAILS",
    VOTE_ON_PROPOSAL = "VOTE_ON_PROPOSAL",
    ADD_COMMENT = "ADD COMMENT",
    SELECT_REFERENDUM_CHOICE = "SELECT REFERENDUM CHOICE"
}

export const setProposalIdAction = (proposalId: string) => {
    return {
        type: ACTIONS.SET_PROPOSAL_ID,
        payload: proposalId
    }
}

export const resetProposalDetailsAction = () => {
    return {
        type: ACTIONS.RESET_PROPOSAL_DETAILS_
    }
}

export const selectReferendumChoiceAction = (selected: SelectedReferendumChoice) => {
    return {
        type: ACTIONS.SELECT_REFERENDUM_CHOICE,
        payload: selected
    }
}

export const addProposalCommentAction = (newComment: comment) => {
    return {
        type: ACTIONS.ADD_COMMENT,
        payload: newComment
    }
}

export const setProposalDetailsAction = (propsalDetails: ProposalDetails) => {
    return {
        type: ACTIONS.SET_PROPOSAL_DETAILS,
        payload: propsalDetails
    }
}

export const voteOnProposalAction = () => {
    return {
        type: ACTIONS.VOTE_ON_PROPOSAL
    }
}
