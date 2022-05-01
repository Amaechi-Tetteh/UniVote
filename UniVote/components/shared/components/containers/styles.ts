import { StyleSheet, Dimensions } from "react-native"
import { length_factor } from "../../styles/styles"

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },

    menu_container: {
        flex: 3
    },

    main_content_container: {
        flex: 14
    },

    center: {
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center"
    }
    ,
    row_seperator:{
        width:'100%'
    },
      screen_padding: {
        paddingLeft: 16 * length_factor,
        paddingRight: 16 * length_factor,
    },
})
