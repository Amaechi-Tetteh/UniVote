import { ResultItem } from "../components/pages/searchResults/searchResults"

export enum ACTIONS {
    RESET_SEARCH = "RESET SEARCH",
    SET_SEARCH_TERM = "SET SEARCH_TERM",
    SET_SEARCH_RESULTS = "SET TRENDING_ITEMS"
}

export const resetSearchAction = () => {
    return {
        type: ACTIONS.RESET_SEARCH
    }
}

export const setSearchTermAction = (searchTerm: string) => {
    return {
        type: ACTIONS.SET_SEARCH_TERM,
        payload: searchTerm
    }
}

export const  setSearchResultsAction = (results: ResultItem[]) => {
    return {
        type: ACTIONS.SET_SEARCH_RESULTS,
        payload: results
    }
}
