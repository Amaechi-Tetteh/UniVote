import React, { useState } from "react"
import { View, Text, SafeAreaView } from "react-native"
import { styles } from "../../shared/styles/styles"
import TrendingItems from "./renderProposalItem"
import { proposalSummary } from "./types"
import { styles as proposalStyles } from "./styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import Menu from "../../shared/components/menu/menu"
import { MenuContainer, MainContainer } from "../../shared/components/containers/containers"
import { NavigationProps, Navigation } from "../../shared/types"
import { NAVIGATION_ROUTES } from "../../../components/shared/components/menu/menu"




export default function TrendingItemsScreen({ navigation }: NavigationProps): JSX.Element {
    const proposals: proposalSummary[] = [
        {
            title: "Proposal 1",
            proposalId: "11111",
            numberOfVotes: 20,
            userHash: "user 1234"
        },
        {
            title: "Proposal 1",
            proposalId: "11111e",
            numberOfVotes: 20,
            userHash: "user 1234"
        },
        {
            title: "Proposal 1",
            proposalId: "11111ew",
            numberOfVotes: 20,
            userHash: "user 1234"
        },
        {
            title: "Proposal 1",
            proposalId: "11111eh",
            numberOfVotes: 20,
            userHash: "user 1234"
        },
        {
            title: "Proposal 1",
            proposalId: "11111ejk",
            numberOfVotes: 20,
            userHash: "user 1234"
        },
        {
            title: "Proposal 1",
            proposalId: "11111ekk",
            numberOfVotes: 20,
            userHash: "user 1234"
        },
        {
            title: "Proposal 1",
            proposalId: "11111efg",
            numberOfVotes: 20,
            userHash: "user 1234"
        }
    ]

    const handlePress = (id:string, navigation:Navigation)=> navigation.navigate(NAVIGATION_ROUTES.PROPOSAL_DETAILS)

    return (
        <View style={styles.centered_container}>
            <BlueHeader navigation={navigation} title="myVote" showArrow={false} />
            <SafeAreaView
                style={[
                    styles.centered_container,
                    styles.screen_padding,
                    { width: "100%", justifyContent: "flex-start" }
                ]}
            >
                <MainContainer>
                    <View style={proposalStyles.header_wrapper}>
                        <Text style={proposalStyles.yellow_subtitle}>Trending Proposals</Text>
                        <Text style={proposalStyles.title}>Private Proposals</Text>
                    </View>
                    <View style={proposalStyles.trending_items_container}>
                        <TrendingItems proposals={proposals} onPress={handlePress} navigation={navigation} />
                    </View>
                </MainContainer>
                <MenuContainer>
                    <Menu navigation={navigation} />
                </MenuContainer>
            </SafeAreaView>
        </View>
    )
}
