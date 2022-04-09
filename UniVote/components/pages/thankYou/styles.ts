import { StyleSheet } from "react-native"
import { length_factor } from "../../shared/styles/styles"

export const styles = StyleSheet.create({

    image:{
        width:'100%',
        height:315 * length_factor,
        marginTop: 23 * length_factor
    },
    title:{
        marginTop: 50 *length_factor,
        fontSize: 30 * length_factor,
        lineHeight: 36 * length_factor,
        fontFamily: 'SemiBoldFont'

    },

    subtitle:{
        marginTop:16*length_factor,
        fontSize: 16*length_factor,
        lineHeight: 19 * length_factor

    },
    button_container:{
        width:'100%',
        justifyContent:'flex-end',
        height:'100%',
        display:'flex',
        paddingBottom: 12 * length_factor,
        alignItems:'center'
    }
})
