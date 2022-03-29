import { StyleSheet, Dimensions } from "react-native"
import { length_factor } from "../../shared/styles/styles"

export const styles = StyleSheet.create({
    image_container: {
        height: 310 * length_factor,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    image: {
        height: 310 * length_factor,
        width: 310 * length_factor,
        borderRadius: 155 * length_factor
    },

    stars_container: {
        width: "100%",
        height: 75 * length_factor,

        marginTop: -22 * length_factor,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    star: {
        fontSize: 50 * length_factor,
        height:50*length_factor,
        width:50*length_factor,
        color: "rgb(102, 102, 102)"
    },

    name_text: {
        color: "rgb(66, 66, 66)",
        fontSize: 20 * length_factor,
        lineHeight: 24 * length_factor,
        fontFamily: "SemiBoldFont"
    },

    hash_text: {
        paddingTop: 17 * length_factor,
        fontSize: 16 * length_factor,
        color: "rgb(66, 66, 66)"
    },

  
    star_wrapper: {
        width: 80 * length_factor,
        height: "100%",
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },

    right_hand_corner:{
        justifyContent:'flex-end'
    }
})
