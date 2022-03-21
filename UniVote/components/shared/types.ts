import React, { useState, Dispatch, SetStateAction, Props } from "react";

export interface loginItem {
    label: string;
    validator(input: string): boolean;
    placeholder: string;
    onChange: Dispatch<SetStateAction<string>>;
    value:string
  }