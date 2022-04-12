import { ACTIONS } from "../actions/actions.NFTtransfer"
import { Reducer } from "redux"

export interface NFTtransfer {
    receiverHash: string
    transferFee: number
}

const initialState: NFTtransfer = {
    receiverHash: "",
    transferFee: 1
}

export function setReceiverHashReducer(state: NFTtransfer, payload: string): NFTtransfer {
    return { ...state, receiverHash: payload }
}

export function setTransferFeeReducer(state: NFTtransfer, payload: number): NFTtransfer {
    return { ...state, transferFee: payload }
}

export const reducer: Reducer<NFTtransfer> = (state = initialState, action: any): NFTtransfer => {
    switch (action.type) {
        case ACTIONS.RESET:
            return initialState
        case ACTIONS.SET_RECEIVER_HASH:
            return setReceiverHashReducer(state, action.payload)
        case ACTIONS.SET_TRANSFER_FEE:
            return setTransferFeeReducer(state, action.payload)

        default:
            return state
    }
}
