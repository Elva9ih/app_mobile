import { View, Text, Touchable, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Connexion } from '../slices/ConnexionSlice';
import {URL_PATH} from "../AppPath"
const Journalisation = ({route}) => {
    const  item  = route.params.type;
    const  prixTotal  = route.params.prix;
    const conexion = useSelector(Connexion);
        currentDate = new Date();
        year = currentDate.getFullYear();
        month = currentDate.getMonth() + 1; 
        const day = currentDate.getDate();
        const [data, setData] = useState([]);
        useEffect(() => {
            const fetchData = async () => {
                
              try {
                const response = await axios.get(`${URL_PATH}/api/paeiment/typepaeiment/detai`, {
                    params: {
                      item: item,
                      date:currentDate,
                      user:conexion.telephone
                    }
                  });
                  setData(response.data);
                console.log("le donenr est :" , data);
              } catch (error) {
                console.error('Error fetching data:', error.message);
              }
            }
            fetchData();
        
          }, [])
          const renderItem=({item})=>{
            const createdAtDate = new Date(item.created_at);
            const hours = createdAtDate.getHours();
            const minutes = createdAtDate.getMinutes();
            const seconds = createdAtDate.getSeconds();
            const formattedTime = `${hours}:${minutes}:${seconds}`;
            const prix=item.prix;
            return(
                 <View style={{top:10,alignItems:'center',borderBottomColor:'#828282',borderBottomWidth:2, backgroundColor:'#ededed',margin:20 }}>
                    <View style={{ backgroundColor:'white',flexDirection:'row', justifyContent: 'space-between',width:'100%',height:50,padding:10}}>
                    <Text style={{ fontSize:18,color:'#494a4a', fontWeight:'500' }}>{formattedTime}</Text>
                    <Text style={{ fontSize:18,color:'#494a4a', fontWeight:'500' }}>{prix} MRU</Text>
                    </View>
                </View> 
            );
          }
  return (
    <>
    <View style={{ flex:1 }}>
      
    <View>
          <View 
          style={{ borderRadius: 10,  width: '90%', height: 80, backgroundColor: '#84aad1', flexDirection: 'row', justifyContent: 'space-between', padding: 8,marginHorizontal:20,marginTop:15 }}
          onPress={()=>{hundelDetai(item.type)}}
          >
            <Text style={{ alignSelf: 'center', margin: 10, fontSize: 25, color: 'white', letterSpacing: 1, fontWeight:'bold' }}>{item}</Text>
            <Text style={{ alignSelf: 'center', marginTop: 1, fontSize: 15, color: 'white', fontWeight: '600', letterSpacing: 1 }}>{year}/{month}/{day}</Text>
          </View>
      </View>
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => `${index}`}
      renderItem={renderItem}
    />


    </View>
    {prixTotal>0 &&(
      <View  style={{ borderRadius: 10,  width: '100%', height: 80, backgroundColor: '#b5b7ba', flexDirection: 'row', justifyContent: 'center', padding: 8 }} >
      <Text style={{ fontSize:25 }}>Total ={prixTotal}</Text>
      </View>
      
    )}
    </>
  )
}

export default Journalisation