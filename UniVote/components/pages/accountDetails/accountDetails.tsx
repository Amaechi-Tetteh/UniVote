import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "../../shared/styles/styles";
import BlueHeader from "../../shared/components/blueHeader/blueHeader";


import Menu from "../../shared/components/menu/menu";


export default function AccountDetailsScreen({ navigation }: any): JSX.Element {

  
  return (
    <View style={styles.centered_container}>
      <BlueHeader
        navigation={navigation}
        title="Accout Details"
        showArrow={true}
      />
      <SafeAreaView
        style={[
          styles.centered_container,
          { width: "100%", justifyContent: "flex-start" },
        ]}
      >
       
      
        <Menu navigation={navigation} />
      </SafeAreaView>
    </View>
  );
}
