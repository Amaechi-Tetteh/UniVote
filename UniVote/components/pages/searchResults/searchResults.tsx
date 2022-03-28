
import {image_example} from './image'
import BlueHeader from '../../shared/components/blueHeader/blueHeader'
import React, { useState } from "react"
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native"
import { styles } from "../../shared/styles/styles"
import Menu from "../../shared/components/menu/menu"
import { renderSearchItems } from './renderSearchResults'
import {styles as resultsStyles} from './styles'

export default function SearchResultsScreen({ navigation }: any): JSX.Element {
  

    return (
        <View style={styles.centered_container}>
            <BlueHeader title={"Search Proposal"} navigation={navigation} showArrow={true} />
            <SafeAreaView
                style={[
                    styles.centered_container,
                    styles.screen_padding,
                    { width: "100%", justifyContent: "flex-start" }
                ]}
            >
                <View style={resultsStyles.flat_list_wrapper}>
                  {renderSearchItems(results)}
                </View>


                <Menu navigation={navigation} />
            </SafeAreaView>
        </View>
    )
}

export interface ResultItem{

    proposalId: string,
    image: string,
    title: string
}


const results: ResultItem[]=
[
{ 

    proposalId: 'sdddsds',
    title: 'test title for app with a really long long title, so long long',
    image: 'data:image/webp;base64,' + image_example
},
{
  proposalId: 'sdddssddsdsds',
    title: 'test title for app2',
    image: 'data:image/webp;base64,' + image_example
},
{
  proposalId: 'sdddssddsdsdssds',
    title: 'test title for app3',
    image: 'data:image/webp;base64,' + image_example
}
]
