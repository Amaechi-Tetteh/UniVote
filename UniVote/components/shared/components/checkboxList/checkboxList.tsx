
import React,{Dispatch, SetStateAction}  from "react";
import {
  View,
  Text,
  FlatList,
  ListRenderItem,

} from "react-native";
import Checkbox from 'expo-checkbox';
import {styles} from './styles'

export interface CheckBoxItem {
    selected: boolean
    label: string,
    onChange: Dispatch<SetStateAction<boolean>>
}

const renderItem: ListRenderItem<CheckBoxItem> = ({ item }) => {
  return (
     <View style={styles.checkboxContainer}>
        <Checkbox
          value={item.selected}
          onValueChange={item.onChange}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
  
  );
};

const renderSeparator = () => {
  return <View style={styles.seperator}></View>;
};

export const renderCheckBoxes = (
  checkboxes: CheckBoxItem[]
): JSX.Element => {
  return (
 
    <FlatList
    style={{ width: '100%', height: "100%", alignContent:'flex-start', display:'flex' }}
      data={checkboxes}
      renderItem={renderItem}
      keyExtractor={(item) => item.label}
      numColumns={1}
      ItemSeparatorComponent={renderSeparator}
    />

  );
};
