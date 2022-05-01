import React, { useEffect, useState } from "react"
import { View, Text, SafeAreaView, ScrollView, Image, TextInput } from "react-native"
import { length_factor, styles } from "../../shared/styles/styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import Menu, { NAVIGATION_ROUTES } from "../../shared/components/menu/menu"
import { NavigationProps } from "../../shared/types"
import { MenuContainer, MainContainer } from "../../shared/components/containers/containers"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../reducers"
import { addProposalCommentAction } from "../../../actions/actions.proposalDetails"
import { styles as pageStyles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { styles as formStyles } from "../../shared/components/inputComponent/formStyles"
import { Scroller } from "../../shared/components/scroller/scroller"

export default function CommentsScreen({ navigation }: NavigationProps): JSX.Element {
    const dispatch = useDispatch()
    const [userComment, setUserComment] = useState("")

    const user = useSelector((state: RootState) => state.login.fullName)
    const comments = useSelector((state: RootState) => state.proposalDetails.comments)

    const proposalDetails = useSelector((state: RootState) => state.proposalDetails)

    const onAddComment = (comment: string, user: string) => {
        if (comment) {
            dispatch(addProposalCommentAction({ user: user ? user : "unkown user", comment: comment }))
            setUserComment("")
        }
    }

    return (
        <View style={styles.centered_container}>
            <BlueHeader title={"Comments"} navigation={navigation} showArrow={true} route={NAVIGATION_ROUTES.PROPOSAL_DETAILS}/>
            <SafeAreaView style={[styles.centered_container, { width: "100%", justifyContent: "flex-start" }]}>
                <MainContainer screenPadding={false}>
                    <View style={pageStyles.image_container}>
                        <Image source={{ uri: proposalDetails.image }} style={{ width: "100%", height: "100%" }} />
                    </View>
                    <View style={pageStyles.commentsWrapper}>
                        <View style={pageStyles.commentsInnerWrapper}>
                            <View style={{ width: "100%" }}>
                                <Text style={pageStyles.header}>Comments</Text>
                            </View>
                            <View style={{paddingTop:36*length_factor, paddingBottom: 10*length_factor}} >
                            <Scroller height = {250} showBorder={false}>
                                {renderComments(proposalDetails.comments!)}
                            </Scroller>
                            </View>
                            <View style={pageStyles.add_comment_container}>
                                <TextInput
                                    style={[formStyles.input, formStyles.input_text, {borderColor:'rgb(189, 189, 189)', marginTop:0, width:'90%'}]}
                                    placeholder="Enter Text"
                                    placeholderTextColor="rgb(180, 180 ,180)"
                                    value={userComment}
                                    onChangeText={setUserComment}
                                    keyboardType="default"
                                />
                                <MaterialIcons
                                    name="send"
                                    size={30}
                                   style={pageStyles.submitIcon}
                                    onPress={() => onAddComment(userComment, user)}
                                />
                            </View>
                        </View>
                    </View>
                </MainContainer>
                <MenuContainer>
                    <View style={[styles.screen_padding, { width: "100%", height: "100%", alignItems:'center' }]}>
                        <Menu navigation={navigation} />
                    </View>
                </MenuContainer>
            </SafeAreaView>
        </View>
    )
}

interface comment {
    user: string
    comment: string
}

const renderComments = (comments: comment[]): JSX.Element[] => {
    return comments.map((item, i) => {
        return (
            <React.Fragment key={i}>
                <Text style={pageStyles.text}>
                    {item.user}... {item.comment}
                </Text>
                <View style={{ width: "100%", height: 20 }}></View>
            </React.Fragment>
        )
    })
}
