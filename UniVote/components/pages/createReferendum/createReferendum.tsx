import React, { useState } from "react"
import { View, SafeAreaView } from "react-native"
import { styles } from "../../shared/styles/styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import { loginItem } from "../../shared/types"
import { isString, validateInputs } from "../../shared/components/inputComponent/validationFunctions"
import { renderForm } from "../../shared/components/inputComponent/renderForm"
import Menu from "../../shared/components/menu/menu"
import { styles as formStyles } from "../signUp/styles"
import { length_factor } from "../../shared/styles/styles"
import Button from "../../shared/components/button/button"
import { BUTTON_COLORS } from "../../shared/components/button/button"
import DropDownButton from "../../shared/components/dropdown/renderDropDown"
import { DropDown } from "../../shared/types"
import { MenuContainer, MainContainer } from "../../shared/components/containers/containers"

export default function CreateReferendumScreen({ navigation }: any): JSX.Element {
    const [formIsValid, setValidStatus] = useState([true, true])

    const [referendumlName, setReferendumlName] = useState("")
    const [referendumDetails, setReferendumDetails] = useState("")

    const [referendumType, setReferendumType] = useState("")
    const [referendumGroup, setReferendumGroup] = useState("")

    const referendumFormItems: loginItem[] = [
        {
            label: "Referendum",
            placeholder: "Enter Referendum Name...",
            validator: isString,
            onChange: setReferendumlName,
            value: referendumlName
        },
        {
            label: "Referendum Details",
            placeholder: "Enter Referendum Details...",
            validator: isString,
            onChange: setReferendumDetails,
            value: referendumDetails
        }
    ]

    const referendumTypeDropDown: DropDown = {
        label: "Referendum type",
        items: [
            { label: "Private Referendum", value: "private" },
            { label: "Public Referendum", value: "public" }
        ],
        value: referendumType,
        onChange: setReferendumType,
        placeholder: "Select...",
        accessibilityLabel: "Select referendum type"
    }

    const referendumGroupDropDown: DropDown = {
        label: "Private Referendum Group",
        items: [
            { label: "Filipino Society", value: "Filipino Society" },
            { label: "USRFC", value: "USRFC" }
        ],
        value: referendumGroup,
        onChange: setReferendumGroup,
        placeholder: "Select...",
        accessibilityLabel: "Select proposal group"
    }

    const onCreate = () => {
        let isValidArray: boolean[] = validateInputs([referendumlName, referendumDetails], referendumFormItems)
        if (isValidArray.every(Boolean)) console.log("boo")
        else setValidStatus(isValidArray)
    }

    return (
        <View style={styles.centered_container}>
            <BlueHeader navigation={navigation} title="Create Referendum" showArrow={true} />
            <SafeAreaView
                style={[
                    styles.centered_container,
                    styles.screen_padding,
                    { width: "100%", justifyContent: "flex-start" }
                ]}
            >
                <MainContainer>
                    <View style={[formStyles.form_wrapper, { paddingTop: 28 * length_factor }]}>
                        {renderForm(referendumFormItems, formIsValid)}

                        <DropDownButton dropdown={referendumTypeDropDown} />
                        <DropDownButton dropdown={referendumGroupDropDown} />
                    </View>
                    <Button
                        text="CREATE"
                        color={BUTTON_COLORS.BLUE}
                        onPress={onCreate}
                        showPlusIcon={true}
                        flexBasis={160}
                        paddingTop={14}
                    />
                </MainContainer>
                <MenuContainer>
                    <Menu navigation={navigation} />
                </MenuContainer>
            </SafeAreaView>
        </View>
    )
}
