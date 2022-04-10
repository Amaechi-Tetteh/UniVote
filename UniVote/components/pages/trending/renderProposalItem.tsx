import { proposalSummary } from "../../shared/types";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from "react-native";
import { styles } from "./styles";
import { Navigation } from "../../shared/types";
import { ITEM_TYPE } from "../../../reducers/types";
import { capitaliseFirstLetter } from "../../shared/functions/functions.capitaliseFirstLetter";



const renderSeparator = () => {
  return <View style={styles.seperator}></View>;
};

export default function TrendingItems ({
  proposals, onPress, navigation
}:Props): JSX.Element  {

  const renderItem: ListRenderItem<proposalSummary> = ({ item }) => {
  return (
    <TouchableOpacity style={styles.proposal_item} onPress={()=>onPress(item.id, item.type, navigation)}>
      <View style={styles.title_container}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.summary_container}>
        <View style={styles.left_text}>
          <Text style={styles.user_text}>{capitaliseFirstLetter(item.type)}</Text>
        </View>
        <View style={styles.right_text}>
          <Text style={styles.vote_text}>{item.numberOfVotes} votes</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
  return (
    <FlatList
      style={{ flex: 1, width: "100%", height: "100%" }}
      data={proposals}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={1}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};

interface Props{
  proposals: proposalSummary[],
  onPress:(id: string, type: ITEM_TYPE, navigation: Navigation) => void,
  navigation: Navigation

}