import React from "react"
import { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../reducers"
import { MainContainer, MenuContainer } from "../../shared/components/containers/containers"
import { View, SafeAreaView } from "react-native"
import Menu from "../../shared/components/menu/menu"
import { NavigationProps } from "../../shared/types"
import { styles } from "../../shared/styles/styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import SettingsBox from "../../shared/components/settingsBox/settingsBox"

export default function AccountSettingsScreen({ navigation }: NavigationProps): JSX.Element {
    const passwordLength = useSelector((state: RootState) => state.login.password.length)
    return (
        <View style={styles.centered_container}>
            <BlueHeader navigation={navigation} title="Account Settings" showArrow={true} />
            <SafeAreaView
                style={[
                    styles.centered_container,
                    styles.screen_padding,
                    { width: "100%", justifyContent: "flex-start" }
                ]}
            >
                <MainContainer>
                    <SettingsBox paddingTop={19} title="Account Name" details="marc.lupton" />
                    <SettingsBox paddingTop={19} title="Account Password" details={"*".repeat(10)} />
                    <SettingsBox paddingTop={30} title="Student Email" details="marc.lupton@uni.com" />
                </MainContainer>
                <MenuContainer>
                    <Menu navigation={navigation} />
                </MenuContainer>
            </SafeAreaView>
        </View>
    )
}
