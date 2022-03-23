import React, { useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { styles as proposalDetailStyles } from "./style";
import { styles } from "../../shared/styles/styles";
import { NAVIGATION_ROUTES } from "../../shared/components/menu/menu";
import BlueHeader from "../../shared/components/blueHeader/blueHeader";
import Menu from "../../shared/components/menu/menu";

export default function ProposalDetailsScreen({
  navigation,
}: any): JSX.Element {

const number_of_votes: number = 16
const title: string = 'Fix pothole on Library Road'
const details: string = 'Potholes really need to be fixed very soon. Otherwise all the cars will be destroyed and the council will be sued'
const comments: comment[] = [{user:'marc', comment:'this really sucks'}, {user:'bob', comment:'yes i agree. its very bad'}, {user:'mary', 
comment:'when will it get fixed? Some more textto see if i can get it to wrap onto a new line'}]

  return (
    <View style={styles.centered_container}>
      <BlueHeader
        title={"Proposal Details"}
        navigation={navigation}
        showArrow={true}
      />
      <SafeAreaView
        style={[
          styles.centered_container,
          { width: "100%", justifyContent: "flex-start" },
        ]}
      >
        <View style={proposalDetailStyles.image_container}>
          <Image
            source={require("../../../assets/example_img.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={[styles.screen_padding, proposalDetailStyles.content_container]}>
          <Text style={proposalDetailStyles.text}>
            {number_of_votes} Current Number of Votes
          </Text>
       <Text style={proposalDetailStyles.text}>Comments</Text> 
            <ScrollView style={[proposalDetailStyles.scroll_view_container, proposalDetailStyles.title_container]}>
           <Text style={proposalDetailStyles.text} >{title}</Text>
       </ScrollView>
            <ScrollView style={[proposalDetailStyles.scroll_view_container, proposalDetailStyles.title_container]}>
            <Text style={proposalDetailStyles.text} >{details}</Text>
       </ScrollView>
       <ScrollView style={[proposalDetailStyles.scroll_view_container, proposalDetailStyles.comment_container]}>
           {renderComments(comments)}
       </ScrollView>
        </View>
          <Menu navigation={navigation} />
      </SafeAreaView>
    </View>
  );
}


interface comment{

    user:string,
    comment: string

}

const renderComments = (comments: comment[]): JSX.Element[] =>{
    console.log(comments)

    return comments.map((item, i) =>{

        return(
            <React.Fragment>
<Text  style={proposalDetailStyles.text} key={i}>{item.user}... {item.comment}</Text>
<View style={{width:'100%', height:20}}></View>
</React.Fragment>

        )
    })
}