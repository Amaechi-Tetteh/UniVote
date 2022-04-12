import React from "react"
import { RowSeperator } from "../containers/containers"
import { View, Text } from "react-native"
import { styles, length_factor } from "../../styles/styles"
import { styles as pageStyles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"

interface Props {
    title: string
    details?: string
    icon?: keyof typeof MaterialIcons.glyphMap
    paddingTop?: number
    paddingBottom?: number
}

export default function SettingsBox({ title, details, icon, paddingTop, paddingBottom }: Props): JSX.Element {
    return (
        <React.Fragment>
            <RowSeperator height={paddingTop ? paddingTop * length_factor : 0} />
            <View style={[styles.border_radius2, pageStyles.details_wrapper]}>
                <View>
                    <Text style={styles.text}>{title}</Text>
                    {icon ? <MaterialIcons name={icon} style={pageStyles.icon} size={24 * length_factor} /> : null}
                </View>
                {details ? <Text style={[styles.text, pageStyles.details_text]}>{details}</Text> : null}
            </View>
            <RowSeperator height={paddingBottom ? paddingBottom * length_factor : 0} />
        </React.Fragment>
    )
}
