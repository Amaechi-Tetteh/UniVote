import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { length_factor } from "../../styles/styles"

export enum BUTTON_COLORS {
    CLEAR = "clear",
    BLUE = "blue",
    YELLOW = "yellow"
}

export default function Button({
    text,
    width,
    color,
    onPress,
    paddingTop,
    flexBasis,
    showPlusIcon = false
}: any): JSX.Element {
    const getBackgroundColor = (color: BUTTON_COLORS) => {
        console.log(color)
        if (color === BUTTON_COLORS.BLUE) return "#2115f5"
        if (color === BUTTON_COLORS.YELLOW) return "rgb(192, 164, 27)"
        return "white"
    }

    return (
        <View style={[styles.button_wrapper, { paddingTop: paddingTop * length_factor }]}>
            <TouchableOpacity
                style={[
                    styles.button,
                    flexBasis ? { flexBasis: flexBasis } : { width: width },
                    { backgroundColor: getBackgroundColor(color) }
                ]}
                onPress={onPress}
            >
                {showPlusIcon ? (
                    <MaterialIcons name="add" color="white" size={24 * length_factor} style={styles.icon} />
                ) : null}
                <Text
                    style={[
                        color !== BUTTON_COLORS.CLEAR ? styles.text : styles.grey_text,
                        showPlusIcon ? styles.boldText : null
                    ]}
                >
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
