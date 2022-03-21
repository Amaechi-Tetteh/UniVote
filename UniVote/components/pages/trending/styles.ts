import { StyleSheet } from "react-native";
import { length_factor } from "../../shared/styles/styles";

export const styles = StyleSheet.create({
  proposal_item: {
    width: "100%",
    borderRadius: 6.5 * length_factor,
    borderWidth: 1 * length_factor,
    borderColor: "rgb(189, 189, 189)",
    overflow: "hidden",
    marginLeft: 9 * length_factor,
    marginRight: 9 * length_factor,
  },

  title: {
    color: "rgb(66, 66, 66)",
    fontFamily: "SemiBoldFont",
    fontSize: 16 * length_factor,
    minHeight: 19 * length_factor,
    textAlign: "left",
  },

  title_container: {
    width: "100%",
    paddingTop: 12 * length_factor,
  },

  summary_container: {
    paddingBottom: 15 * length_factor,
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },

  user_text: {
    fontFamily: "RegularFont",
    textAlign: "left",
  },

  vote_text: {
    color: "rgb(66, 66, 66)",
    fontFamily: "SemiBoldFont",
    fontSize: length_factor * 16,
  },

  yellow_subtitle: {
    color: "rgb(140, 118, 0)",
    fontFamily: "SemiBoldFont",
    fontSize: length_factor * 30,
    textAlign: "left",
  },

  trending_items_container: {},
});
