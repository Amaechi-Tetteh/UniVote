import React, { useEffect } from "react"
import { View, Text, FlatList, ListRenderItem } from "react-native"
import Checkbox from "expo-checkbox"
import { styles } from "./styles"
import { ACTIONS } from "../../../../actions/actions.proposalDetails"
import { SelectedReferendumChoice } from "../../../../reducers/types"
import { styles as commonStyles } from "../../styles/styles"
import { ReferendumChoices } from "../../../../reducers/types"

interface Props {
    choices: ReferendumChoices[]
    onChange: (index: number, bool: boolean) => { type: ACTIONS; payload: SelectedReferendumChoice }
}

export default function CheckBoxList({ choices, onChange }:Props): JSX.Element {
  
const renderItem: ListRenderItem<ReferendumChoices> = ({ item, index }) => {
    return (
        <View style={styles.checkboxContainer}>
            <Checkbox
                value={item.selected}
                color={item.selected ? "#4630EB" : undefined}
                onValueChange={value => onChange(index, value)}
                style={styles.checkbox}
            />

            <Text style={[styles.label, commonStyles.text]}>{item.label}</Text>
        </View>
    )
}
    return (
        <FlatList
            key={choices? choices.length: 0}
            style={{ width: "100%", height: "100%", alignContent: "flex-start", display: "flex" }}
            data={choices}
            renderItem={renderItem}
            keyExtractor={item => item.label}
            numColumns={1}
            ItemSeparatorComponent={renderSeparator}
        />
    )
}


const renderSeparator = () => {
    return <View style={styles.seperator}></View>
}


