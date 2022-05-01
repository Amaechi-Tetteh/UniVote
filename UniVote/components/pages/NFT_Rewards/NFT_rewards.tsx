import React, { useEffect } from "react"
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native"
import { length_factor, styles } from "../../shared/styles/styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import Menu, { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import Button, { TEXT_THEMES } from "../../shared/components/button/button"
import { BUTTON_COLORS } from "../../shared/components/button/button"
import { NavigationProps } from "../../shared/types"
import { MenuContainer, MainContainer, RowSeperator } from "../../shared/components/containers/containers"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../reducers"
import { useIsFocused } from "@react-navigation/native"
import { setPerkDetailsAction, NftReward } from "../../../actions/actions.NFTrewards"
import { exampleImage } from "../myPerks/exampleImage"
import { styles as pageStyles } from "./styles"

export default function NFTDetailsScreen({ navigation }: NavigationProps): JSX.Element {
    const dispatch = useDispatch()
    const perkDetails = useSelector((state: RootState) => state.perkDetails)
    const isFocused = useIsFocused()
    const onTransfer = () => navigation.navigate(NAVIGATION_ROUTES.NFT_TRANSFER)
    const onRedeem = () =>
        navigation.navigate(NAVIGATION_ROUTES.THANKYOU_FOR_CREATING_PROPOSAL, { message:'Your NFT has been redeemed, you should receive an email shortly.'})

    useEffect(() => {
        dispatch(setPerkDetailsAction(exampeReward))
    }, [isFocused])

    return (
        <View style={styles.centered_container}>
            <BlueHeader title={"NFT Rewards"} navigation={navigation} showArrow={true} />
            <SafeAreaView
                style={[
                    styles.centered_container,
                    styles.screen_padding,
                    { width: "100%", justifyContent: "flex-start" }
                ]}
            >
                <MainContainer>
                    <View style={{ width: 203 * length_factor, height: 223 * length_factor }}>
                     {perkDetails.image ?   <Image source={{ uri: perkDetails.image }} style={{ width: "100%", height: "100%" }} />:null}
                    </View>
                    <View style={[styles.border_radius1, pageStyles.details_wrapper]}>
                        <Text style={styles.text}>{perkDetails.title}</Text>
                    </View>
                    <RowSeperator height={14} />
                    <View style={[styles.border_radius1, pageStyles.details_wrapper]}>
                        <Text style={styles.text}>{perkDetails.description}</Text>
                    </View>
                    <RowSeperator height={14} />
                    <View style={[styles.border_radius1, pageStyles.details_wrapper]}>
                        <Text style={styles.text}>Redemption Fee: £{perkDetails.redemptionFee}</Text>
                    </View>
                    <View style={[styles.button_row, {paddingTop: 28 * length_factor}]}>
                        <Button
                            text="TRANSFER"
                            flexBasis={160}
                            color={BUTTON_COLORS.BLUE}
                            textTheme={TEXT_THEMES.ALL_CAPS}
                            onPress={onTransfer}
                            showPlusIcon={true}
                            paddingTop={15}
                        />

                        <Button
                            text="REDEEM"
                            flexBasis={160}
                            color={BUTTON_COLORS.DARK_YELLOW}
                            textTheme={TEXT_THEMES.ALL_CAPS}
                            onPress={onRedeem}
                            showPlusIcon={true}
                            paddingTop={15}
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

const exampeReward: NftReward = {
    title: "Stag NFT",
    description: "Free Rubix Ticket",
    redemptionFee: 2,
    id: "232323",
    image: "data:image/png;base64," + exampleImage
}
