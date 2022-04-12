import React, { useState } from "react"
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native"
import { styles } from "../../shared/styles/styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import { MainContainer, MenuContainer } from "../../shared/components/containers/containers"
import { styles as accountDetailStyles } from "./styles"
import Menu, { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import Button from "../../shared/components/button/button"
import { BUTTON_COLORS } from "../../shared/components/button/button"
import { MaterialIcons } from "@expo/vector-icons"
import { TEXT_THEMES } from "../../shared/components/button/button"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../reducers"
import { capitaliseFirstLetter } from "../../shared/functions/functions.capitaliseFirstLetter"
import { NavigationProps } from "../../shared/types"
const euthereum: string = '0.005'
const value: string = '£13.19'


export default function AccountDetailsScreen({ navigation }: NavigationProps): JSX.Element {
    const userDetails = useSelector((state: RootState) => state.login)
    const handlePerks = () => navigation.navigate(NAVIGATION_ROUTES.MY_PERKS)
    const handleMyProposals = () => navigation.navigate(NAVIGATION_ROUTES.MY_PROPOSALS)
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
                        <Image
                            source={{ uri: userDetails.userImage ? userDetails.userImage : default_image }}
                            style={accountDetailStyles.image}
                        />
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
                    <Text style={[styles.text,styles.large_text, styles.semibold_text]}>
                        {capitaliseFirstLetter(userDetails.fullName ? userDetails.fullName : "Unknown User")}
                    </Text>
                    <Text style={styles.text}>
                        {userDetails.hashcode ? userDetails.hashcode : "no hash code found"}
                    </Text>
                     <Text style={styles.text}>
                       Eth Balance: {euthereum}/{value}
                    </Text>
                    <View style={styles.button_row}>
                        <Button
                            flexBasis={160}
                            text="PERKS"
                            onPress={handlePerks}
                            color={BUTTON_COLORS.BLUE}
                            paddingTop={21}
                            textTheme={TEXT_THEMES.ALL_CAPS}
                        />

                        <Button
                            flexBasis={160}
                            text="PROPOSALS"
                            onPress={handleMyProposals}
                            color={BUTTON_COLORS.DARK_YELLOW}
                            paddingTop={21}
                            textTheme={TEXT_THEMES.ALL_CAPS}
                        />
                    </View>
                </MainContainer>

                <MenuContainer>
                    <Menu navigation={navigation} />
                </MenuContainer>
            </SafeAreaView>
        </View>
    )
}
