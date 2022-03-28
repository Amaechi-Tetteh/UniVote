import React, { useState } from "react"
import { loginItem } from "../../shared/types"
import { renderForm } from "../../shared/components/inputComponent/renderForm"
import { View, Text, SafeAreaView, TouchableOpacity, MaskedViewBase } from "react-native"
import { validateInputs, isString } from "../../shared/components/inputComponent/validationFunctions"
import { styles } from "../../shared/styles/styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import { styles as formStyles } from "../signUp/styles"
import Menu from "../../shared/components/menu/menu"
import { length_factor } from "../../shared/styles/styles"
import Button from "../../shared/components/button/button"
import { BUTTON_COLORS } from "../../shared/components/button/button"
import { MenuContainer, MainContainer } from "../../shared/components/containers/containers"

export default function SearchProposalScreen({ navigation }: any): JSX.Element {
    const [searchTerm, setSearchTerm] = useState("")
    const [formIsValid, setValidStatus] = useState([true])

    const formItems: loginItem[] = [
        {
            label: "Proposal",
            placeholder: "Enter Proposal Name/Keyword...",
            validator: isString,
            onChange: setSearchTerm,
            value: searchTerm
        }
    ]

    const onSearch = () => {
        let isValidArray: boolean[] = validateInputs([searchTerm], formItems)
        if (isValidArray.every(Boolean)) {
        } else setValidStatus(isValidArray)
    }

    return (
        <View style={styles.centered_container}>
            <BlueHeader title={"Search Proposal"} navigation={navigation} showArrow={true} />
            <SafeAreaView
                style={[
                    styles.centered_container,
                    styles.screen_padding,
                    { width: "100%", justifyContent: "flex-start" }
                ]}
            >
                <MainContainer>
                    <View style={[formStyles.form_wrapper, { paddingTop: 28 * length_factor }]}>
                        {renderForm(formItems, formIsValid)}
                    </View>

                    <Button
                        text="Search Proposal"
                        width="100%"
                        color={BUTTON_COLORS.YELLOW}
                        onPress={onSearch}
                        paddingTop={35}
                    />
                </MainContainer>
                <MenuContainer>
                    <Menu navigation={navigation} />
                </MenuContainer>
            </SafeAreaView>
        </View>
    )
}
