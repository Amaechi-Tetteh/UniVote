import { StyleSheet } from "react-native"
import { length_factor } from "../../styles/styles"

export const styles = StyleSheet.create({

square:{
   
        flexGrow: 0,
        flexShrink: 1,
       flexBasis:'50%',
       height:155*length_factor
  
},

 row: {
        flex: 1,
        justifyContent: 'space-between',
      },


    flat_list_wrapper: {
        width: "100%",
        height: 400 * length_factor,
        paddingTop: 10 * length_factor
    },

    result_item_wrapper: {
    
        width:150*length_factor,
        flex:1
    },

    padding_seperator: {
        width: 10 * length_factor,
        height: "100%"
    },

    seperator: {
        height: 17 * length_factor,
        width: "100%"
    },

    image: {
        width: "100%",
        height: 100
    },

    result_title: {
        fontSize: length_factor * 16,
        color: "rgb(66, 66, 66)",
        textAlign: "left",
        lineHeight: 19 * length_factor,
        minHeight: 40 * length_factor
    },

    title_container: {
        width: "100%",
        padding: 8 * length_factor,
        display: "flex",
        flexDirection: "row"
    },

    centered_container: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

        alignContent: "center",
        width: "100%",
        height: "100%",
        flexDirection: "column"
    },

    results_button: {
        width: "100%",
        height: "100%",
        borderColor: "rgb(189, 189, 189)",
        borderWidth: 1 * length_factor,
        borderRadius: 6.5 * length_factor
    },

})
