import React from "react"
import { View, ScrollView } from "react-native"
import { styles } from "./styles"

export interface LayoutProps {
    children: React.ReactNode
}

export function MenuContainer({ children }: LayoutProps): JSX.Element {
    return <View style={[styles.menu_container, styles.container]}>{children}</View>
}

export function MainContainer({ children }: LayoutProps): JSX.Element {
    return <View style={[styles.main_content_container, styles.container]}>{children}</View>
}

export function CenteredContainer({ children }: LayoutProps): JSX.Element {
    return <View style={styles.center}>{children}</View>
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
