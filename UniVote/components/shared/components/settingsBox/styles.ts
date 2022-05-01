import { StyleSheet } from "react-native"
import { length_factor } from "../../../shared/styles/styles"

export const styles = StyleSheet.create({

    details_wrapper:{
        width:'100%',
        height: 75 * length_factor,
        paddingTop: 12 *length_factor,
        paddingLeft: 12 * length_factor,
        paddingRight: 12 * length_factor
    },
    details_text:{
        fontSize: 14 *length_factor
    },
    icon:{
       color:'rgb(102, 102, 102)',
       position:'absolute',
       right: 10 * length_factor
    }
})
