import React, { useState } from "react"
import { styles } from "../../shared/styles/styles"
import { View, Text, SafeAreaView } from "react-native"
import { loginItem } from "../../shared/types"
import { styles as loginStyles } from "../signUp/styles"
import { isEmail, isString, validateInputs } from "../../shared/components/inputComponent/validationFunctions"
import { renderForm } from "../../shared/components/inputComponent/renderForm"
import Button from "../../shared/components/button/button"
import { BUTTON_COLORS } from "../../shared/components/button/button"
import { NavigationProps } from "../../shared/types"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../reducers"
import { setEmailAction, setPasswordAction, setLoggedInAction } from "../../../actions/actions.login"
import { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import { MainContainer } from "../../shared/components/containers/containers"

export default function LoginScreen({ navigation }: NavigationProps): JSX.Element {
    const dispatch = useDispatch()
    const [formIsValid, setValidStatus] = useState([true, true])
    const loginState = useSelector((state: RootState) => state.login)

    const setPassword = (password: string) => {
        dispatch(setPasswordAction(password))
    }
    const setEmail = (email: string) => {
        dispatch(setEmailAction(email))
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
        }
    ]

    const onLogin = () => {
        let isValidArray: boolean[] = validateInputs([loginState.email, loginState.password], formItems)
        if (isValidArray.every(Boolean)) {
            dispatch(setLoggedInAction(true))
            navigation.navigate(NAVIGATION_ROUTES.TRENDING_PROPOSALS)
        } else setValidStatus(isValidArray)
    }

    const onForgotPassword = () => {}

    const onSignUp = () => navigation.navigate("SignUp")

    return (
        <View style={styles.centered_container}>
            <SafeAreaView style={[styles.centered_container, { width: "100%", justifyContent: "flex-start" }]}>
                <MainContainer>
                    <View style={loginStyles.header}>
                        <Text style={styles.header_text}>Login</Text>
                    </View>
                    <View style={loginStyles.form_wrapper}>{renderForm(formItems, formIsValid)}</View>

                    <Button text="LOGIN" width="100%" color={BUTTON_COLORS.BLUE} onPress={onLogin} paddingTop={35} />

                    <Button
                        text="FORGOT PASSWORD?"
                        width="100%"
                        color={BUTTON_COLORS.CLEAR}
                        onPress={onForgotPassword}
                        paddingTop={35}
                    />

                    <Button text="SIGNUP" width="100%" color={BUTTON_COLORS.CLEAR} onPress={onSignUp} paddingTop={20} />
                </MainContainer>
            </SafeAreaView>
        </View>
    )
}
