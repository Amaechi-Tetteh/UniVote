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
import { MaterialIcons } from "@expo/vector-icons"
import { CustomSafeView } from "../../shared/components/safeView/safeView"
export default function CreateItemScreen({ navigation }: any): JSX.Element {
    const onPress = (route: NAVIGATION_ROUTES): void => navigation.navigate(route)

    interface CreationChoices {
        label: string
        navigateTo: NAVIGATION_ROUTES
        onPress: (route: NAVIGATION_ROUTES) => void
    }

    const choices: CreationChoices[] = [
        { label: "Create Proposal", navigateTo: NAVIGATION_ROUTES.CREATE_PROPOSAL, onPress: onPress },
        { label: "Create Referendum", navigateTo: NAVIGATION_ROUTES.CREATE_REFERENDUM, onPress: onPress }
    ]

    const renderChoices = (choices: CreationChoices[]): JSX.Element[] => {
        return choices.map((choice, i) => {
            return (
                <TouchableOpacity
                    onPress={() => onPress(choice.navigateTo)}
                    style={[
                        createItemStyles.button,
                        {
                            backgroundColor:
                                choice.label === "Create Proposal" ? "rgb(20, 20, 245)" : "rgb(140, 118, 0)"
                        }
                    ]}
                    key={i}
                >
                    <Text style={createItemStyles.button_text}>{choice.label}</Text>
                    <MaterialIcons name="add-box" style={createItemStyles.icon} />
                </TouchableOpacity>
            )
        })
    }

    return (
        <CustomSafeView showTopColor={true}>
            <BlueHeader
                navigation={navigation}
                title="Create Proposal/Referendum"
                showArrow={true}
                route={NAVIGATION_ROUTES.TRENDING_PROPOSALS}
            />
            <MainContainer>
                <View style={[formStyles.form_wrapper, { paddingTop: 28 * length_factor }]}>
                    {renderChoices(choices)}
                </View>
            </MainContainer>
            <MenuContainer>
                <Menu navigation={navigation} />
            </MenuContainer>
        </CustomSafeView>
    )
}
