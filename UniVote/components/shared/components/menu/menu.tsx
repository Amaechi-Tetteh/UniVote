import {MaterialIcons } from "@expo/vector-icons";
import React  from "react";
import { View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import {length_factor} from '../../../shared/styles/styles'
import { NavigationProps } from "../../types";

export default function Menu( {navigation}:NavigationProps ): JSX.Element {
  const onNavigate = (target: NAVIGATION_ROUTES) => navigation.navigate(target);

  const renderMenuItems = (menuItems: menuItem[]) => {
    return(
      <View style={styles.menu_wrapper}>
    { menuItems.map((item, i) => {
      return (
        <TouchableOpacity onPress={() => onNavigate(item.target)} key={i}>
          <MaterialIcons name={item.iconName} style={styles.menu_item} size={item.size*length_factor}  />
        </TouchableOpacity>
      );
    })}
    </View>
    )
  };

  return <View style={styles.menu_container}>{renderMenuItems(menuItems)}</View>;
}


interface menuItem {
  target: NAVIGATION_ROUTES;
  iconName: keyof typeof MaterialIcons.glyphMap;
  size: number
}

export enum NAVIGATION_ROUTES {
  SEARCH_PROPOSAL = "Search Proposal",
  SEARCH_RESULTS = "Seach Results",
  SIGN_UP = "SignUp",
  LOGIN = "Login",
  CREATE_PROPOSAL = "Create Proposal",
  CREATE_REFERENDUM = "Create Referendum",
  CREATE_PROPOSAL_OR_REFERENDUM = "Create proposal or referendum",
  TRENDING_PROPOSALS = "Trending Proposals",
  PRIVATE_TRENDING_PROPOSALS = 'Private Trending Proposals',
  ACCOUNT_DETAILS = "Account Details",
  SETTINGS = "Settings",
  PROPOSAL_DETAILS = "Proposal Details",
  REFERENDUM_DETAILS = "Referendum Details",
  COMMENTS = "Comments",
  PERKS = "Perks",

}

const menuItems: menuItem[] = [
  { target: NAVIGATION_ROUTES.SEARCH_PROPOSAL, iconName: "search", size: 50 },
  { target: NAVIGATION_ROUTES.TRENDING_PROPOSALS, iconName: "home", size:50 },
  { target: NAVIGATION_ROUTES.CREATE_PROPOSAL_OR_REFERENDUM, iconName: "add-circle", size:60},
  { target: NAVIGATION_ROUTES.ACCOUNT_DETAILS, iconName: "person", size:60},
  { target: NAVIGATION_ROUTES.SETTINGS, iconName: "settings", size:50},
];