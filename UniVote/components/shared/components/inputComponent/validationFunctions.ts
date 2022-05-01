import { loginItem } from "../../types";

export const isEmail = (email: string): boolean => {
  //  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 //   return re.test(email);
 return true
  };
  
  export const isString = (text: string): boolean => typeof text === "string" && text.length > 0
  
  export  const validateInputs = (inputs: string[], formItems: loginItem[]): boolean[] => {
    let isValidArray: boolean[] = [];
    formItems.map((item, i) => {
      isValidArray.push(item.validator(inputs[i]));
    });
    return isValidArray;
  };
  
  