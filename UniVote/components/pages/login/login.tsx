import React, { useState } from "react";
import {styles} from '../../shared/styles/styles'
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { loginItem } from "../../shared/types";
import {styles as loginStyles} from '../signUp/styles'
import { isEmail, isString,validateInputs } from "../../shared/components/inputComponent/validationFunctions";
import { renderForm } from "../../shared/components/inputComponent/renderForm";


export default function LoginScreen({navigation}: any): JSX.Element {
  const [formIsValid, setValidStatus] = useState([ true, true])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


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
   
  ];

  const onLogin = () => {
    let isValidArray: boolean[] = validateInputs([email, password], formItems);
    if (isValidArray.every(Boolean))  console.log('boo')
    else setValidStatus(isValidArray);
  };

  const onForgotPassword = () =>{}

  
  const onSignUp = () => navigation.navigate("SignUp")
  
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
          <TouchableOpacity style={[styles.blue_button]} onPress={onLogin}>
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
            onPress={onForgotPassword}
          >
            <Text style={styles.grey_text}>FORGOT PASSWORD?</Text>
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
            onPress={onSignUp}
          >
            <Text style={styles.grey_text}>SIGNUP</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

