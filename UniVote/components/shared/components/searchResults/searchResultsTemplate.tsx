import BlueHeader from "../../../shared/components/blueHeader/blueHeader"
import React from "react"
import { View, SafeAreaView } from "react-native"
import { styles } from "../../../shared/styles/styles"
import Menu from "../../../shared/components/menu/menu"
import { renderSearchItems } from "../../../shared/components/searchResults/renderSearchResults"
import { styles as resultsStyles } from "./styles"
import { MainContainer, MenuContainer } from "../../../shared/components/containers/containers"
import { Navigation } from "../../types"

export default function SearchResultsTemplate({
    navigation,
    header,
    results,
    onSelectItem,
    itemHeight = 155,
    imageHeight = 100,
    titleFontSize = 16
}: Props): JSX.Element {
    return (
        <View style={styles.centered_container}>
            <BlueHeader title={header} navigation={navigation} showArrow={true} />
            <SafeAreaView
                style={[
                    styles.centered_container,
                    styles.screen_padding,
                    { width: "100%", justifyContent: "flex-start" }
                ]}
            >
                <MainContainer>
                    <View style={resultsStyles.flat_list_wrapper}>
                        {renderSearchItems(results, itemHeight, imageHeight, titleFontSize, onSelectItem)}
                    </View>
                </MainContainer>
                <MenuContainer>
                    <Menu navigation={navigation} />
                </MenuContainer>
            </SafeAreaView>
        </View>
    )
}

export interface ResultItem {
    id: string
    image: string
    title: string
    description?: string
}

interface Props {
    navigation: Navigation
    header: string
    results: ResultItem[]
    itemHeight: number
    imageHeight: number
    titleFontSize: number
    onSelectItem: (id: string) => void
}
