import React from "react"
import { SafeAreaView } from "react-native"

interface LayoutProps {
    children: React.ReactNode
    showTopColor: boolean
}

export function CustomSafeView({ children, showTopColor }: LayoutProps): JSX.Element {
    return (
        <React.Fragment>
            <SafeAreaView style={{ flex: 0, backgroundColor: showTopColor? "blue": "white" }} />
            <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
        </React.Fragment>
    )
}
