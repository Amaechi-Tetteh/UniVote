import { ACTIONS } from "../actions/actions.login"
import {Action, Reducer} from 'redux';


export interface LoginState {
    isLoggedIn: boolean
    email: string
    fullName: string
    password: string,
    userImage: string,
    hashcode: string
}

const initialState: LoginState = {
    isLoggedIn: false,
    email: "",
    fullName: "",
    password: "",
    userImage: '',
    hashcode: ''
}

export function resetLoginReducer(state: LoginState): LoginState {
    return initialState
}

export function setEmailReducer(state: LoginState, payload: string): LoginState {
    return { ...state, email: payload }
}

export function setLoggedInReducer(state: LoginState, payload: boolean): LoginState {
    return { ...state, isLoggedIn: payload }
}

export function setFullNameReducer(state: LoginState, payload: string): LoginState {
    return { ...state, fullName: payload }
}

export function setPasswordReducer(state: LoginState, payload: string): LoginState {
    return { ...state, password: payload }
}

export const reducer:Reducer<LoginState> =(state = initialState, action: any):LoginState => {
    switch (action.type) {
        case ACTIONS.RESET_LOGIN:
            return resetLoginReducer(state)
        case ACTIONS.SET_EMAIL:
            return setEmailReducer(state, action.payload)
        case ACTIONS.SET_FULL_NAME:
            return setFullNameReducer(state, action.payload)
        case ACTIONS.SET_LOGIN_STATUS:
            return setLoggedInReducer(state, action.payload)
        case ACTIONS.SET_PASSWORD:
            return setPasswordReducer(state, action.payload)
        default:
            return state
    }
}
