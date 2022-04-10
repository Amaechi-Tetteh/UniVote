import { ACTIONS } from "../actions/actions.NFTtransfer"
import { Reducer } from "redux"

export interface NFTtransfer {
    receiverHash: string
}

const initialState: NFTtransfer = {
    receiverHash: ""
}

export function setReceiverHashReducer(state: NFTtransfer, payload: string): NFTtransfer {
    return { ...state, receiverHash: payload }
}

export const reducer: Reducer<NFTtransfer> = (state = initialState, action: any): NFTtransfer => {
    switch (action.type) {
        case ACTIONS.RESET:
            return initialState
        case ACTIONS.SET_RECEIVER_HASH:
            return setReceiverHashReducer(state, action.payload)

        default:
            return state
    }
}
