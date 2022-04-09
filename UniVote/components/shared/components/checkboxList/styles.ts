import { StyleSheet } from "react-native"

import { length_factor } from "../../styles/styles"

export const styles = StyleSheet.create({
    checkboxContainer: {
        display: "flex",
        flexDirection: "row",
        alignContent:'center',
        alignItems:'center',
        paddingTop: 12 * length_factor,
        paddingBottom: 10 * length_factor,
        paddingLeft: 10 *length_factor,
        borderRadius: 6.5 * length_factor,
        borderWidth: 1 * length_factor,
        borderColor: 'rgb(189, 189, 189)'
    },

    checkbox: {width: 18*length_factor, height: 18*length_factor},

    label: {paddingLeft: 11.5 * length_factor},
    seperator: {width:'100%', height: 12 * length_factor}
})
