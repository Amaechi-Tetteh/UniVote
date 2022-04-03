import { StyleSheet, Dimensions } from "react-native"
import { length_factor } from "../../shared/styles/styles"

export const styles = StyleSheet.create({
    commentsWrapper: {
        marginTop: -100 * length_factor,
        paddingLeft: 16 * length_factor,
        paddingRight: 16 * length_factor,
        width: "100%",
        height: 400 * length_factor,
        backgroundColor: "white",
        zIndex: 1
    },

    commentsInnerWrapper: {
        width: "100%",
        height: "100%",
        borderColor: "rgb(189, 189, 189)",
        borderWidth: 1 * length_factor,
        borderRadius: 6.5 * length_factor,
        padding: 15 * length_factor
    },
    header: {
        textAlign: "left",
        fontSize: 25 * length_factor,
        color: "rgb(66, 66, 66)",
        fontFamily: "SemiBoldFont"
    },

    image_container: {
        width: "100%",
        height: 187 * length_factor
    },

    text: {
        fontSize: 16 * length_factor,
        textAlign: "left",
        color: "rgb(66, 66, 66)",
        fontFamily: "SemiBoldFont",
        flexWrap: "wrap"
    },

    content_container: {
        alignContent: "flex-start",
        flexDirection: "column",
        display: "flex",
        width: "100%",
        marginTop: 2.5 * length_factor
    },

    scroll_view_container: {
        marginTop: 36 * length_factor,
        width: "100%",
        flexDirection: "row",
        alignContent: "flex-start",
        marginBottom: 10 * length_factor
    },

    comment_container: {
        height: 72 * length_factor
    },

    title_container: {
        height: 50 * length_factor
    },
    add_comment_container: {
        width: "100%",
        flexDirection: "row",
        display: "flex",
        justifyContent: "center"
    },

    submitIcon: {
        alignItems: "center",
        color: "rgb(88, 125, 248)",
        display: "flex",
        paddingLeft: 10 * length_factor
    }
})
