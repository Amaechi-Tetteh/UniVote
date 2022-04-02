import { ProposalDetails, ITEM_TYPE, ReferendumChoices } from "./types"
import { comment } from "./types"
import { SelectedReferendumChoice } from "./types"

import { ACTIONS } from "../actions/actions.proposalDetails"

export interface ProposalDetailsState extends ProposalDetails {}

const initialState: ProposalDetailsState = {
    proposalId: "",
    title: "",
    numberOfVotes: 0,
    description: "",
    comments: [],
    choices: [],
    type: ITEM_TYPE.PROPOSAL
}

export function setProposalReducer( payload: ProposalDetails): ProposalDetailsState {
    return payload
}

export function setProposalIdReducer(state: ProposalDetailsState, payload: string): ProposalDetailsState {
    return { ...state, proposalId: payload }
}

export function voteOnProposalReducer(state: ProposalDetailsState): ProposalDetailsState {
    return { ...state, numberOfVotes: state.numberOfVotes + 1 }
}

export function addProposalCommentReducer(state: ProposalDetailsState, payload: comment): ProposalDetailsState {
    return {
        ...state,
        comments: state.comments ? [...state.comments, payload] : [payload]
    }
}

export function selectReferendumChoiceReducer(
    state: ProposalDetailsState,
    payload: SelectedReferendumChoice
): ProposalDetailsState {
    return {
        ...state,
        choices: state.choices
            ? [
                  ...state.choices.slice(0, payload.index),
                  { ...state.choices[payload.index], selected: payload.selected },
                  ...state.choices.slice(payload.index, state.choices.length)
              ]
            : []
    }
}

export function reducer(state = initialState, action: any) {
    switch (action.type) {
        case ACTIONS.RESET_PROPOSAL_DETAILS_:
            return initialState
        case ACTIONS.SET_PROPOSAL_DETAILS:
            return setProposalReducer(action.payload)
        case ACTIONS.VOTE_ON_PROPOSAL:
            return voteOnProposalReducer(state)
        case ACTIONS.SET_PROPOSAL_ID:
            return setProposalIdReducer(state, action.payload)
        case ACTIONS.ADD_COMMENT:
            return addProposalCommentReducer(state, action.payload)
        case ACTIONS.SELECT_REFERENDUM_CHOICE:
            return selectReferendumChoiceReducer(state, action.payload)
        default:
            return state
    }
}
