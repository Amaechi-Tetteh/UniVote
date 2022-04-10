export interface NftReward {
    id: string
    title: string
    description: string
    redemptionFee: number,
    image: string
}

export enum ACTIONS {
    RESET_PERK = "[NFT REWARDS] RESET",
    SET_PERK = "[NFT REWARDS] SET"
}

export const resetPerkDetailsAction = () => {
    return {
        type: ACTIONS.RESET_PERK
    }
}

export const setPerkDetailsAction = (perk:NftReward) => {
    return {
        type: ACTIONS.SET_PERK,
        payload: perk
    }
}
