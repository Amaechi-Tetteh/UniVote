import {NavigationProp, ParamListBase} from '@react-navigation/native';
import { ITEM_TYPE } from "../../reducers/types";
export interface loginItem {
    label: string
    validator(input: string): boolean
    placeholder: string
    onChange: (text: string) => void
    value: string
    secure?: boolean
}

export interface DropDown {
    label: string
    items: DropDownItem[]
    placeholder: string
    onChange: any
    value: string
    accessibilityLabel: string
}

export interface DropDownItem {
    label: string
    value: string
}

export interface Navigation extends NavigationProp<ParamListBase>{}

export interface NavigationProps{
    navigation: any
}

export enum PROPOSAL_TYPE{

    PROPOSAL = 'Proposal',
    REFERNDUM = 'Referendum'

}

export interface proposalSummary{

id: string,
title: string,
numberOfVotes: number,
type: ITEM_TYPE
}