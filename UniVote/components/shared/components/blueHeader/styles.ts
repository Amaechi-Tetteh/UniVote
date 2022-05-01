import { StyleSheet, Dimensions } from "react-native";
import { length_factor } from "../../styles/styles";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#1414f5",
    height: 56 * length_factor,
    justifyContent:'center'
  },
  title:{

    fontFamily: "OswlandBoldFont",
    color:"white",
    fontSize: 20 * length_factor,
    textAlign: 'center'
  },

  back_arrow:{
      position:'absolute',
      left:16 * length_factor,
      zIndex: 3, // works on ios
      elevation: 3, // works on android
  }
});
