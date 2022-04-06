import { StyleSheet, Dimensions } from "react-native"
import { length_factor } from "../../shared/styles/styles"

export const styles = StyleSheet.create({
    logo_text: {
        paddingTop: 75 * length_factor,
        color: "rgb(20, 20, 245)",
        fontFamily: 'BoldFont',
        fontSize: 42 * length_factor
    }
})
