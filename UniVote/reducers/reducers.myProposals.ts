import { ResultItem } from "../components/shared/components/searchResults/searchResultsTemplate"
import { ACTIONS } from "../actions/actions.myProposals"

export interface MyProposals extends Array<ResultItem> {}

const initialState: MyProposals = []

export function setProposalsReducer(state: MyProposals, payload: ResultItem[]): MyProposals {
    return payload
}

export function reducer(state = initialState, action: any) {
    switch (action.type) {
        case ACTIONS.RESET_PROPOSALS:
            return initialState
        case ACTIONS.SET_PROPOSALS:
            return setProposalsReducer(state, action.payload)
        default:
            return state
    }
}
