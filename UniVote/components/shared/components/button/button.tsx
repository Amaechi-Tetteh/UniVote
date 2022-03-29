import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { length_factor } from "../../styles/styles"


export default function Button({
    text,
    width,
    color,
    onPress,
    paddingTop,
    flexBasis,
    textTheme,
    showPlusIcon = false
}: Props): JSX.Element {
    const getBackgroundColor = (color: BUTTON_COLORS) => {
        if (color === BUTTON_COLORS.BLUE) return "#2115f5"
        if (color === BUTTON_COLORS.YELLOW) return "rgb(192, 164, 27)"
        return "white"
    }
    const getTextStyle= (color: BUTTON_COLORS, textTheme: TEXT_THEMES|undefined, showPlusIcon: boolean):any=>{

        if(color === BUTTON_COLORS.CLEAR) return [styles.grey_text]
        if(textTheme === TEXT_THEMES.ALL_CAPS || showPlusIcon ) return [styles.text, styles.boldText]
        return [styles.text]
    }

    return (
        <View style={[styles.button_wrapper, { paddingTop: paddingTop? paddingTop * length_factor: 0 }]}>
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
                    style={getTextStyle(color, textTheme, showPlusIcon)}
                >
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export enum BUTTON_COLORS {
    CLEAR = "clear",
    BLUE = "blue",
    YELLOW = "yellow"
}
export enum TEXT_THEMES {
   ALL_CAPS = 'ALL_CAPS',
   CAPATILISED =  'CAPATALISED'
}

interface Props{
    text: string,
    width?: string|number,
    color: BUTTON_COLORS,
    showPlusIcon?: boolean,
    paddingTop?: number,
    flexBasis?: number,
    textTheme?: TEXT_THEMES,
    onPress: any
}