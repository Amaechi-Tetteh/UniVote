import React, { useState } from "react"
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native"
import { styles } from "../../shared/styles/styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import { MainContainer, MenuContainer } from "../../shared/components/containers/containers"
import { styles as accountDetailStyles } from "./styles"
import Menu from "../../shared/components/menu/menu"
import Button from "../../shared/components/button/button"
import { BUTTON_COLORS } from "../../shared/components/button/button"
export default function AccountDetailsScreen({ navigation }: any): JSX.Element {
    const name: string = "Name"
    const hashCode: string = "individual hash code"

    const handlePerks = () => console.log("hello")

    return (
        <View style={styles.centered_container}>
            <BlueHeader navigation={navigation} title="Account Details" showArrow={true} />
            <SafeAreaView
                style={[
                    styles.centered_container,
                    { width: "100%", justifyContent: "flex-start" },
                    styles.screen_padding
                ]}
            >
                <MainContainer>
                    <View style={accountDetailStyles.image_container}></View>
                    <Text>{name}</Text>
                    <Text>{hashCode}</Text>
                    <Button
                        flexBasis={160}
                        text="Perks"
                        onPress={handlePerks}
                        color={BUTTON_COLORS.BLUE}
                        paddingTop={21}
                    />
                </MainContainer>

                <MenuContainer>
                    <Menu navigation={navigation} />
                </MenuContainer>
            </SafeAreaView>
        </View>
    )
}
