import {MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import {length_factor} from '../../../shared/styles/styles'
import { styles } from "./styles";
interface menuItem {
  target: NAVIGATION_ROUTES;
  iconName: keyof typeof MaterialIcons.glyphMap;
}

export enum NAVIGATION_ROUTES {
  SEARCH_PROPOSAL = "Search Proposal",
  SIGN_UP = "SignUp",
  LOGIN = "Login",
  CREATE_PROPOSAL = "Create Proposal",
  TRENDING_PROPOSALS = "Trending Proposals",
  ACCOUNT_DETAILS = "Account Details",
  SETTINGS = "Settings",
}

const menuItems: menuItem[] = [
  { target: NAVIGATION_ROUTES.SEARCH_PROPOSAL, iconName: "search" },
  { target: NAVIGATION_ROUTES.CREATE_PROPOSAL, iconName: "add-circle" },
  { target: NAVIGATION_ROUTES.ACCOUNT_DETAILS, iconName: "person" },
  { target: NAVIGATION_ROUTES.TRENDING_PROPOSALS, iconName: "home" },
  { target: NAVIGATION_ROUTES.SETTINGS, iconName: "settings" },
];

export default function Menu({ navigation }: any): JSX.Element {
  const onNavigate = (target: NAVIGATION_ROUTES) => navigation.navigate(target);

  const renderMenuItems = (menuItems: menuItem[]) => {
    return menuItems.map((item) => {
      return (
        <TouchableOpacity onPress={() => onNavigate(item.target)}>
          <MaterialIcons name={item.iconName} size={24*length_factor} color="rgb(102, 102, 102)" />
        </TouchableOpacity>
      );
    });
  };

  return <View style={styles.menu_container}>{renderMenuItems(menuItems)}</View>;
}
