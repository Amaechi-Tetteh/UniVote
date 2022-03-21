import React, { useState} from "react";
import {
  View,
  Text,
  SafeAreaView,

} from "react-native";
import { styles } from "../../shared/styles/styles";
import { renderTrendingItems } from "./renderProposalItem";
import { proposalSummary } from "./types";
import {styles as proposalStyles} from './styles'

export default function TrendingItemsScreen({navigation}: any): JSX.Element {

  const proposals: proposalSummary[] = []
 
  return (
    <View style={styles.centered_container}>
      <SafeAreaView
        style={[
          styles.centered_container,
          styles.screen_padding,
          { width: "100%", justifyContent: "flex-start" },
        ]}
      >
        <Text style={proposalStyles.yellow_subtitle}>Trending Proposals</Text>
        <View style={proposalStyles.trending_items_container}>
          {renderTrendingItems(proposals)}
        </View>
       
      </SafeAreaView>
    </View>
  );
}





