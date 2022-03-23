import { StyleSheet, Dimensions } from "react-native";

export const screen_length = Dimensions.get("window").height;

export const screen_width = Dimensions.get("window").width;

export const length_factor = screen_length / 844;
export const width_factor = screen_width / 390;

export const styles = StyleSheet.create({
  centered_container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    textAlign: "center",
    backgroundColor:'white'
  },

  header_text:{
fontSize: length_factor * 24,
marginTop: 35* length_factor,
    fontFamily:'BoldFont',
  },


  screen_padding: {
    paddingLeft: 16 * length_factor,
    paddingRight: 16 * length_factor,
  },

  blue_button: {
    backgroundColor: "rgb(20, 20, 245)",
    borderColor: "rgb(153, 153, 153)",
    height: 40 * length_factor,
    borderRadius: 4 * length_factor,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },

  yellow_button:{
   backgroundColor: "rgb(192, 164, 27)",
    borderColor: "rgb(153, 153, 153)",
    height: 40 * length_factor,
    borderRadius: 4 * length_factor,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },

  button_text: {},

  grey_text: {
    color: "rgb(153, 153, 153)",
    fontFamily:"SemiBoldFont",
    fontSize: 14 * length_factor,
    letterSpacing: 1*length_factor
  },

  white_button_text: {
    color: "white",
  },

  
});
