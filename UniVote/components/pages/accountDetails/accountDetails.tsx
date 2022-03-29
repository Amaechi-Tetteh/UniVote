import React, { useState } from "react"
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native"
import { styles } from "../../shared/styles/styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import { MainContainer, MenuContainer } from "../../shared/components/containers/containers"
import { styles as accountDetailStyles } from "./styles"
import Menu from "../../shared/components/menu/menu"
import Button from "../../shared/components/button/button"
import { BUTTON_COLORS } from "../../shared/components/button/button"
import { MaterialIcons } from "@expo/vector-icons"
import { TEXT_THEMES } from "../../shared/components/button/button"

export default function AccountDetailsScreen({ navigation }: any): JSX.Element {
    const name: string = "Name"
    const hashCode: string = "individual hash code"
    const handlePerks = () => console.log("hello")
    const default_image: string =
        "https://proton-resources-production.imgix.net/c672f2a7711de5d7a98baf48284b527a54899170f2bcf0928ca79da580585da9.png?orient=&auto=compress"

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
                    <View style={accountDetailStyles.image_container}>
                        <Image source={{ uri: default_image }} style={accountDetailStyles.image} />
                    </View>
                    <View style={accountDetailStyles.stars_container}>
                        <View style={accountDetailStyles.star_wrapper}>
                            <MaterialIcons name="star" style={accountDetailStyles.star} />
                        </View>
                        <View style={[accountDetailStyles.star_wrapper, accountDetailStyles.right_hand_corner]}>
                            <MaterialIcons name="star" style={accountDetailStyles.star} />
                        </View>
                        <View style={accountDetailStyles.star_wrapper}>
                            <MaterialIcons name="star-border" style={accountDetailStyles.star} />
                        </View>
                    </View>
                    <Text style={accountDetailStyles.name_text}>{name}</Text>
                    <Text style={accountDetailStyles.hash_text}>{hashCode}</Text>
                    <Button
                        flexBasis={160}
                        text="PERKS"
                        onPress={handlePerks}
                        color={BUTTON_COLORS.BLUE}
                        paddingTop={21}
                        textTheme={TEXT_THEMES.ALL_CAPS}
                    />
                </MainContainer>

                <MenuContainer>
                    <Menu navigation={navigation} />
                </MenuContainer>
            </SafeAreaView>
        </View>
    )
}
