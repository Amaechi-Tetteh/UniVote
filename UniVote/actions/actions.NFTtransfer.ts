

export enum ACTIONS {
    RESET = "[NFT TRANSFER] RESET",
    SET_RECEIVER_HASH = "[MY PROPOSALS] SET RECEIVER HASH"
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
