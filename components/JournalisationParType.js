import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import {URL_PATH} from "../AppPath"
import { Connexion } from '../slices/ConnexionSlice';
import { useSelector } from 'react-redux';
const JournalisationParType = ({ navigation }) => {
  // const [data, setData] = useState([]);
  currentDate = new Date();
        year = currentDate.getFullYear();
        month = currentDate.getMonth() + 1; 
        const day = currentDate.getDate();
        const [data, setData] = useState([]);
        const [total, setTotal] = useState(0);
  const conexion = useSelector(Connexion);

function calculateTotal(arr) {
  let newtotal=0;
  arr.forEach(item => {
    newtotal += item.sum;
  });
  setTotal(newtotal.toFixed(2));
}

useEffect(() => {
  const fetchData = async () => {
      
    try {
      const response = await axios.get(`${URL_PATH}/api/paeiment/typepaeiment`, {
          params: {
            date:currentDate,
            user:conexion.telephone
          }
        });
        setData(response.data);
        calculateTotal(response.data);
      console.log("le donenr est :" , data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  fetchData();

}, [])
  const hundelDetai=(type,prix)=>{
    navigation.navigate('Journalisation',{type,prix})
  }
const renderItem =({item})=>{
  const prix=item.sum
  return(
    <View key={item.id} >
          <TouchableOpacity 
          style={{ borderRadius: 10,  width: '90%', height: 80, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: 8,marginHorizontal:20,marginTop:15 }}
          onPress={()=>{hundelDetai(item.type,item.sum.toFixed(2))}}
          >
            <Text style={{ alignSelf: 'center', margin: 10, fontSize: 20, color: '#6588bf', letterSpacing: 1, fontWeight: '900' }}>{item.type} :</Text>
            <Text style={{ alignSelf: 'center', marginTop: 1, fontSize: 20, color: '#468a3b', fontWeight: '600'}}>{prix.toFixed(2)} MRU</Text>
          </TouchableOpacity>
      </View>
  )
}
  
  return (
    <>
      <View style={{ flex:1 }}>
        <View>
            <View 
            style={{ borderRadius: 10,  width: '90%', height: 60, backgroundColor: '#84aad1', flexDirection: 'row', justifyContent: 'space-between', padding: 8,marginHorizontal:20,marginTop:15 }}
            onPress={()=>{hundelDetai(item.type)}}
            >
              <Text style={{ alignSelf: 'center', margin: 2, fontSize: 25, color: 'white', letterSpacing: 1, fontWeight:'bold' }}>Journal</Text>
              <Text style={{ alignSelf: 'center', marginTop: 1, fontSize: 15, color: 'white', fontWeight: '600', letterSpacing: 1 }}>{year}/{month}/{day}</Text>
            </View>
        </View>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.type}
          renderItem={renderItem}
        />
      
      </View>
      {total>0 &&(
        <View  style={{ borderRadius: 10,  width: '100%', height: 80, backgroundColor: '#b5b7ba', flexDirection: 'row', justifyContent: 'center', padding: 8 }} >
        <Text style={{ fontSize:25 }}>Total ={total}</Text>
        </View>
      )}
      
    </>
  );
};

export default JournalisationParType
