import { ACTIONS, NftReward } from "../actions/actions.NFTrewards"
import { Reducer } from "redux"

export interface PerkDetails extends NftReward {}

const initialState: PerkDetails = {
    title: "",
    image: "",
    description: "",
    redemptionFee: 0,
    id: ""
}

export function setPerksReducer(state: PerkDetails, payload: NftReward): PerkDetails {
    return payload
}

export const reducer: Reducer<PerkDetails> = (state = initialState, action: any): PerkDetails => {
    switch (action.type) {
        case ACTIONS.RESET_PERK:
            return initialState
        case ACTIONS.SET_PERK:
            return setPerksReducer(state, action.payload)

        default:
            return state
    }
}
