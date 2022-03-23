import { StyleSheet, Dimensions } from "react-native";
import { length_factor } from "../../shared/styles/styles";

export const styles = StyleSheet.create({

  image_container:{
      width:'100%',
      height: 187*length_factor
  },

  text:{
      fontSize:16*length_factor,
      textAlign:'left',
      color:'rgb(66, 66, 66)',
      fontFamily:'SemiBoldFont',
      flexWrap: 'wrap'
  },

  content_container:{
      alignContent:'flex-start', 
      flexDirection:'column', 
      display:'flex', 
      width:'100%',
      marginTop:2.5*length_factor,
      
    },
  
    scroll_view_container:{
        marginTop: 10*length_factor,
        width:'100%',
        borderWidth: 1*length_factor,
        borderRadius:length_factor* 6.5,
        borderColor:'rgb(189, 189, 189)',
        flexDirection:'row',
        alignContent:'flex-start',
       padding: 5*length_factor,
       
    },

    comment_container:{
        height:100*length_factor
    },

    title_container:{
        height: 50 * length_factor
    }


});
