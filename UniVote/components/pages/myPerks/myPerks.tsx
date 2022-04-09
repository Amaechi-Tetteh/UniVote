import React from "react"
import { Text } from "react-native"
import { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../reducers"
import SearchResultsTemplate from "../../shared/components/searchResults/searchResultsTemplate"
export default function MyPerksScreen({ navigation }: any): JSX.Element {
   
    const dispatch = useDispatch()
    const myPerks = useSelector((state:RootState)=> state.myPerks)
const onSelectItem = () => console.log('hi')
    return (
         <SearchResultsTemplate
            onSelectItem={onSelectItem}
            results={myPerks}
            navigation={navigation}
            header="Search Proposal"
        />
    )
}

