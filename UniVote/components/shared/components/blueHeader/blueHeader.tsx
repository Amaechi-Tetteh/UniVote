import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { length_factor } from "../../styles/styles";

export default function BlueHeader({ navigation, title }: any): JSX.Element {
  const onPressBack = () => navigation.navigate.goBack();
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="arrow-back"
        size={24 * length_factor}
        color="white"
        style={styles.back_arrow}
        onPress={onPressBack}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
