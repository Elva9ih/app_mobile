import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import {  deleteArchive } from '../slices/ArchiveSlice'
import { addAllProduitVent, countProduits } from '../slices/ListProduitSlice'
import { useNavigation } from '@react-navigation/native'
import { countProduitsArchive, deleteArchive } from '../slices/ArchiveSlice'

const Archive = () => {

    const archive=useSelector(state=>state.archive)
    const count = useSelector(countProduits);
    const[data,setData]=useState([])
    const dispatch=useDispatch()
    const navigation=useNavigation();
    
    const renderItem = ({ item }) => {
      // alert(JSON.stringify(item.temp))   
      
      return (
        <View style={{ flexDirection:'row',justifyContent:'space-between',height:50, backgroundColor: 'white',margin:2,paddingHorizontal:8 }}>
          
          <Text style={{ fontSize: 20 }}>{item.temp}</Text>
          <Text style={{ fontSize: 25 ,fontWeight:'bold',color:'#b5656d'}}>{item.data.length}</Text>  
          <TouchableOpacity 
            style={{ justifyContent:'center',height:40, backgroundColor: '#4b8059',margin:5 ,borderRadius:30,padding:5}}
            onPress={() => {
                  dispatch(addAllProduitVent(item))
                  if(count==0){
                    dispatch(deleteArchive(item))
                  }
                  navigation.navigate('ListProduits')
            }}>
              <Text>Récupération</Text>
          </TouchableOpacity>
          
        </View>
      );
    };
  return (
    <View style={{ width:"100%",height:"100%",backgroundColor:'#fcfcfc',padding:20 }}>
      <View style={{ flexDirection:'row',justifyContent:'space-between',height:30, backgroundColor: '#cdd0d1',margin:2 ,paddingHorizontal:8}}>
          <Text style={{ fontSize: 15,color:'black',fontWeight:'bold' }}>Temps</Text>
          <Text style={{ fontSize: 15 ,color:'black',fontWeight:'bold' }}>nombre elements</Text>  
          <Text style={{ fontSize: 15 ,color:'black',fontWeight:'bold' }}>Récupération</Text>
        </View>
      <FlatList
      style={{ backgroundColor:'white',marginTop:15  }}
      data={archive}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => `${index}`}
      numColumns={1}
    />
    </View>
  )
}

export default Archive