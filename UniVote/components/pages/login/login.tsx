import React, { useState, Dispatch, SetStateAction } from "react";
import {styles} from '../../shared/styles/styles'
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";


export default function LoginScreen({navigation}: any): JSX.Element {
  
  return (
    <View style={styles.centered_container}>
      <SafeAreaView
        style={[
          styles.centered_container,
          styles.screen_padding,
          { width: "100%", justifyContent: "flex-start" },
        ]}
      >
      </SafeAreaView>
    </View>
  );
}

