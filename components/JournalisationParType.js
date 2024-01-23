import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const JournalisationParType = ({navigation}) => {

              
            // const [data,setData] = useState(axios.get('https://fd2a-41-223-98-66.ngrok-free.app/api/payement/group_payement'));
       

 
        currentDate = new Date();
        year = currentDate.getFullYear();
        month = currentDate.getMonth() + 1; 
        const day = currentDate.getDate();
  
  return (
    <View>
      <View style={{ width:'90%',height:50,alignItems:'center',justifyContent:'center',backgroundColor:'#6588bf', margin:10,left:10 }}>
            <Text style={{ color:'#dbd9d9',fontWeight:500,fontSize:25 }}>{year}/{month}/{day}</Text>
         </View>
         <View style={{width:'80%',height:700,alignSelf:'center',borderRadius:6 }}>
             <View style={{borderRadius:30, marginTop:20, width:'100%',height:150,backgroundColor:'#d4d4d4' }}>
                  <Text style={{ alignSelf:'center',marginTop:10,fontSize:25 ,color:'#6588bf',letterSpacing: 1,fontWeight:800}}>Masrivi</Text>
                  <View style={{ width:'100%',height:2,backgroundColor:'#6588bf' }}></View>
                  <Text style={{ alignSelf:'center',marginTop:10,fontSize:25 ,color:'#5c5c5c',fontWeight:400}}><Text style={{ fontWeight:700,color:'#07ab59' }}>15.500</Text> MRU</Text>
                  <TouchableOpacity
                        onPress={() => navigation.navigate("Journalisation")}
                        style={{width:'100%',backgroundColor:'#6588bf',justifyContent:'center',alignItems:'center',alignContent:'center',height:50,top:10}}>
                        
                  <Text style={{ fontSize:20,color:'white' }}>Detailles</Text>
                  </TouchableOpacity>
             </View>
             <View style={{borderRadius:30, marginTop:20, width:'100%',height:150,backgroundColor:'#d4d4d4' }}>
                  <Text style={{ alignSelf:'center',marginTop:10,fontSize:25 ,color:'#6588bf',letterSpacing: 1,fontWeight:800}}>Sedad</Text>
                  <View style={{ width:'100%',height:2,backgroundColor:'#6588bf' }}></View>
                  <Text style={{ alignSelf:'center',marginTop:10,fontSize:25 ,color:'#5c5c5c',fontWeight:400}}><Text style={{ fontWeight:700,color:'#07ab59' }}>3000</Text> MRU</Text>
                  <TouchableOpacity style={{width:'100%',backgroundColor:'#6588bf',justifyContent:'center',alignItems:'center',alignContent:'center',height:50,top:10}}>
                  <Text style={{ fontSize:20,color:'white' }}>Detailles</Text>
                  </TouchableOpacity>
             </View>

             <View style={{borderRadius:30, marginTop:20, width:'100%',height:150,backgroundColor:'#d4d4d4' }}>
                  <Text style={{ alignSelf:'center',marginTop:10,fontSize:25 ,color:'#6588bf',letterSpacing: 1,fontWeight:800}}>Benkili</Text>
                  <View style={{ width:'100%',height:2,backgroundColor:'#6588bf' }}></View>
                  <Text style={{ alignSelf:'center',marginTop:10,fontSize:25 ,color:'#5c5c5c',fontWeight:400}}><Text style={{ fontWeight:700,color:'#07ab59' }}>30.000</Text> MRU</Text>
                  <TouchableOpacity style={{width:'100%',backgroundColor:'#6588bf',justifyContent:'center',alignItems:'center',alignContent:'center',height:50,top:10}}>
                  <Text style={{ fontSize:20,color:'white' }}>Detailles</Text>
                  </TouchableOpacity>
             </View>
             
        </View>
    </View>
  )
}

export default JournalisationParType