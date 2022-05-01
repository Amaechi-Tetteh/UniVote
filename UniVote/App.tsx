import "react-native-gesture-handler"
import React, { useState } from "react"
import AppLoading from "expo-app-loading"
import * as Font from "expo-font"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers/index"
import { createStore } from "redux"
import { NavigationContainer } from "@react-navigation/native"
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
import MyProposalsScreen from "./components/pages/myProposals/myProposals"
import ThankYouScreen from "./components/pages/thankYou/thankYouPage"
import MyPerksScreen from "./components/pages/myPerks/myPerks"
import NFTDetailsScreen from "./components/pages/NFT_Rewards/NFT_rewards"
import NFTTransferScreen from "./components/pages/NFT_Transfer/transfer"
import AccountSettingsScreen from "./components/pages/settings/accountSettings"
import MetaMaskScreen from "./components/pages/metaMask/metaMask"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack";
import DrawerContent from "./components/shared/components/drawerContent/drawerContent"
const store = createStore(rootReducer, composeWithDevTools())
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator();

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
          headerShown: false,
        }}
                        // drawerContent={props => <DrawerContent {...props} />}
                        // screenOptions={{ headerShown: false, drawerStyle: { width: "85%", height: "80%" } }}
                        // defaultStatus='closed'
                    >
                          <Stack.Screen name={NAVIGATION_ROUTES.LANDING} component={LandingScreen} />
                          <Stack.Screen name={NAVIGATION_ROUTES.TRENDING_PROPOSALS} component={TrendingItemsScreen} />
                           <Stack.Screen
                            name={NAVIGATION_ROUTES.CREATE_PROPOSAL_OR_REFERENDUM}
                            component={CreateItemScreen}
                        />
                        <Stack.Screen name={NAVIGATION_ROUTES.NFT_TRANSFER} component={NFTTransferScreen} />
                        <Stack.Screen name={NAVIGATION_ROUTES.NFT_DETAILS} component={NFTDetailsScreen} />
                        <Stack.Screen name={NAVIGATION_ROUTES.MY_PERKS} component={MyPerksScreen} />
                        <Stack.Screen
                            name={NAVIGATION_ROUTES.REFERENDUM_DETAILS}
                            component={ReferendumlDetailsScreen}
                        />
                      
                        <Stack.Screen name={NAVIGATION_ROUTES.CREATE_REFERENDUM} component={CreateReferendumScreen} />
                        <Stack.Screen
                            name={NAVIGATION_ROUTES.THANKYOU_FOR_CREATING_PROPOSAL}
                            component={ThankYouScreen}
                        />
                        <Stack.Screen name={NAVIGATION_ROUTES.CREATE_PROPOSAL} component={CreateProposalScreen} />
                        <Stack.Screen name={NAVIGATION_ROUTES.SEARCH_RESULTS} component={SearchResultsScreen} />
                        <Stack.Screen name={NAVIGATION_ROUTES.ACCOUNT_DETAILS} component={AccountDetailsScreen} />
                        <Stack.Screen name={NAVIGATION_ROUTES.SEARCH_PROPOSAL} component={SearchProposalScreen} />

                      
                        <Stack.Screen name={NAVIGATION_ROUTES.LOGIN} component={LoginScreen} />
                        <Stack.Screen name={NAVIGATION_ROUTES.SIGN_UP} component={SignUpScreen} />

                        <Stack.Screen name={NAVIGATION_ROUTES.COMMENTS} component={CommentsScreen} />
                        <Stack.Screen
                            name={NAVIGATION_ROUTES.PRIVATE_TRENDING_PROPOSALS}
                            component={PrivateTrendingItemsScreen}
                        />
                        <Stack.Screen name={NAVIGATION_ROUTES.PROPOSAL_DETAILS} component={ProposalDetailsScreen} />
                    
                        <Stack.Screen name={NAVIGATION_ROUTES.MY_PROPOSALS} component={MyProposalsScreen} />
                        <Stack.Screen name={NAVIGATION_ROUTES.DRAWER} component={AccountDetailsScreen} />
                        <Stack.Screen name={NAVIGATION_ROUTES.ACCOUNT_SETTINGS} component={AccountSettingsScreen} />
                        <Stack.Screen name={NAVIGATION_ROUTES.META_MASK} component={MetaMaskScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </NativeBaseProvider>
        </Provider>
    )
}
