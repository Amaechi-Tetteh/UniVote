import { ResultItem } from "../components/shared/components/searchResults/searchResultsTemplate"

export enum ACTIONS {
    RESET_MY_PERKS= "[MY PERKS] RESET",
    SET_MY_PERKS = "[MY PERKS] SET MY PERKS"
}

export const resetMyPerksAction = () => {
    return {
        type: ACTIONS.RESET_MY_PERKS
    }
}

export const setMyPerksAction = (perks: ResultItem[]) => {
    return {
        type: ACTIONS.SET_MY_PERKS,
        payload: perks
    }
}