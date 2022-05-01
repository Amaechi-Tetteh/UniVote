import React, { useState } from "react"
import { View, Text, SafeAreaView } from "react-native"
import { styles } from "../../shared/styles/styles"
import TrendingItems from "./renderProposalItem"
import { proposalSummary } from "../../shared/types"
import { styles as proposalStyles } from "./styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import Menu from "../../shared/components/menu/menu"
import { MenuContainer, MainContainer } from "../../shared/components/containers/containers"
import { Navigation } from "../../shared/types"
import { ITEM_TYPE } from "../../../reducers/types"

export default function TrendingItemsTemplate({
    navigation,
    proposals,
    onPressHeader,
    headerText,
    onPressItem
}: Props): JSX.Element {
    return (
        <View style={styles.centered_container}>
            <BlueHeader navigation={navigation} title="chainVote" showArrow={false} />
            <SafeAreaView
                style={[
                    styles.centered_container,
                    styles.screen_padding,
                    { width: "100%", justifyContent: "flex-start" }
                ]}
            >
                <MainContainer>
                    <View style={proposalStyles.header_wrapper}>
                        <Text style={proposalStyles.yellow_subtitle}>{headerText.title}</Text>
                        <Text style={proposalStyles.title} onPress={onPressHeader}>
                            {headerText.subTitle}
                        </Text>
                    </View>
                    <View style={proposalStyles.trending_items_container}>
                        <TrendingItems proposals={proposals} onPress={onPressItem} navigation={navigation} />
                    </View>
                </MainContainer>
                <MenuContainer>
                    <Menu navigation={navigation} />
                </MenuContainer>
            </SafeAreaView>
        </View>
    )
}

export interface HeaderText {
    title: string
    subTitle: string
}

export interface Props {
    navigation: Navigation
    proposals: proposalSummary[]
    headerText: HeaderText
    onPressHeader: () => void
    onPressItem: (id: string, type: ITEM_TYPE, navigation: Navigation) => void
}
