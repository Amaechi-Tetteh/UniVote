import { PROPOSAL_TYPE, NewProposal } from "./types"

import { ACTIONS } from "../actions/actions.createProposal"

export interface NewProposalState extends NewProposal {}

const initialState: NewProposalState = {
    name: "",
    details: "",
    type: PROPOSAL_TYPE.PUBLIC,
    group: "",
    image: ""
}

export function setNameReducer(state: NewProposalState, payload: string): NewProposalState {
    return { ...state, name: payload }
}

export function setDetailsReducer(state: NewProposalState, payload: string): NewProposalState {
    return { ...state, details: payload }
}

export function setGroupReducer(state: NewProposalState, payload: string): NewProposalState {
    return { ...state, group: payload }
}

export function setImageReducer(state: NewProposalState, payload: string): NewProposalState {
    return { ...state, image: payload }
}

export function setTypeReducer(state: NewProposalState, payload: PROPOSAL_TYPE): NewProposalState {
    return { ...state, type: payload }
}

export function reducer(state = initialState, action: any) {
    switch (action.type) {
        case ACTIONS.RESET_NEW_PROPOSAL:
            return initialState
        case ACTIONS.SET_PROPOSAL_DETAILS:
            return setDetailsReducer(state, action.payload)
        case ACTIONS.SET_PROPOSAL_GROUP:
            return setGroupReducer(state, action.payload)
        case ACTIONS.SET_PROPOSAL_NAME:
            return setNameReducer(state, action.payload)
        case ACTIONS.SET_PROPOSAL_TYPE:
            return setTypeReducer(state, action.payload)
        case ACTIONS.UPLOAD_PROPOSAL_IMAGE:
            return setImageReducer(state, action.payload)
        default:
            return state
    }
}
