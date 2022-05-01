import { StyleSheet } from "react-native";
import { length_factor } from "../../../shared/styles/styles";

export const styles = StyleSheet.create({
  upload_text: {
    textAlign: "left",
    paddingBottom:5*length_factor
  },

  upload_image: {
    height: "100%",
    width: "100%",
  },

  image_container: {
    width: "100%",
    height: 181 * length_factor,
  },
  upload_button: {
    height: "100%",
    width: "100%",
    backgroundColor:'rgb(238, 238, 238)',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'

  },
});
