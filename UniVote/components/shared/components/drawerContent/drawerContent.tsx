import * as React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import { length_factor } from "../../styles/styles"
import { MaterialIcons } from "@expo/vector-icons"
import { styles as commonStyles } from "../../styles/styles"
import { NAVIGATION_ROUTES } from "../menu/menu"
import { useDispatch } from "react-redux"
import { setLoggedInAction } from "../../../../actions/actions.login"
import { metaMaskIcon } from "./metaMaskIcon"
import { CustomSafeView } from "../safeView/safeView"
export default function DrawerContent(props: any) {
    const dispatch = useDispatch()

    return (
       < CustomSafeView showTopColor={true}>
        <DrawerContentScrollView contentContainerStyle={{ paddingTop: 0 }} {...props}>
            <View style={styles.header}>
                <View style={styles.row}>
                    <MaterialIcons name="account-circle" style={styles.headerIcon} />
                    <Text style={[commonStyles.text, { color: "rgb(255, 255, 255)", fontSize: 18 * length_factor }]}>
                        Settings
                    </Text>
                </View>
            </View>
            <View style={styles.content_container}>
                <CustomDrawerItem
                    label="Account"
                    onPress={() => props.navigation.navigate(NAVIGATION_ROUTES.ACCOUNT_SETTINGS)}
                    icon="person"
                />
                <CustomDrawerItem
                    label="MetaMask"
                    onPress={() => props.navigation.navigate(NAVIGATION_ROUTES.META_MASK)}
                    imageUri={metaMaskIcon}
                />

                <CustomDrawerItem
                    label="Log Out"
                    onPress={() => {
                        dispatch(setLoggedInAction(false))
                        props.navigation.navigate(NAVIGATION_ROUTES.LANDING)
                    }}
                    icon="exit-to-app"
                />
                <View style={styles.divider}></View>
                <CustomDrawerItem
                    label="Privacy"
                    onPress={() => {
                        console.log("need to go to privacy page")
                    }}
                    icon="lock"
                />
                <CustomDrawerItem
                    label="Contact Us"
                    onPress={() => {
                        console.log("ned to go to contact us page")
                    }}
                    icon="chat"
                />
            </View>
        </DrawerContentScrollView>
        </CustomSafeView>
    )
}

interface DrawerItemProps {
    onPress: () => any
    icon?: keyof typeof MaterialIcons.glyphMap
    imageUri?: string
    label: string
}

function CustomDrawerItem({ onPress, icon, imageUri, label }: DrawerItemProps): JSX.Element {
    return (
        <TouchableOpacity style={styles.drawerRow} onPress={onPress}>
            {icon ? (
                <MaterialIcons name={icon} style={styles.icon} />
            ) : (
                <Image source={{ uri: imageUri }} style={{ height: 24 * length_factor, width: 24 * length_factor }} />
            )}
            <Text style={[commonStyles.text, { fontSize: 18 * length_factor, paddingLeft: 20 * length_factor }]}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    drawerRow: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 15 * length_factor,
        paddingBottom: 12 * length_factor,
        paddingTop: 12 * length_factor
    },
    row: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        paddingBottom: 5 * length_factor,
        paddingLeft: 15 * length_factor
    },
    headerIcon: {
        color: "white",
        fontSize: 24 * length_factor,
        paddingRight: 10 * length_factor
    },
    icon: {
        color: "rgb(102, 102, 102)",
        fontSize: 24 * length_factor
    },
    header: {
        width: "100%",
        backgroundColor: "blue",
        height: 57 * length_factor,
        display: "flex",
        justifyContent: "flex-end"
    },
    content_container: {
        width: "100%",
        height: "100%",
        paddingTop: 100 * length_factor
    },
    divider: {
        width: "100%",
        height: 1 * length_factor,
        borderBottomColor: "rgb(228, 228, 228)",
        borderBottomWidth: 1 * length_factor,
        paddingBottom: 10 * length_factor
    }
})
