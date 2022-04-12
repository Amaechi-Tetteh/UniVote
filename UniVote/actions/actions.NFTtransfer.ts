

export enum ACTIONS {
    RESET = "[NFT TRANSFER] RESET",
    SET_RECEIVER_HASH = "[NFT TRANSFER] SET RECEIVER HASH",
    SET_TRANSFER_FEE = "[NFT TRANSFER] SET TRANSFER FEE",
}

export const resetNFTtransferAction = () => {
    return {
        type: ACTIONS.RESET
}
}

export const setReceiverHashAction = (hash: string) => {
    return {
        type: ACTIONS.SET_RECEIVER_HASH,
        payload: hash
    }
}

export const setTransferFeeAction = (fee: number) => {
    return {
        type: ACTIONS.SET_TRANSFER_FEE,
        payload: fee
    }
}


