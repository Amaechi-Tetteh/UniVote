import { proposalSummary } from "../components/shared/types"

export enum ACTIONS {
    RESET_TRENDING_ITEMS = "RESET TRENDING ITEMS",
    SET_IS_PRIVATE = "SET IS PRIVATE",
    SET_TRENDING_ITEMS = "SET TRENDING ITEMS"
}

export const resetTrendingItemsAction = () => {
    return {
        type: ACTIONS.RESET_TRENDING_ITEMS
    }
}

export const setIsPrivateAction = (isPrivate: boolean) => {
    return {
        type: ACTIONS.SET_IS_PRIVATE,
        payload: isPrivate
    }
}

export const setTrendingItemsAction = (trendingItems: proposalSummary[]) => {
    return {
        type: ACTIONS.SET_TRENDING_ITEMS,
        payload: trendingItems
    }
}
