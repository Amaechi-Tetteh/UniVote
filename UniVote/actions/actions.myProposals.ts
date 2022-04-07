import { ResultItem } from "../components/shared/components/searchResults/searchResultsTemplate"

export enum ACTIONS {
    RESET_PROPOSALS = "[MY PROPOSALS] RESET PROPOSALS",
    SET_PROPOSALS = "[MY PROPOSALS] SET PROPOSALS"
}

export const resetMyProposalsAction = () => {
    return {
        type: ACTIONS.RESET_PROPOSALS
    }
}

export const setMyProposalsAction = (results: ResultItem[]) => {
    return {
        type: ACTIONS.SET_PROPOSALS,
        payload: results
    }
}
