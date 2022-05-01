import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { length_factor } from "../../styles/styles"
import { Navigation } from "../../types"
import { NAVIGATION_ROUTES } from "../menu/menu"

export default function BlueHeader({ navigation, title, showArrow, route }: Props): JSX.Element {
    const onPressBack = (): void => {
        if(route) navigation.navigate(route)
        else navigation.goBack()
    }

    return (
        <View style={styles.header}>
            {showArrow ? (
                    <MaterialIcons
                    onPress={onPressBack}
                        name="arrow-back"
                        size={24 * length_factor}
                        color="white"
                        style={styles.back_arrow}
                    />
            ) : null}
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

interface Props {
    title: string
    showArrow: boolean
    navigation: Navigation
    route?: NAVIGATION_ROUTES
}
