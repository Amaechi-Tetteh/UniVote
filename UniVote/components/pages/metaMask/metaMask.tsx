import React from "react"
import { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../reducers"
import {
    MainContainer,
    MainScrollContainer,
    MenuContainer,
    RowSeperator
} from "../../shared/components/containers/containers"
import { View, SafeAreaView } from "react-native"
import Menu from "../../shared/components/menu/menu"
import { NavigationProps } from "../../shared/types"
import { styles } from "../../shared/styles/styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import SettingsBox from "../../shared/components/settingsBox/settingsBox"


export default function MetaMaskScreen({ navigation }: NavigationProps): JSX.Element {
  
    return (
        <View style={styles.centered_container}>
            <BlueHeader navigation={navigation} title="Metamask" showArrow={true} route={NAVIGATION_ROUTES.ACCOUNT_DETAILS}/>
            <SafeAreaView
                style={[
                    styles.centered_container,
                    { width: "100%", justifyContent: "flex-start" }
                ]}
            >
                <MainContainer>
                    <SettingsBox paddingTop={19}  title="Link Metamask Account"  icon="link" />
                    <SettingsBox paddingTop={19}  title="Add Ethereum"  icon='add-box' />
                    <SettingsBox
                        paddingTop={30}
                        title="MetaMask Account Details"
                        icon='chevron-right'
                    />
                </MainContainer>
                <MenuContainer>
                    <Menu navigation={navigation} />
                </MenuContainer>
            </SafeAreaView>
        </View>
    )
}
