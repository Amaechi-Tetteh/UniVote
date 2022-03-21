import React, { useState} from "react";
import { loginItem } from "../../shared/types";
import { renderForm } from "../../shared/components/inputComponent/renderForm";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { validateInputs, isEmail, isString } from "../../shared/components/inputComponent/validationFunctions";
import { styles } from "../../shared/styles/styles";
import { styles as loginStyles } from "./styles";
import { NAVIGATION_ROUTES } from "../../shared/components/menu/menu";

export default function SignUpScreen({navigation}: any): JSX.Element {
  const [formIsValid, setValidStatus] = useState([true, true, true])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')


  const formItems: loginItem[] = [
  {
    label: "Email",
    placeholder: "Enter email...",
    validator: isEmail,
    onChange:  setEmail,
    value: email
  },
  {
    label: "Password",
    placeholder: "Enter password...",
    validator: isString,
    onChange: setPassword,
    value: password
  },
  {
    label: "Full Name",
    placeholder: "Enter full name...",
    validator: isString,
    onChange: setName,
    value:name

  },
];

  const onSignUp = () => {
    let isValidArray: boolean[] = validateInputs([email, password, name], formItems);
    if (isValidArray.every(Boolean))  console.log('boo')
    else setValidStatus(isValidArray);
  };

  const onLogin = () => navigation.navigate(NAVIGATION_ROUTES.LOGIN)

  return (
    <View style={styles.centered_container}>
      <SafeAreaView
        style={[
          styles.centered_container,
          styles.screen_padding,
          { width: "100%", justifyContent: "flex-start" },
        ]}
      >
        <View style={loginStyles.header}>
          <Text style={styles.header_text}>Signup</Text>
        </View>
        <View style={loginStyles.form_wrapper}>
          {renderForm(formItems, formIsValid)}
        </View>
        <View style={loginStyles.button_wrapper}>
          <TouchableOpacity style={[styles.blue_button]} onPress={onSignUp}>
            <Text style={styles.white_button_text}>SIGNUP</Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            loginStyles.button_wrapper,
            loginStyles.second_button_padding,
          ]}
        >
          <TouchableOpacity
            style={[styles.blue_button, loginStyles.clear_button]}
            onPress={onLogin}
          >
            <Text style={styles.grey_text}>ALREADY HAVE AN ACCOUNT?</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}





