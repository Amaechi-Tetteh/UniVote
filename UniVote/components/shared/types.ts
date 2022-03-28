import React, { useState, Dispatch, SetStateAction, Props } from "react"

export interface loginItem {
    label: string
    validator(input: string): boolean
    placeholder: string
    onChange: Dispatch<SetStateAction<string>>
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
