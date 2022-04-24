import { StyleSheet, Dimensions } from "react-native";
import { length_factor } from "../../shared/styles/styles";

export const styles = StyleSheet.create({

    button:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        borderRadius: 4.5 * length_factor,
        borderWidth: 1*length_factor,
        borderColor: 'black',
        marginTop: 16 * length_factor,
    },

    button_text:{
paddingBottom: length_factor * 22,
paddingTop: length_factor * 18,
fontSize:20*length_factor,
color:'white',
marginLeft:16*length_factor

    },
    icon:{
        fontSize:24*length_factor,
        color:'white',
        position:'absolute',
        right: 24 * length_factor
    }
    


});
