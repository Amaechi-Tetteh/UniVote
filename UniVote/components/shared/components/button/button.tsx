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
    flexGrow,
    textTheme,
    showPlusIcon = false
}: Props): JSX.Element {
    const getBackgroundColor = (color: BUTTON_COLORS) => {
        if (color === BUTTON_COLORS.BLUE) return "#2115f5"
        if (color === BUTTON_COLORS.YELLOW) return "rgb(192, 164, 27)"
        if (color === BUTTON_COLORS.DARK_YELLOW) return 'rgb(140, 118, 0)'
        return "white"
    }
    const getTextStyle= (color: BUTTON_COLORS, textTheme: TEXT_THEMES|undefined, showPlusIcon: boolean):any=>{
        if(textTheme === TEXT_THEMES.YELLOW_TEXT) return  [styles.grey_text, styles.yellow_text]
        if(color === BUTTON_COLORS.CLEAR) return [styles.grey_text]
        if(textTheme === TEXT_THEMES.ALL_CAPS || showPlusIcon ) return [styles.text, styles.boldText]
        return [styles.text]
    }

    const getWidth = ()=>{
        if(flexGrow) return {flexGrow: flexGrow}
        if(flexBasis) return {flexBasis: flexBasis}
        if(width) return {width:width}
        return null
    }

    return (
        <View style={[styles.button_wrapper, getWidth(),{ paddingTop: paddingTop? paddingTop * length_factor: 0 , }]}>
            <TouchableOpacity
                style={[
                    styles.button,
                    
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
    YELLOW = "yellow",
    DARK_YELLOW = "dark yellow"
}
export enum TEXT_THEMES {
   ALL_CAPS = 'ALL CAPS',
   CAPATILISED =  'CAPATALISED',
   YELLOW_TEXT = 'YELLOW TEXT'
}

interface Props{
    text: string,
    width?: string|number,
    color: BUTTON_COLORS,
    showPlusIcon?: boolean,
    paddingTop?: number,
    flexBasis?: number,
    flexGrow?:number,
    textTheme?: TEXT_THEMES,
    onPress: any
}