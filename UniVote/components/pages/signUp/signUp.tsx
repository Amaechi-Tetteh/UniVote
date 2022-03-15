import React, { useState, Dispatch, SetStateAction, Props } from "react";

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { isEmail, isString } from "./helperFunctions";
import { styles } from "../../shared/styles/styles";
import { styles as loginStyles } from "./styles";

export default function SignUpScreen({navigation}: any): JSX.Element {
  const [formIsValid, setValidStatus] = useState([true, true, true])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')


  const formItems: signUp[] = [
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

  const onLogin = () => navigation.navigate('Login')

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


const validateInputs = (inputs: string[], formItems: signUp[]): boolean[] => {
  let isValidArray: boolean[] = [];
  formItems.map((item, i) => {
    isValidArray.push(item.validator(inputs[i]));
  });
  return isValidArray;
};


interface signUp {
  label: string;
  validator(input: string): boolean;
  placeholder: string;
  onChange: Dispatch<SetStateAction<string>>;
  value:string
}

const renderForm = (
    formItems: signUp[],
    validStatus: boolean[]
  ): JSX.Element[] => {
    return formItems.map((item, i) => {
      return (
        <View style={loginStyles.form_item} key={item.label}>
          <Text style={styles.form_label_text}>{item.label}</Text>
          <TextInput
            style={[
              loginStyles.input,
              styles.input_text,
              validStatus[i]
                ? loginStyles.valid_input
                : loginStyles.invalid_input,
            ]}
            placeholder={item.placeholder}
            placeholderTextColor='rgb(180, 180 ,180)'
            value ={item.value}
            onChangeText={item.onChange}
            keyboardType="numeric"
          />
        </View>
      );
    });
  };