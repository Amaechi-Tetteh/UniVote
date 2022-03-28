import React, { useState } from "react"
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native"
import { styles } from "../../shared/styles/styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import Menu from "../../shared/components/menu/menu"
import { styles as formStyles } from "../signUp/styles"
import { length_factor } from "../../shared/styles/styles"
import { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import { styles as createItemStyles } from "./styles"
import { MenuContainer, MainContainer } from "../../shared/components/containers/containers"
export default function CreateItemScreen({ navigation }: any): JSX.Element {
    const onPress = (route: NAVIGATION_ROUTES): void => navigation.navigate(route)

    interface CreationChoices {
        label: string
        navigateTo: NAVIGATION_ROUTES
        onPress: (route: NAVIGATION_ROUTES) => void
    }

    const choices: CreationChoices[] = [
        { label: "Proposal", navigateTo: NAVIGATION_ROUTES.CREATE_PROPOSAL, onPress: onPress },
        { label: "Referendum", navigateTo: NAVIGATION_ROUTES.CREATE_REFERENDUM, onPress: onPress }
    ]

    const renderChoices = (choices: CreationChoices[]): JSX.Element[] => {
        return choices.map((choice, i) => {
            return (
                <TouchableOpacity onPress={() => onPress(choice.navigateTo)} style={createItemStyles.button}>
                    <Text style={createItemStyles.button_text}>{choice.label}</Text>
                </TouchableOpacity>
            )
        })
    }

    return (
        <View style={styles.centered_container}>
            <BlueHeader navigation={navigation} title="Create Proposal/Referendum" showArrow={true} />
            <SafeAreaView
                style={[
                    styles.centered_container,
                    styles.screen_padding,
                    { width: "100%", justifyContent: "flex-start" }
                ]}
            >
                <MainContainer>
                    <View style={[formStyles.form_wrapper, { paddingTop: 28 * length_factor }]}>
                        {renderChoices(choices)}
                    </View>
                </MainContainer>
                <MenuContainer>
                    <Menu navigation={navigation} />
                </MenuContainer>
            </SafeAreaView>
        </View>
    )
}
