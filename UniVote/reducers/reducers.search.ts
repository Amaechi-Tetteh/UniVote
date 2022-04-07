import { ResultItem } from "../components/shared/components/searchResults/searchResultsTemplate"

import { ACTIONS } from "../actions/actions.search"

export interface SearchState {
    searchTerm: string
    searchResults: ResultItem[]
}

const initialState: SearchState = {
    searchTerm: "",
    searchResults: []
}

export function resetSearchReducer(state: SearchState): SearchState {
    return initialState
}

export function setSearchTermReducer(state: SearchState, payload: string): SearchState {
    return { ...state, searchTerm: payload }
}

export function setSearchResultsReducer(state: SearchState, payload: ResultItem[]): SearchState {
    return { ...state, searchResults: payload }
}

export function reducer(state = initialState, action: any) {
    switch (action.type) {
        case ACTIONS.RESET_SEARCH:
            return resetSearchReducer(state)
        case ACTIONS.SET_SEARCH_TERM:
            return setSearchTermReducer(state, action.payload)
        case ACTIONS.SET_SEARCH_RESULTS:
            return setSearchResultsReducer(state, action.payload)
        default:
            return state
    }
}
