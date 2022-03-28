import React, { useState } from "react"
import { styles } from "../../shared/styles/styles"
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native"
import { loginItem } from "../../shared/types"
import { styles as loginStyles } from "../signUp/styles"
import { isEmail, isString, validateInputs } from "../../shared/components/inputComponent/validationFunctions"
import { renderForm } from "../../shared/components/inputComponent/renderForm"
import Button from "../../shared/components/button/button"
import { BUTTON_COLORS } from "../../shared/components/button/button"
import { NavigationProps } from "../../shared/types"

export default function LoginScreen({ navigation }: NavigationProps): JSX.Element {
    const [formIsValid, setValidStatus] = useState([true, true])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const formItems: loginItem[] = [
        {
            label: "Email",
            placeholder: "Enter email...",
            validator: isEmail,
            onChange: setEmail,
            value: email
        },
        {
            label: "Password",
            placeholder: "Enter password...",
            validator: isString,
            onChange: setPassword,
            value: password,
            secure: true
        }
    ]

    const onLogin = () => {
        let isValidArray: boolean[] = validateInputs([email, password], formItems)
        if (isValidArray.every(Boolean)) console.log("boo")
        else setValidStatus(isValidArray)
    }

    const onForgotPassword = () => {}

    const onSignUp = () => navigation.navigate("SignUp")

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
            </SafeAreaView>
        </View>
    )
}
