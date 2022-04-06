import { StyleSheet } from "react-native";
import { length_factor } from "../../styles/styles";

export const styles = StyleSheet.create({
  button: {
    borderColor: "rgb(153, 153, 153)",
    height: 40 * length_factor,
    borderRadius: 4 * length_factor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'row',
    width:'100%'
  

  },

  text: {
    color: "white",
 
  },
    grey_text: {
    color: "rgb(153, 153, 153)",
    fontFamily:"SemiBoldFont",
    fontSize: 14 * length_factor,
    letterSpacing: 1*length_factor
  },
  yellow_text:{
    color:'rgb(192, 164, 27)'
  },

  boldText:{
    fontWeight:'bold', 
    letterSpacing: 1 * length_factor,
  },

  icon:{
    marginLeft: 8 * length_factor,
    marginRight: 8 * length_factor
  },
  button_wrapper:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center'
},

});
