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
    backgroundColor: "white",
  },

  header_text: {
    fontSize: length_factor * 24,
    marginTop: 35 * length_factor,
    fontFamily: "BoldFont",
  },

  screen_padding: {
    paddingLeft: 16 * length_factor,
    paddingRight: 16 * length_factor,
  },

  text:{
    fontFamily:'RegularFont',

    fontSize: 16 * length_factor,
    lineHeight: 19 * length_factor,
    color: 'rgb(66, 66, 66)',
    textAlign:'left'
  }
});
