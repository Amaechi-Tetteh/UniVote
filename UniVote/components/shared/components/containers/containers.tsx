import React from "react"
import { View, ScrollView } from "react-native"
import { styles } from "./styles"
import { length_factor } from "../../styles/styles"
export interface LayoutProps {
    children: React.ReactNode
}

interface MainContainerProps extends LayoutProps{
    screenPadding?:boolean
}
export function MenuContainer({ children }: LayoutProps): JSX.Element {
    return <View style={[styles.menu_container, styles.container, styles.screen_padding]}>{children}</View>
}

export function MainContainer({ children, screenPadding = true }: MainContainerProps ): JSX.Element {
    return <View style={[styles.main_content_container, styles.container, screenPadding? styles.screen_padding:null]}>{children}</View>
}

export function CenteredContainer({ children }: LayoutProps): JSX.Element {
    return <View style={styles.center}>{children}</View>
}

export function RowSeperator({height}: SeperatorProps): JSX.Element {
    return <View style={[styles.center, {height: height * length_factor}]} />
}


export function MainScrollContainer({ children }: LayoutProps): JSX.Element {
    return (
        <MainContainer>
            <ScrollView style={{ width: "100%", height: "100%" }} contentContainerStyle={{ alignItems: "center" }}>
                {children}
            </ScrollView>
        </MainContainer>
    )
}


interface SeperatorProps{
    height: number
}