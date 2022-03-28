import React from "react"
import { Text, View } from "react-native"
import { DropDown, DropDownItem } from "../../types"
import { Select, CheckIcon } from "native-base"
import { styles } from "../../components/inputComponent/formStyles"
import {length_factor} from '../../styles/styles'
interface Props {
    dropdown: DropDown
}
export default function DropDownButton({ dropdown }: Props) {
    return (
        <View style={{width:'100%', paddingBottom: 15 * length_factor }}>
            <Text style={[styles.form_label_text, {paddingBottom: 5 * length_factor}]}>{dropdown.label}</Text>
            <Select
                selectedValue={dropdown.value}
                minWidth="200"
                accessibilityLabel="Select proposal type"
                placeholder="Select..."
                _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                }}
                mt={1}
                onValueChange={itemValue => dropdown.onChange(itemValue)}
                defaultValue=""
            >
                {renderItems(dropdown.items)}
            </Select>
        </View>
    )
}

const renderItems = (items: DropDownItem[]): JSX.Element[] => {
    return items.map((item, i) => {
        return <Select.Item label={item.label} value={item.value} key={i} />
    })
}
