import React from "react"
import { styles } from "../../shared/styles/styles"
import { View, Text, SafeAreaView, Image } from "react-native"
import { styles as loginStyles } from "../signUp/styles"
import Button from "../../shared/components/button/button"
import { BUTTON_COLORS, TEXT_THEMES } from "../../shared/components/button/button"
import { NavigationProps } from "../../shared/types"
import { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import { styles as pageStyles } from "./styles"
import { MainContainer } from "../../shared/components/containers/containers"

export default function LandingScreen({ navigation }: NavigationProps): JSX.Element {
    const onExistingAccount = () => navigation.navigate(NAVIGATION_ROUTES.LOGIN)

    const landingImage = require("../../../assets/landingImage.png")

    const onSignUp = () => navigation.navigate(NAVIGATION_ROUTES.SIGN_UP)

    return (
        <View style={styles.centered_container}>
            <SafeAreaView style={[styles.centered_container, styles.screen_padding, { width: "100%", justifyContent: "flex-start" }]}>
                <MainContainer>
                    <View style={loginStyles.header}>
                        <Text style={pageStyles.logo_text}>chainVote</Text>
                    </View>
                    <Image source={landingImage} style={pageStyles.image} />
                    <Button text="SIGNUP" width="100%" color={BUTTON_COLORS.BLUE} onPress={onSignUp} paddingTop={35} />

                    <Button
                        text="ALREADY HAVE AN ACCOUNT"
                        width="100%"
                        color={BUTTON_COLORS.CLEAR}
                        onPress={onExistingAccount}
                        paddingTop={20}
                        textTheme={TEXT_THEMES.YELLOW_TEXT}
                    />
                </MainContainer>
            </SafeAreaView>
        </View>
    )
}
