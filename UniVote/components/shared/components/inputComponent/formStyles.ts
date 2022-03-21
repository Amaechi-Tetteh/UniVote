import { StyleSheet } from "react-native";

import { length_factor } from "../../styles/styles";

export const styles = StyleSheet.create({

    header:{
        width:'100%'
    },

input:{
    width:'100%',
    borderRadius: 4.5 * length_factor,
    height: 40.8*length_factor,
    marginTop:10 * length_factor,
    borderWidth: 1 * length_factor,
    paddingRight: 10 * length_factor,
    paddingLeft: 10 * length_factor,
    borderColor: 'rgb(221,221,221)',
    lineHeight: 20*length_factor,
    
},

valid_input:{
  borderColor: 'rgb(221,221,221)'
},
invalid_input:{

borderColor:'rgb(255, 0, 0)'
},

form_wrapper:{

    width:'100%',

    paddingTop: 46 * length_factor,
},

form_item:{

    paddingBottom:15 * length_factor
},
form_label_text:{
    color:"rgb(66, 66, 66)",
  textAlign:'left',
  fontFamily:'RegularFont'

},
input_text:{

  color:'rgb(180, 180 ,180)',
  fontSize: 16*length_factor
}


});
