import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';
import React,{useState} from 'react';

import Icon1 from 'react-native-vector-icons/AntDesign';
import { transform } from '@babel/core';

const dropdown = ({ daata , value , onSelect}) => {
   
    // let data = [{id:1,name:'Haircut'},{id:2,name:'spa'},{id:3,name:'massage'},{id:4,name:'Beard-trim'}];

    
    const [showoption, setShowoption] = useState(false);
   
    const selecteditems =(e)=>{
      setShowoption(!showoption)
      onSelect(e)
      
    }

  console.log()
  return (
    <>
    <TouchableOpacity onPress={()=>setShowoption(!showoption)}>
    <View style={styles.Dropdowni}>
        <Text style={{fontSize:13,color:'black'}}>{!!value? value  :"choose"} </Text>
        <Icon1 name ='down' size={22} color='black' style={{alignSelf:'flex-end', marginLeft:270,position:'absolute' , transform:[{rotate: showoption? '180deg':'0deg'}]} }/>
    </View>
    </TouchableOpacity>


    {showoption &&  <View >
    {daata.map((e)=> (
        <View key={e.id} style={styles.option}>
          <TouchableOpacity onPress={()=> selecteditems(e)}>
            <View >
            <Text style={{fontSize:13,color:'black',padding:4,}}>{e.name}</Text>
            </View>
            </TouchableOpacity> 
        </View>
    ) )}
    </View> }
   
    
  </>
  )
}


export default dropdown

const styles = StyleSheet.create({
    option:{
        marginLeft:30,
        marginRight:30,
       fontSize:14,
        backgroundColor:'white',
        borderRadius:2,
      },
      Dropdowni:{
        height: 45,
        margin: 12,
        borderWidth: 1,
        padding: 13,
        borderRadius:7,
        backgroundColor:'white',
        marginHorizontal:30,
        flexDirection:'row',
        
    
      },
})