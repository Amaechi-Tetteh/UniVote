import { StyleSheet, Dimensions } from "react-native"
import { length_factor } from "../../../shared/styles/styles"

export const styles = StyleSheet.create({
    scroll_view_container: {
        marginTop: 10 * length_factor,
        width: "100%",
        height: "100%",
        borderWidth: 1 * length_factor,
        borderRadius: length_factor * 6.5,
        borderColor: "rgb(189, 189, 189)",
        alignContent: "flex-start",
        padding: 5 * length_factor
    },
    without_border: {
        width: "100%",
        height: "100%",
        alignContent: "flex-start"
    }
})
