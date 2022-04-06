import { ResultItem } from "./searchResults"
import React from "react"
import { View, Text, TouchableOpacity, FlatList, ListRenderItem, Image } from "react-native"
import { styles } from "./styles"

const renderSeparator = () => {
    return <View style={styles.seperator}></View>
}

export const renderSearchItems = (results: ResultItem[], onSelectItem: (proposalId: string) => void): JSX.Element => {
    const renderItem: ListRenderItem<ResultItem> = ({ item }) => {
        return (
            <View style={styles.result_item_wrapper}>
               
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
            style={{ width: "100%", height: "100%", alignContent: "space-between", display: "flex" , }}
            contentContainerStyle={{justifyContent:'space-between', alignItems:'flex-start', }}
            data={results}
            renderItem={renderItem}
            keyExtractor={item => item.proposalId}
            numColumns={2}
            ItemSeparatorComponent={renderSeparator}
            columnWrapperStyle={styles.row}
        />
    )
}
