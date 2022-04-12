import { StyleSheet, Dimensions } from "react-native"
import { length_factor } from "../../styles/styles"

export const styles = StyleSheet.create({
    menu_container: {
        display: "flex",
        width: "100%",
        justifyContent: "center"
    },

    menu_item: {
        color: "rgb(102, 102, 102)",
        flex: 1
    },

    menu_wrapper: {
        width: "100%",
        alignContent: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})
