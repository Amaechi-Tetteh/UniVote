import React, { useState } from "react"
import { loginItem } from "../../shared/types"
import { renderForm } from "../../shared/components/inputComponent/renderForm"
import { View, SafeAreaView } from "react-native"
import { validateInputs, isString } from "../../shared/components/inputComponent/validationFunctions"
import { styles } from "../../shared/styles/styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import { styles as formStyles } from "../signUp/styles"
import Menu from "../../shared/components/menu/menu"
import { length_factor } from "../../shared/styles/styles"
import Button from "../../shared/components/button/button"
import { BUTTON_COLORS } from "../../shared/components/button/button"
import { MenuContainer, MainContainer } from "../../shared/components/containers/containers"
import { NavigationProps } from "../../shared/types"
import { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../reducers"
import { setSearchTermAction, setSearchResultsAction } from "../../../actions/actions.search"
import { ResultItem } from "../../shared/components/searchResults/searchResultsTemplate"
import { image_example } from "../searchResults/image"

export default function SearchProposalScreen({ navigation }: NavigationProps): JSX.Element {
    const dispatch = useDispatch()
    const [formIsValid, setValidStatus] = useState([true])

    const searchTerm = useSelector((state: RootState) => state.search.searchTerm)

    const onChange = (searchTerm: string) => {
        dispatch(setSearchTermAction(searchTerm))
    }

    const formItems: loginItem[] = [
        {
            label: "Proposal",
            placeholder: "Enter Proposal Name/Keyword...",
            validator: isString,
            onChange: onChange,
            value: searchTerm
        }
    ]

    const onSearch = () => {
        let isValidArray: boolean[] = validateInputs([searchTerm], formItems)
        if (isValidArray.every(Boolean)) {
            dispatch(setSearchResultsAction(exampleResults))
            navigation.navigate(NAVIGATION_ROUTES.SEARCH_RESULTS)
        } else setValidStatus(isValidArray)
    }

    return (
        <View style={styles.centered_container}>
            <BlueHeader title="Search Proposal" navigation={navigation} showArrow={true} route={NAVIGATION_ROUTES.TRENDING_PROPOSALS}/>
            <SafeAreaView
                style={[
                    styles.centered_container,
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

const exampleResults: ResultItem[] = [
    {
        id: "sdddsds",
        title: "test title for app with a really long long title, so long long",
        image: "data:image/webp;base64," + image_example
    },
    {
        id: "sdddssddsdsds",
        title: "test title for app2",
        image: "data:image/webp;base64," + image_example
    },
    {
        id: "sdddssddsdsdssds",
        title: "test title for app3",
        image: "data:image/webp;base64," + image_example
    }
]
