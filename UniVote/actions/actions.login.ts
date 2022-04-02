export enum ACTIONS {
    RESET_LOGIN = "RESET LOGIN",
    SET_EMAIL = "SET SEARCH TERM",
    SET_FULL_NAME = "SET FULL NAME",
    SET_PASSWORD = "SET PASSWORD",
    SET_LOGIN_STATUS = "SET LOGIN STATUS"
}

export const resetLoginAction = () => {
    return {
        type: ACTIONS.RESET_LOGIN
    }
}

export const setEmailAction = (email: string) => {
    return {
        type: ACTIONS.SET_EMAIL,
        payload: email
    }
}

export const setFullNameAction = (fullName: string) => {
    return {
        type: ACTIONS.SET_FULL_NAME,
        payload: fullName
    }
}

export const setPasswordAction = (password: string) => {
    return {
        type: ACTIONS.SET_PASSWORD,
        payload: password
    }
}


export const setLoggedInAction = (isLoggedIn: boolean) => {
    return {
        type: ACTIONS.SET_LOGIN_STATUS,
        payload: isLoggedIn
    }
}
