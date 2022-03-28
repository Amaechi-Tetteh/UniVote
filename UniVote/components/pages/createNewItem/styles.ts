import { StyleSheet, Dimensions } from "react-native";
import { length_factor } from "../../shared/styles/styles";

export const styles = StyleSheet.create({

    button:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignContent:'center',
        borderRadius: 4.5 * length_factor,
        borderWidth: 1*length_factor,
        borderColor: 'rgb(189, 189, 189)',
        marginTop: 16 * length_factor,
        marginBottom: 16 * length_factor
    },

    button_text:{
paddingBottom: length_factor * 24,
paddingTop: length_factor * 18,
fontSize:25*length_factor,
color:'rgb(66, 66, 66)',
marginLeft:16*length_factor

    }
    


});
