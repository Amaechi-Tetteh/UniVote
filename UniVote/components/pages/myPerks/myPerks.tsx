import React, { useEffect } from "react"
import { Text } from "react-native"
import { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../reducers"
import SearchResultsTemplate from "../../shared/components/searchResults/searchResultsTemplate"
import { useIsFocused } from "@react-navigation/native"
import { ResultItem } from "../../shared/components/searchResults/searchResultsTemplate"
import { exampleImage } from "./exampleImage"
import { setMyPerksAction } from "../../../actions/actions.myPerks"
import { NavigationProps } from "../../shared/types"
export default function MyPerksScreen({ navigation }: NavigationProps): JSX.Element {
    const isFocused = useIsFocused()

    const dispatch = useDispatch()
    const myPerks = useSelector((state: RootState) => state.myPerks)

    useEffect(() => {
        // Update the document title using the browser API
        dispatch(setMyPerksAction(examplePerks))
    }, [isFocused])

    const onSelectItem = () => navigation.navigate(NAVIGATION_ROUTES.NFT_DETAILS)
    return (
        <SearchResultsTemplate
            onSelectItem={onSelectItem}
            results={myPerks}
            navigation={navigation}
            itemHeight={245}
            imageHeight={178}
            titleFontSize={20}
            header="Perks"
        />
    )
}

const examplePerks: ResultItem[] = [
    {
        title: "Stag NFT",
        image: "data:image/png;base64," + exampleImage,
        description:'Redeemable at SU',
        id: "dsdsds"
    },
     {
        title: "Stag NFT",
        image: "data:image/png;base64," + exampleImage,
        description:'Redeemable at SU',
        id: "dsdsdsdsds"
    },
     {
        title: "Stag NFT",
        image: "data:image/png;base64," + exampleImage,
        description:'Redeemable at SU',
        id: "dsdsds111"
    },
     {
        title: "Stag NFT",
        image: "data:image/png;base64," + exampleImage,
        description:'Redeemable at SU',
        id: "dsdsds232"
    },
      {
        title: "Stag NFT",
        image: "data:image/png;base64," + exampleImage,
        description:'Redeemable at SU',
        id: "dsdsds11e1"
    },
     {
        title: "Stag NFT",
        image: "data:image/png;base64," + exampleImage,
        description:'Redeemable at SU',
        id: "dsdsds232w"
    }
]
