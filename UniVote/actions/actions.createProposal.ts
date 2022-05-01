import { PROPOSAL_TYPE} from "../reducers/types"

export enum ACTIONS {
    SET_PROPOSAL_NAME = "[CREATE PROPOSAL] SET PROPOSAL NAME",
    RESET_NEW_PROPOSAL = "[CREATE PROPOSAL] RESET NEW PROPOSAL",
    SET_PROPOSAL_DETAILS = "[CREATE PROPOSAL] SET_PROPOSAL_DETAILS",
    SET_PROPOSAL_TYPE = "[CREATE PROPOSAL] SET_PROPOSAL_TYPE",
    SET_PROPOSAL_GROUP = "[CREATE PROPOSAL] SET PROPOSAL GROUP",
    UPLOAD_PROPOSAL_IMAGE = "[CREATE PROPOSAL] UPLOAD_PROPOSAL_IMAGE",
    SEE_VOTERS = "[CREATE PROPOSAL] SEE VOTERS",
    ALLOW_COMMENTS = "[CREATE PROPOSAL] ALLOW COMMENTS",

}

export const setNewProposalNameAction = (proposalName: string) => {
    return {
        type: ACTIONS.SET_PROPOSAL_NAME,
        payload: proposalName
    }
}

export const resetNewProposalAction = () => {
    return {
        type: ACTIONS.RESET_NEW_PROPOSAL
    }
}

export const setNewProposalDetailsAction = (proposalDetails: string) => {
    return {
        type: ACTIONS.SET_PROPOSAL_DETAILS,
        payload: proposalDetails
    }
}

export const setNewProposalTypeAction = (proposalType: PROPOSAL_TYPE) => {
    return {
        type: ACTIONS.SET_PROPOSAL_TYPE,
        payload: proposalType
    }
}

export const setNewProposalGroupAction = (proposalGroup: string) => {
    return {
        type: ACTIONS.SET_PROPOSAL_GROUP,
        payload: proposalGroup
    }
}

export const setNewProposalImageAction = (image: string) => {
    return {
        type: ACTIONS.UPLOAD_PROPOSAL_IMAGE,
        payload: image
    }
}

export const allowCommentsAction = (allowed: string) => {
    return {
        type: ACTIONS.ALLOW_COMMENTS,
        payload: allowed
    }
}

export const setSeeVotersAction = (seeVoters: string) => {
    return {
        type: ACTIONS.SEE_VOTERS,
        payload: seeVoters
    }
}