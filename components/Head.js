import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Search from './Search';
import { useNavigation } from '@react-navigation/native';
import {  countProduits } from '../slices/ListProduitSlice';
import { useSelector } from 'react-redux';

const Head = () => {
  const count = useSelector(countProduits);

  const navigation=useNavigation()
  return (
    <View>
    <View style={{ flexDirection:'column',justifyContent:'center' }}>
    <View style={styles.searsh_vente}>
    <TouchableOpacity>
    <Icon name="menu" size={40} color="#7f8282" />
    </TouchableOpacity>
        <Search/>
        <TouchableOpacity style={{ right:6,bottom:2 }}
         onPress={() => {
          navigation.navigate("ListProduits");
        }}>
           <Icon name="shopping-cart" size={40} color="#6588bf" />
        </TouchableOpacity>
        
    </View>
   </View>
        <View style={{ backgroundColor:'#b5656d',position:'absolute',padding:2,borderRadius:200,right:15,top:9}}>
             <Text style={{ fontSize:12,color:'white'}}> {count} </Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    searsh_vente:{
         marginTop:20,
         flexDirection:'row',
         width:'100%',
         justifyContent:'space-evenly'
    },

});
export default Head