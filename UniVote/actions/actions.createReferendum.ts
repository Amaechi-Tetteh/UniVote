import { REFERENDUM_TYPE } from "../reducers/types"

export enum ACTIONS {
    SET_REFERENDUM_NAME = "[CREATE REFERENDUM] SET NAME",
    RESET_NEW_REFERENDUM = "[CREATE REFERENDUM] RESET",
    SET_REFERENDUM_DETAILS = "[CREATE REFERENDUM] SET DETAILS",
    SET_REFERENDUM_TYPE = "[CREATE REFERENDUM] SET TYPE",
    SET_REFERENDUM_GROUP = "[CREATE REFERENDUM] SET GROUP",
    ADD_CHOICE = "[CREATE REFERENDUM] ADD CHOICE",
    REMOVE_CHOICE = "[CREATE REFERENDUM] REMOVE CHOICE",
    SEE_VOTERS = "[CREATE REFERENDUM] SEE VOTERS",
    ALLOW_COMMENTS = "[CREATE REFERENDUM] ALLOW COMMENTS",
    SET_IMAGE = "[CREATE REFERENDUM] SET IMAGE"
}

export const setReferendumImageAction = (image: string) => {
    return {
        type: ACTIONS.SET_IMAGE,
        payload: image
    }
}

export const allowReferendumCommentsAction = (allowComments: string) => {
    return {
        type: ACTIONS.ALLOW_COMMENTS,
        payload: allowComments
    }
}

export const seeReferendumVotersAction = (seeVoters: string) => {
    return {
        type: ACTIONS.SEE_VOTERS,
        payload: seeVoters
    }
}

export const setReferendumGroupAction = (group: string) => {
    return {
        type: ACTIONS.SET_REFERENDUM_TYPE,
        payload: group
    }
}

export const removeReferendumChoiceAction = (choice: string) => {
    return {
        type: ACTIONS.REMOVE_CHOICE,
        payload: choice
    }
}

export const setReferendumTypeAction = (type: REFERENDUM_TYPE) => {
    return {
        type: ACTIONS.SET_REFERENDUM_TYPE,
        payload: type
    }
}

export const setNewReferendumNameAction = (referendumName: string) => {
    return {
        type: ACTIONS.SET_REFERENDUM_NAME,
        payload: referendumName
    }
}

export const resetNewReferendumAction = () => {
    return {
        type: ACTIONS.RESET_NEW_REFERENDUM
    }
}

export const setNewReferendumDetailsAction = (details: string) => {
    return {
        type: ACTIONS.SET_REFERENDUM_DETAILS,
        payload: details
    }
}

export const addReferendumChoiceAction = (choice: string) => {
    return {
        type: ACTIONS.ADD_CHOICE,
        payload: choice
    }
}
