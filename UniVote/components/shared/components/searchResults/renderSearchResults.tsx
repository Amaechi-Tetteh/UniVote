import { ResultItem } from "./searchResultsTemplate"
import React from "react"
import { View, Text, TouchableOpacity, FlatList, ListRenderItem, Image } from "react-native"
import { styles } from "./styles"
import { length_factor } from "../../styles/styles"

const renderSeparator = () => {
    return <View style={styles.seperator}></View>
}

export const renderSearchItems = (results: ResultItem[], onSelectItem: (proposalId: string) => void): JSX.Element => {
    const renderItem: ListRenderItem<ResultItem> = ({ item, index }) => {
        return (
               <View style={[styles.square, index%2==0 ? { marginRight: 8.5 * length_factor } : { marginLeft: 8.5 *length_factor}]}>
               
                <TouchableOpacity style={styles.results_button} onPress={() => onSelectItem(item.proposalId)}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <View style={styles.title_container}>
                        <Text style={styles.result_title} numberOfLines={2}>
                            {item.title}
                        </Text>
                    </View>
                </TouchableOpacity>
               
            </View>
        )
    }

    return (
        <FlatList
          style={{ height: "100%", alignContent:'flex-start', display:'flex' }}
          
            data={results}
            renderItem={renderItem}
            keyExtractor={item => item.proposalId}
            numColumns={2}
            ItemSeparatorComponent={renderSeparator}
            columnWrapperStyle={styles.row}
        />
    )
}
