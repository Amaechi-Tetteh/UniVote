import React from "react"
import { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import { MainContainer, MenuContainer } from "../../shared/components/containers/containers"
import { View, SafeAreaView } from "react-native"
import Menu from "../../shared/components/menu/menu"
import { NavigationProps } from "../../shared/types"
import { styles } from "../../shared/styles/styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import SettingsBox from "../../shared/components/settingsBox/settingsBox"
import { CustomSafeView } from "../../shared/components/safeView/safeView"

export default function MetaMaskScreen({ navigation }: NavigationProps): JSX.Element {
    return (
        <CustomSafeView showTopColor={true}>
            <BlueHeader
                navigation={navigation}
                title="Metamask"
                showArrow={true}
                route={NAVIGATION_ROUTES.ACCOUNT_DETAILS}
            />

            <MainContainer>
                <SettingsBox paddingTop={19} title="Link Metamask Account" icon="link" />
                <SettingsBox paddingTop={19} title="Add Ethereum" icon="add-box" />
                <SettingsBox paddingTop={30} title="MetaMask Account Details" icon="chevron-right" />
            </MainContainer>
            <MenuContainer>
                <Menu navigation={navigation} />
            </MenuContainer>
        </CustomSafeView>
    )
}
