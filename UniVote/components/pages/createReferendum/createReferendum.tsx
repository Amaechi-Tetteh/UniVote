import React, { useState, useEffect } from "react"
import { View, SafeAreaView } from "react-native"
import { styles } from "../../shared/styles/styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import { loginItem } from "../../shared/types"
import { isString, validateInputs } from "../../shared/components/inputComponent/validationFunctions"
import { renderForm } from "../../shared/components/inputComponent/renderForm"
import Menu, { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import { styles as formStyles } from "../signUp/styles"
import { length_factor } from "../../shared/styles/styles"
import Button from "../../shared/components/button/button"
import { BUTTON_COLORS } from "../../shared/components/button/button"
import DropDownButton from "../../shared/components/dropdown/renderDropDown"
import { DropDown } from "../../shared/types"
import { MenuContainer, MainScrollContainer } from "../../shared/components/containers/containers"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../reducers"
import {
    setReferendumImageAction,
    allowReferendumCommentsAction,
    seeReferendumVotersAction,
    setReferendumGroupAction,
    removeReferendumChoiceAction,
    setReferendumTypeAction,
    setNewReferendumNameAction,
    resetNewReferendumAction,
    setNewReferendumDetailsAction,
    addReferendumChoiceAction
} from "../../../actions/actions.createReferendum"
import UploadImage from "../../shared/components/imageUpload/imageUpload"
import { REFERENDUM_TYPE } from "../../../reducers/types"
import { NavigationProps } from "../../shared/types"
import { ITEM_TYPE } from "../../../reducers/types"

export default function CreateReferendumScreen({ navigation }: NavigationProps): JSX.Element {
    const [formIsValid, setValidStatus] = useState([true, true])

    const createReferendumState = useSelector((state: RootState) => state.newReferendum)

    const dispatch = useDispatch()

    const onUpload = (imageUri: string) => dispatch(setReferendumImageAction(imageUri))

    const referendumFormItems: loginItem[] = [
        {
            label: "Referendum",
            placeholder: "Enter Referendum Name...",
            validator: isString,
            onChange: (name: string) => dispatch(setNewReferendumNameAction(name)),
            value: createReferendumState.name
        },
        {
            label: "Referendum Details",
            placeholder: "Enter Referendum Details...",
            validator: isString,
            onChange: (details: string) => dispatch(setNewReferendumDetailsAction(details)),
            value: createReferendumState.details
        }
    ]

    const referendumTypeDropDown: DropDown = {
        label: "Referendum type",
        items: [
            { label: "Private Referendum", value: "private" },
            { label: "Public Referendum", value: "public" }
        ],
        value: createReferendumState.type,
        onChange: (type: REFERENDUM_TYPE) => dispatch(setReferendumTypeAction(type)),
        placeholder: "Select...",
        accessibilityLabel: "Select referendum type"
    }

    const referendumGroupDropDown: DropDown = {
        label: "Private Referendum Group",
        items: [
            { label: "Filipino Society", value: "Filipino Society" },
            { label: "USRFC", value: "USRFC" }
        ],
        value: createReferendumState.group,
        onChange: (group: string) => dispatch(setReferendumGroupAction(group)),
        placeholder: "Select...",
        accessibilityLabel: "Select proposal group"
    }

    const seeVotersDropDown: DropDown = {
        label: "See Voters",
        items: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
        ],
        value: createReferendumState.seeVoters,
        onChange: (text: string) => dispatch(seeReferendumVotersAction(text)),
        placeholder: "Select...",
        accessibilityLabel: "Select see voters"
    }

    const allowCommentsDropDown: DropDown = {
        label: "AllowComments",
        items: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
        ],
        value: createReferendumState.allowComments,
        onChange: (text: string) => dispatch(allowReferendumCommentsAction(text)),
        placeholder: "Select...",
        accessibilityLabel: "Allow comments?"
    }

    const onCreate = () => {
        let isValidArray: boolean[] = validateInputs(
            [createReferendumState.name, createReferendumState.details],
            referendumFormItems
        )
        if (isValidArray.every(Boolean)) navigation.navigate(NAVIGATION_ROUTES.THANKYOU_FOR_CREATING_PROPOSAL, {message:'Your Referendum has been registered'})
        else setValidStatus(isValidArray)
    }

    useEffect(() => {
        dispatch(resetNewReferendumAction())
    }, [])

    return (
        <View style={styles.centered_container}>
            <BlueHeader navigation={navigation} title="Create Referendum" showArrow={true} route={NAVIGATION_ROUTES.TRENDING_PROPOSALS}/>
            <SafeAreaView
                style={[
                    styles.centered_container,
                    { width: "100%", justifyContent: "flex-start" }
                ]}
            >
                <MainScrollContainer>
                    <View style={[formStyles.form_wrapper, { paddingTop: 28 * length_factor }]}>
                        {renderForm(referendumFormItems, formIsValid)}

                        <DropDownButton dropdown={referendumTypeDropDown} />
                        <DropDownButton dropdown={referendumGroupDropDown} />
                        <DropDownButton dropdown={seeVotersDropDown} />
                        <DropDownButton dropdown={allowCommentsDropDown} />
                        <UploadImage onUpload={onUpload} imageUri={createReferendumState.image} />
                    </View>

                    <Button
                        text="CREATE"
                        color={BUTTON_COLORS.BLUE}
                        onPress={onCreate}
                        showPlusIcon={true}
                        width={160}
                        paddingTop={14}
                    />
                </MainScrollContainer>
                <MenuContainer>
                    <Menu navigation={navigation} />
                </MenuContainer>
            </SafeAreaView>
        </View>
    )
}
