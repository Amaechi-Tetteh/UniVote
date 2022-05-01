import React from "react"
import { View, ScrollView } from "react-native"
import { styles } from "./styles"
import { length_factor } from "../../styles/styles"

export interface LayoutProps {
    children: React.ReactNode
    height?: number,
    showBorder?: boolean
}

export function Scroller({ children, height, showBorder = true}: LayoutProps): JSX.Element {
    return (
        <ScrollView
            contentContainerStyle={{
                flexWrap: "wrap"
            }}
            style={[ showBorder? styles.scroll_view_container: styles.without_border, { height: height? height * length_factor : '100%'}]}
        >
            <View style={{ flex: 1 }}>{children}</View>
        </ScrollView>
    )
}
