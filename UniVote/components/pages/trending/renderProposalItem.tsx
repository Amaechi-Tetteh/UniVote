import { proposalSummary } from "./types";
import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";

const renderItem = (proposal: any): JSX.Element => {
  return (
    <TouchableOpacity style={styles.proposal_item}>
      <View style={styles.title_container}>
        <Text style={styles.title}>{proposal.title}</Text>
      </View>
      <View style={styles.summary_container}>
        <Text style={styles.user_text}>{proposal.userHash}</Text>
        <Text style={styles.vote_text}>`${proposal.numberOfVotes} votes`</Text>
      </View>
    </TouchableOpacity>
  );
};

export const renderTrendingItems = (proposals: proposalSummary[]) => {
  return (
    <FlatList
      style={{ flex: 1, width: "100%", height: "100%" }}
      data={proposals}
      renderItem={renderItem}
      keyExtractor={(item) => item.proposalId}
      numColumns={1}
    />
  );
};
