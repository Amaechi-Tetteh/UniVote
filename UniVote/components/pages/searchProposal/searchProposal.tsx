import React, { useState } from "react";
import { loginItem } from "../../shared/types";
import { renderForm } from "../../shared/components/inputComponent/renderForm";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import {
  validateInputs,
  isString,
} from "../../shared/components/inputComponent/validationFunctions";
import { styles } from "../../shared/styles/styles";
import BlueHeader from "../../shared/components/blueHeader/blueHeader";
import { styles as formStyles } from "../signUp/styles";
import Menu from "../../shared/components/menu/menu";

export default function SearchProposalScreen({ navigation }: any): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [formIsValid, setValidStatus] = useState([true]);

  const formItems: loginItem[] = [
    {
      label: "Proposal",
      placeholder: "Enter Proposal Name/Keyword...",
      validator: isString,
      onChange: setSearchTerm,
      value: searchTerm,
    },
  ];

  const onSearch = () => {
    let isValidArray: boolean[] = validateInputs([searchTerm], formItems);
    if (isValidArray.every(Boolean)) {
    } else setValidStatus(isValidArray);
  };

  return (
    <View style={styles.centered_container}>
      <BlueHeader
        title={"Search Proposal"}
        navigation={navigation}
        showArrow={true}
      />
      <SafeAreaView
        style={[
          styles.centered_container,
          styles.screen_padding,
          { width: "100%", justifyContent: "flex-start" },
        ]}
      >
        <View style={formStyles.form_wrapper}>
          {renderForm(formItems, formIsValid)}
        </View>
        <View style={formStyles.button_wrapper}>
          <TouchableOpacity
            style={[
              styles.yellow_button
              
            ]}
          >
            <Text style={styles.white_button_text}>Search Proposal</Text>
          </TouchableOpacity>
        </View>
        <Menu navigation={navigation}/>
      </SafeAreaView>
    </View>
  );
}
