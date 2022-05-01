import { StyleSheet, Dimensions } from "react-native"

export const screen_length = Dimensions.get("window").height

export const screen_width = Dimensions.get("window").width

export const length_factor = screen_length / 844
export const width_factor = screen_width / 390

export const styles = StyleSheet.create({
    centered_container: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        textAlign: "center",
        backgroundColor: "white"
    },

    header_text: {
        fontSize: length_factor * 24,
        marginTop: 35 * length_factor,
        fontFamily: "BoldFont"
    },

    screen_padding: {
        paddingLeft: 16 * length_factor,
        paddingRight: 16 * length_factor,
    },

    text: {
        fontFamily: "RegularFont",
        fontSize: 16 * length_factor,
        lineHeight: 19 * length_factor,
        color: "rgb(66, 66, 66)",
        textAlign: "left"
    },
    semibold_text: { fontFamily: "SemiBoldFont" },
    large_text: {
        fontSize: 20 * length_factor,
        lineHeight: 24 * length_factor
    },
    button_row: {
        width: "100%",
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-around"
    },

    border_radius1: {
        borderRadius: 4.5 * length_factor,
        borderColor: "rgb(189, 189, 189)",
        borderWidth: 1 * length_factor
    },
    border_radius2: {
        borderRadius: 6.5 * length_factor,
        borderColor: "rgb(189, 189, 189)",
        borderWidth: 1 * length_factor
    },
    input: {
        width: "100%",
        borderRadius: 4.5 * length_factor,
        height: 40.8 * length_factor,
        marginTop: 10 * length_factor,
        borderWidth: 1 * length_factor,
        paddingRight: 10 * length_factor,
        paddingLeft: 10 * length_factor,
        borderColor: "rgb(221,221,221)",
        lineHeight: 20 * length_factor
    }
})
