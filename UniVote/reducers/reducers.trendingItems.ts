import { proposalSummary } from "../components/shared/types"

import {ACTIONS} from '../actions/actions.trendingProposals'

export interface TrendingItemsState {
    isPrivate: boolean
    trendingItems: proposalSummary[]
}

const initialState: TrendingItemsState = {
    isPrivate: false,
    trendingItems: []
}

export function resetTrendingItemsReducer(state: TrendingItemsState): TrendingItemsState {
    return { isPrivate: state.isPrivate, trendingItems: [] }
}

export function setIsPrivateReducer(state: TrendingItemsState, payload: boolean): TrendingItemsState {
    return { ...state, isPrivate: payload }
}

export function setTrendingItemsReducer(state: TrendingItemsState, payload: proposalSummary[]): TrendingItemsState {
    return { ...state, trendingItems: payload }
}

export function reducer(state = initialState, action: any) {
    switch (action.type) {
        case ACTIONS.RESET_TRENDING_ITEMS:
            return resetTrendingItemsReducer(state)
        case ACTIONS.SET_IS_PRIVATE:
            return setIsPrivateReducer(state, action.payload)
        case ACTIONS.SET_TRENDING_ITEMS:
            return setTrendingItemsReducer(state, action.payload)
        default:
            return state
    }
}
