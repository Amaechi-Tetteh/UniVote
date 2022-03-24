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
import { loginItem } from "../../shared/types";
import {
  isEmail,
  isString,
  validateInputs,
} from "../../shared/components/inputComponent/validationFunctions";
import { renderForm } from "../../shared/components/inputComponent/renderForm";
import Menu from "../../shared/components/menu/menu";
import { styles as formStyles } from "../signUp/styles";
import { styles as addProposalStyles } from "./styles";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { length_factor } from "../../shared/styles/styles";
import Button from "../../shared/components/button/button";
import { BUTTON_COLORS } from "../../shared/components/button/button";
export default function AddProposalScreen({ navigation }: any): JSX.Element {
  const [formIsValid, setValidStatus] = useState([true, true]);
  const [proposalName, setProposalName] = useState("");
  const [proposalDetails, setProposalDetails] = useState("");
  const [image, setImage] = useState("");

  const handleUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

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
      <BlueHeader
        navigation={navigation}
        title="Create Proposal"
        showArrow={true}
      />
      <SafeAreaView
        style={[
          styles.centered_container,
          styles.screen_padding,
          { width: "100%", justifyContent: "flex-start" },
        ]}
      >
        <View
          style={[formStyles.form_wrapper, { paddingTop: 28 * length_factor }]}
        >
          {renderForm(formItems, formIsValid)}
          <Text style={addProposalStyles.upload_text}>Upload Image</Text>
          <View style={addProposalStyles.image_container}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={addProposalStyles.upload_image}
              />
            ) : (
              <TouchableOpacity
                onPress={handleUpload}
                style={addProposalStyles.upload_button}
              >
                <MaterialIcons
                  name="image"
                  size={36 * length_factor}
                  color="#bebebe"
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
  <Button text="CREATE" width="50%" color={BUTTON_COLORS.BLUE} onPress={onCreate} showPlusIcon={true} flexBasis={160}/>
      
        <Menu navigation={navigation} />
      </SafeAreaView>
    </View>
  );
}
