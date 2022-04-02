import React, {useState} from "react"
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native"
import { styles as proposalDetailStyles } from "./style"
import { styles } from "../../shared/styles/styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import Menu from "../../shared/components/menu/menu"
import Button from "../../shared/components/button/button"
import { BUTTON_COLORS } from "../../shared/components/button/button"
import { NavigationProps } from "../../shared/types"
import { MenuContainer, MainContainer } from "../../shared/components/containers/containers"
import { renderCheckBoxes, CheckBoxItem } from "../../shared/components/checkboxList/checkboxList"

export default function ReferendumlDetailsScreen({ navigation }: NavigationProps): JSX.Element {

     const candidates: CheckBoxItem[] = [
    //   {selected: false, label: 'Raphael Barberis', onChange}
   ]
   
const [selectedItems, setSelectedItems] = useState(candidates)

    const number_of_votes: number = 16
    const title: string = "Fix pothole on Library Road"
    const details: string =
        "Potholes really need to be fixed very soon. Otherwise all the cars will be destroyed and the council will be sued"

    const onVote = () => console.log("vote")

  
    

    return (
        <View style={styles.centered_container}>
            <BlueHeader title={"Referendum Details"} navigation={navigation} showArrow={true} />
            <SafeAreaView style={[styles.centered_container, { width: "100%", justifyContent: "flex-start" }]}>
                <MainContainer>
                    <View style={proposalDetailStyles.image_container}>
                        <Image
                            source={require("../../../assets/example_img.png")}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </View>
                    <View style={[styles.screen_padding, proposalDetailStyles.content_container]}>
                        <Text style={proposalDetailStyles.text}>{number_of_votes} Current Number of Votes</Text>

                        <ScrollView
                            contentContainerStyle={{
                                flex: 1,
                                flexDirection: "row",
                                flexWrap: "wrap"
                            }}
                            style={[proposalDetailStyles.scroll_view_container, proposalDetailStyles.title_container]}
                        >
                            <Text style={proposalDetailStyles.text}>{title}</Text>
                        </ScrollView>
                        <ScrollView
                            contentContainerStyle={{
                                flex: 1,
                                flexDirection: "row",
                                flexWrap: "wrap"
                            }}
                            style={[proposalDetailStyles.scroll_view_container, proposalDetailStyles.title_container]}
                        >
                            <Text style={proposalDetailStyles.text}>{details}</Text>
                        </ScrollView>
<Text>Candidates/Choices</Text>

                        <Button
                            text="VOTE"
                            flexBasis={124}
                            color={BUTTON_COLORS.BLUE}
                            onPress={onVote}
                            showPlusIcon={true}
                            paddingTop={15}
                        />
               
                        
                    </View>
                </MainContainer>
                <MenuContainer>
                    <View style={[styles.screen_padding, {width:'100%', height:'100%'}]} >
                    <Menu navigation={navigation} />
                    </View>
                </MenuContainer>
            </SafeAreaView>
        </View>
    )
}


