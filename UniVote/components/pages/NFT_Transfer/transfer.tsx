import React, { useEffect } from "react"
import { View, Text, SafeAreaView, ScrollView, Image, TextInput } from "react-native"
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
import { setReceiverHashAction } from "../../../actions/actions.NFTtransfer"

export default function NFTTransferScreen({ navigation }: NavigationProps): JSX.Element {
    const dispatch = useDispatch()
    const perkDetails = useSelector((state: RootState) => state.perkDetails)
    const userHash = useSelector((state: RootState) => state.login.hashcode)
    const receiverHash = useSelector((state: RootState) => state.transfer.receiverHash)
    const transferFee = useSelector((state:RootState)=> state.transfer.transferFee)
    const isFocused = useIsFocused()
    const onTransfer = () => navigation.navigate(NAVIGATION_ROUTES.THANKYOU_FOR_CREATING_PROPOSAL,{message: 'Your transfer has been successful'})
  
    useEffect(() => {
        dispatch(setPerkDetailsAction(exampeReward))
    }, [isFocused])

    const handleReceiverHash = (value: string) => dispatch(setReceiverHashAction(value))

    return (
        <View style={styles.centered_container}>
            <BlueHeader title={"NFT Transfer"} navigation={navigation} showArrow={true} />
            <SafeAreaView
                style={[
                    styles.centered_container,
                    styles.screen_padding,
                    { width: "100%", justifyContent: "flex-start", paddingTop: 15 * length_factor }
                ]}
            >
                <MainContainer>
                    <View style={{ width: "100%", height: "100%", paddingBottom: 44 * length_factor }}>
                        <View
                            style={[
                                styles.border_radius2,
                                { height: "100%", width: "100%", display: "flex", alignItems: "center" }
                            ]}
                        >
                            <View style={{ width: 203 * length_factor, height: 223 * length_factor }}>
                                <Image source={{ uri: perkDetails.image }} style={{ width: "100%", height: "100%" }} />
                            </View>
                            <RowSeperator height={22} />
                            <Text style={[styles.text, styles.large_text]}>Transfer from:</Text>
                            <Text style={styles.text}>sender hash</Text>
                            <RowSeperator height={15} />
                            <Text style={[styles.text, styles.large_text]}>Transfer to:</Text>
                            <View
                                style={{
                                    paddingLeft: 10 * length_factor,
                                    paddingRight: 10 * length_factor,
                                    width: "100%"
                                }}
                            >
                                <TextInput
                                    style={[styles.input]}
                                    placeholder="Enter receiver hash..."
                                    placeholderTextColor="rgb(180, 180 ,180)"
                                    value={receiverHash}
                                    onChangeText={value => handleReceiverHash(value)}
                                    keyboardType="numeric"
                                />
                            </View>
                            <Text style={[styles.text, { paddingTop: 10 * length_factor }]}>Transfer fee:</Text>
                            <Text style={styles.text}>£{transferFee}</Text>

                            <Button
                                text="TRANSFER"
                                width={160}
                                color={BUTTON_COLORS.BLUE}
                                textTheme={TEXT_THEMES.ALL_CAPS}
                                onPress={onTransfer}
                                showPlusIcon={true}
                                paddingTop={15}
                            />
                        </View>
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
