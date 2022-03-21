import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { styles } from "../../shared/styles/styles";
import BlueHeader from "../../shared/components/blueHeader/blueHeader";
import { loginItem } from "../../shared/types";
import {
  isEmail,
  isString,
  validateInputs,
} from "../../shared/components/inputComponent/validationFunctions";
import { renderForm } from "../../shared/components/inputComponent/renderForm";
import Menu from "../../shared/components/menu/menu";

export default function AddProposalScreen({ navigation }: any): JSX.Element {
  const [formIsValid, setValidStatus] = useState([true, true]);
  const [proposalName, setProposalName] = useState("");
  const [proposalDetails, setProposalDetails] = useState("");

  const formItems: loginItem[] = [
    {
      label: "Proposal",
      placeholder: "Enter Proposal Name...",
      validator: isEmail,
      onChange: setProposalName,
      value: proposalName,
    },
    {
      label: "Proposal Details",
      placeholder: "Enter Proposal Details...",
      validator: isString,
      onChange: setProposalDetails,
      value: proposalDetails,
    },
  ];

  const onCreate = () => {
    let isValidArray: boolean[] = validateInputs(
      [proposalName, proposalDetails],
      formItems
    );
    if (isValidArray.every(Boolean)) console.log("boo");
    else setValidStatus(isValidArray);
  };

  return (
    <View style={styles.centered_container}>
      <BlueHeader navigation={navigation} title="Create Proposal" />
      <SafeAreaView
        style={[
          styles.centered_container,
          styles.screen_padding,
          { width: "100%", justifyContent: "flex-start" },
        ]}
      >
        {renderForm(formItems, formIsValid)}

        <Text></Text>

        <Menu />
      </SafeAreaView>
    </View>
  );
}
