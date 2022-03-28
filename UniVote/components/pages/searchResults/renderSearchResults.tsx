import { ResultItem } from "./searchResults";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
  Image
} from "react-native";
import {styles} from './styles'


const renderItem: ListRenderItem<ResultItem> = ({ item }) => {
  return (
       <View style={styles.result_item_wrapper}>
      <View style={[styles.centered_container, styles.padding_seperator]} />
    <TouchableOpacity style={styles.results_button} >
 <Image source={{uri: item.image}} style = {styles.image} />
 <View style={styles.title_container}>
 <Text style={styles.result_title} numberOfLines={2}>{item.title}</Text>
 </View>
    </TouchableOpacity >
       <View style={[styles.centered_container, styles.padding_seperator]} />
    </View>
  
  );
};

const renderSeparator = () => {
  return <View style={styles.seperator}></View>;
};

export const renderSearchItems = (
  results: ResultItem[]
): JSX.Element => {
  return (
 
    <FlatList
    style={{ width: '100%', height: "100%", alignContent:'flex-start', display:'flex' }}
      data={results}
      renderItem={renderItem}
      keyExtractor={(item) => item.proposalId}
      numColumns={2}
      ItemSeparatorComponent={renderSeparator}
       columnWrapperStyle={styles.row}
    />

  );
};
