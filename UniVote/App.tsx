import React, { useState } from "react"
import AppLoading from "expo-app-loading"
import * as Font from "expo-font"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers/index"
import { createStore } from "redux"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import SignUpScreen from "./components/pages/signUp/signUp"
import LoginScreen from "./components/pages/login/login"
import TrendingItemsScreen from "./components/pages/trending/trending"
import SearchProposalScreen from "./components/pages/searchProposal/searchProposal"
import { NAVIGATION_ROUTES } from "./components/shared/components/menu/menu"
import CreateProposalScreen from "./components/pages/createProposal/createProposal"
import ProposalDetailsScreen from "./components/pages/proposalDetails/proposalDetails"
import { NativeBaseProvider } from "native-base"
import CreateReferendumScreen from "./components/pages/createReferendum/createReferendum"
import CreateItemScreen from "./components/pages/createNewItem/createNewItem"
import SearchResultsScreen from "./components/pages/searchResults/searchResults"
import AccountDetailsScreen from "./components/pages/accountDetails/accountDetails"
import PrivateTrendingItemsScreen from "./components/pages/trending/privateTending"
import ReferendumlDetailsScreen from "./components/pages/referendumDetails/referendumDetails"
import CommentsScreen from "./components/pages/comments/comments"
import LandingScreen from "./components/pages/landingPage/landingPage"

const store = createStore(rootReducer, composeWithDevTools())

const Stack = createStackNavigator()

const loadFonts = () => {
    return Font.loadAsync({
        SemiBoldFont: require("./fonts/sf-pro-text-semi-bold.ttf"),
        RegularFont: require("./fonts/sf-pro-text-regular.ttf"),
        HeavyFont: require("./fonts/sf-pro-text-heavy.ttf"),
        LightFont: require("./fonts/sf-pro-text-light.ttf"),
        BoldFont: require("./fonts/sf-pro-text-bold.ttf"),
        OswlandBoldFont: require("./fonts/Oswald-Bold.ttf")
    })
}

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false)
    if (!fontLoaded) {
        return (
            <AppLoading startAsync={loadFonts} onFinish={() => setFontLoaded(true)} onError={err => console.log(err)} />
        )
    }

 
    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false
                        }}
                    >

                         <Stack.Screen name={NAVIGATION_ROUTES.SEARCH_RESULTS} component={SearchResultsScreen} />
                           <Stack.Screen name={NAVIGATION_ROUTES.ACCOUNT_DETAILS} component={AccountDetailsScreen} />
                           <Stack.Screen name={NAVIGATION_ROUTES.SEARCH_PROPOSAL} component={SearchProposalScreen} />
                       <Stack.Screen name={NAVIGATION_ROUTES.LANDING} component={LandingScreen} />
                         <Stack.Screen name={NAVIGATION_ROUTES.TRENDING_PROPOSALS} component={TrendingItemsScreen} />
                        <Stack.Screen name={NAVIGATION_ROUTES.LOGIN} component={LoginScreen} />
                        <Stack.Screen name={NAVIGATION_ROUTES.SIGN_UP} component={SignUpScreen} />
                        <Stack.Screen
                            name={NAVIGATION_ROUTES.REFERENDUM_DETAILS}
                            component={ReferendumlDetailsScreen}
                        />
                           <Stack.Screen name={NAVIGATION_ROUTES.COMMENTS} component={CommentsScreen} />
                        <Stack.Screen
                            name={NAVIGATION_ROUTES.PRIVATE_TRENDING_PROPOSALS}
                            component={PrivateTrendingItemsScreen}
                        />
                     
                        <Stack.Screen name={NAVIGATION_ROUTES.PROPOSAL_DETAILS} component={ProposalDetailsScreen} />
                        <Stack.Screen
                            name={NAVIGATION_ROUTES.CREATE_PROPOSAL_OR_REFERENDUM}
                            component={CreateItemScreen}
                        />
                        <Stack.Screen name={NAVIGATION_ROUTES.CREATE_REFERENDUM} component={CreateReferendumScreen} />
                        <Stack.Screen name={NAVIGATION_ROUTES.CREATE_PROPOSAL} component={CreateProposalScreen} />
                        
                       
                    </Stack.Navigator>
                </NavigationContainer>
            </NativeBaseProvider>
        </Provider>
    )
}
