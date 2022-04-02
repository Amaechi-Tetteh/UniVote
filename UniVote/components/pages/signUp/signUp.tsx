import React, { useState } from "react"
import { loginItem } from "../../shared/types"
import { renderForm } from "../../shared/components/inputComponent/renderForm"
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native"
import { validateInputs, isEmail, isString } from "../../shared/components/inputComponent/validationFunctions"
import { styles } from "../../shared/styles/styles"
import { styles as loginStyles } from "./styles"
import { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import Button from "../../shared/components/button/button"
import { BUTTON_COLORS } from "../../shared/components/button/button"
import { NavigationProps } from "../../shared/types"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../reducers"
import { setEmailAction, setPasswordAction, setLoggedInAction, setFullNameAction } from "../../../actions/actions.login"

export default function SignUpScreen({ navigation }: NavigationProps): JSX.Element {
    const dispatch = useDispatch()
    const [formIsValid, setValidStatus] = useState([true, true, true])

    const loginState = useSelector((state: RootState) => state.login)

    const setPassword = (password: string) => {
        dispatch(setPasswordAction(password))
    }
    const setEmail = (email: string) => {
        dispatch(setEmailAction(email))
    }

    const setFullName = (name: string) => {
        dispatch(setFullNameAction(name))
    }

    const formItems: loginItem[] = [
        {
            label: "Email",
            placeholder: "Enter email...",
            validator: isEmail,
            onChange: setEmail,
            value: loginState.email
        },
        {
            label: "Password",
            placeholder: "Enter password...",
            validator: isString,
            onChange: setPassword,
            value: loginState.password,
            secure: true
        },
        {
            label: "Full Name",
            placeholder: "Enter full name...",
            validator: isString,
            onChange: setFullName,
            value: loginState.fullName
        }
    ]

    const onSignUp = () => {
        let isValidArray: boolean[] = validateInputs([loginState.email, loginState.password, loginState.fullName], formItems)
        if (isValidArray.every(Boolean)) {
            dispatch(setLoggedInAction(true))
            navigation.navigate(NAVIGATION_ROUTES.TRENDING_PROPOSALS)
        } else setValidStatus(isValidArray)
    }

    const onLogin = () => navigation.navigate(NAVIGATION_ROUTES.LOGIN)

    return (
        <View style={styles.centered_container}>
            <SafeAreaView
                style={[
                    styles.centered_container,
                    styles.screen_padding,
                    { width: "100%", justifyContent: "flex-start" }
                ]}
            >
                <View style={loginStyles.header}>
                    <Text style={styles.header_text}>Signup</Text>
                </View>
                <View style={loginStyles.form_wrapper}>{renderForm(formItems, formIsValid)}</View>

                <Button text="SIGNUP" width="100%" color={BUTTON_COLORS.BLUE} onPress={onSignUp} paddingTop={35} />

                <Button
                    text="ALREADY HAVE AN ACCOUNT?"
                    width="100%"
                    color={BUTTON_COLORS.CLEAR}
                    onPress={onLogin}
                    paddingTop={20}
                />
            </SafeAreaView>
        </View>
    )
}
