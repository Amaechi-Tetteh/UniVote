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
        flex: 4
    },

    main_content_container: {
        flex: 14
    },
})
