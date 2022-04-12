import { loginItem } from "../../types";
import {styles} from "./formStyles"
import {styles as commonStyles} from '../../styles/styles'
import {
    View,
    Text,
    TextInput,
  } from "react-native";

export const renderForm = (
    formItems: loginItem[],
    validStatus: boolean[]
  ): JSX.Element[] => {
    return formItems.map((item, i) => {
      return (
        <View style={styles.form_item} key={item.label}>
          <Text style={commonStyles.text}>{item.label}</Text>
          <TextInput
            style={[
              styles.input,
              styles.input_text,
              validStatus[i]
                ? styles.valid_input
                : styles.invalid_input,
            ]}
            placeholder={item.placeholder}
            placeholderTextColor='rgb(180, 180 ,180)'
            value ={item.value}
            onChangeText={item.onChange}
            keyboardType="numeric"
            secureTextEntry={item.secure? true: false} 
          />
        </View>
      );
    });
  };