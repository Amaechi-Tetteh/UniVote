import { ACTIONS } from "../actions/actions.myPerks"
import { Action, Reducer } from "redux"
import { ResultItem } from "../components/shared/components/searchResults/searchResultsTemplate"
export interface MyPerks extends Array<ResultItem> {}

const initialState: MyPerks = []

export function setPerksReducer(state: MyPerks, payload: ResultItem[]): MyPerks {
    return payload
}

export const reducer: Reducer<MyPerks> = (state = initialState, action: any): MyPerks => {
    switch (action.type) {
        case ACTIONS.RESET_MY_PERKS:
            return initialState
        case ACTIONS.SET_MY_PERKS:
            return setPerksReducer(state, action.payload)

        default:
            return state
    }
}
