import { View, Text, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Journalisation = () => {

              
            // const [data,setData] = useState(axios.get('https://fd2a-41-223-98-66.ngrok-free.app/api/payement/group_payement'));
       

 
        currentDate = new Date();
        year = currentDate.getFullYear();
        month = currentDate.getMonth() + 1; 
        const day = currentDate.getDate();
  
  return (
    <View>
      <View style={{ width:'90%',height:50,alignItems:'center',flexDirection:'row',padding:10,justifyContent:'space-between',backgroundColor:'#6588bf', margin:10,left:10 }}>
      <Text style={{ color:'#dbd9d9',fontWeight:500,fontSize:25 }}>Masrivi</Text>
            <Text style={{ color:'#dbd9d9',fontWeight:500,fontSize:25 }}>{year}/{month}/{day}</Text>
    </View>
         <ScrollView style={{width:'90%',height:700,alignSelf:'center',borderRadius:6 }}>
             <View style={{flexDirection:'row',top:10,alignItems:'center',justifyContent: 'space-between',padding:10,borderBottomColor:'#c9c9c9',borderBottomWidth:2, width:'100%',height:50,backgroundColor:'#ededed' }}>
                 <Text style={{ fontSize:20,color:'#828282' }}>24:00</Text>
                 <View style={{ width:'50%',height:1,backgroundColor:'#76b8b8' }}></View>
                 <Text style={{ fontSize:20,color:'#828282' }}>1000 MRU</Text>
             </View>
             <View style={{flexDirection:'row',top:10,alignItems:'center',justifyContent: 'space-between',padding:10,borderBottomColor:'#c9c9c9',borderBottomWidth:2, width:'100%',height:50,backgroundColor:'#ededed' }}>
                 <Text style={{ fontSize:20,color:'#828282' }}>10:16</Text>
                 <View style={{ width:'50%',height:1,backgroundColor:'#76b8b8' }}></View>
                 <Text style={{ fontSize:20,color:'#828282' }}>13.000 MRU</Text>
             </View>
             <View style={{flexDirection:'row',top:10,alignItems:'center',justifyContent: 'space-between',padding:10,borderBottomColor:'#c9c9c9',borderBottomWidth:2, width:'100%',height:50,backgroundColor:'#ededed' }}>
                 <Text style={{ fontSize:20,color:'#828282' }}>10:16</Text>
                 <View style={{ width:'50%',height:1,backgroundColor:'#76b8b8' }}></View>
                 <Text style={{ fontSize:20,color:'#828282' }}>5000 MRU</Text>
             </View>
             <View style={{flexDirection:'row',top:10,alignItems:'center',justifyContent: 'space-between',padding:10,borderBottomColor:'#c9c9c9',borderBottomWidth:2, width:'100%',height:50,backgroundColor:'#ededed' }}>
                 <Text style={{ fontSize:20,color:'#828282' }}>24:00</Text>
                 <View style={{ width:'50%',height:1,backgroundColor:'#76b8b8' }}></View>
                 <Text style={{ fontSize:20,color:'#828282' }}>1000 MRU</Text>
             </View>
             <View style={{flexDirection:'row',top:10,alignItems:'center',justifyContent: 'space-between',padding:10,borderBottomColor:'#c9c9c9',borderBottomWidth:2, width:'100%',height:50,backgroundColor:'#ededed' }}>
                 <Text style={{ fontSize:20,color:'#828282' }}>10:16</Text>
                 <View style={{ width:'50%',height:1,backgroundColor:'#76b8b8' }}></View>
                 <Text style={{ fontSize:20,color:'#828282' }}>13.000 MRU</Text>
             </View>
             <View style={{flexDirection:'row',top:10,alignItems:'center',justifyContent: 'space-between',padding:10,borderBottomColor:'#c9c9c9',borderBottomWidth:2, width:'100%',height:50,backgroundColor:'#ededed' }}>
                 <Text style={{ fontSize:20,color:'#828282' }}>10:16</Text>
                 <View style={{ width:'50%',height:1,backgroundColor:'#76b8b8' }}></View>
                 <Text style={{ fontSize:20,color:'#828282' }}>5000 MRU</Text>
             </View>
             <View style={{flexDirection:'row',top:10,alignItems:'center',justifyContent: 'space-between',padding:10,borderBottomColor:'#c9c9c9',borderBottomWidth:2, width:'100%',height:50,backgroundColor:'#ededed' }}>
                 <Text style={{ fontSize:20,color:'#828282' }}>24:00</Text>
                 <View style={{ width:'50%',height:1,backgroundColor:'#76b8b8' }}></View>
                 <Text style={{ fontSize:20,color:'#828282' }}>1000 MRU</Text>
             </View>
             <View style={{flexDirection:'row',top:10,alignItems:'center',justifyContent: 'space-between',padding:10,borderBottomColor:'#c9c9c9',borderBottomWidth:2, width:'100%',height:50,backgroundColor:'#ededed' }}>
                 <Text style={{ fontSize:20,color:'#828282' }}>10:16</Text>
                 <View style={{ width:'50%',height:1,backgroundColor:'#76b8b8' }}></View>
                 <Text style={{ fontSize:20,color:'#828282' }}>13.000 MRU</Text>
             </View>
             <View style={{flexDirection:'row',top:10,alignItems:'center',justifyContent: 'space-between',padding:10,borderBottomColor:'#c9c9c9',borderBottomWidth:2, width:'100%',height:50,backgroundColor:'#ededed' }}>
                 <Text style={{ fontSize:20,color:'#828282' }}>10:16</Text>
                 <View style={{ width:'50%',height:1,backgroundColor:'#76b8b8' }}></View>
                 <Text style={{ fontSize:20,color:'#828282' }}>5000 MRU</Text>
             </View>
             <View style={{flexDirection:'row',top:10,alignItems:'center',justifyContent: 'space-between',padding:10,borderBottomColor:'#c9c9c9',borderBottomWidth:2, width:'100%',height:50,backgroundColor:'#ededed' }}>
                 <Text style={{ fontSize:20,color:'#828282' }}>24:00</Text>
                 <View style={{ width:'50%',height:1,backgroundColor:'#76b8b8' }}></View>
                 <Text style={{ fontSize:20,color:'#828282' }}>1000 MRU</Text>
             </View>
             <View style={{flexDirection:'row',top:10,alignItems:'center',justifyContent: 'space-between',padding:10,borderBottomColor:'#c9c9c9',borderBottomWidth:2, width:'100%',height:50,backgroundColor:'#ededed' }}>
                 <Text style={{ fontSize:20,color:'#828282' }}>10:16</Text>
                 <View style={{ width:'50%',height:1,backgroundColor:'#76b8b8' }}></View>
                 <Text style={{ fontSize:20,color:'#828282' }}>13.000 MRU</Text>
             </View>
             <View style={{flexDirection:'row',top:10,alignItems:'center',justifyContent: 'space-between',padding:10,borderBottomColor:'#c9c9c9',borderBottomWidth:2, width:'100%',height:50,backgroundColor:'#ededed' }}>
                 <Text style={{ fontSize:20,color:'#828282' }}>10:16</Text>
                 <View style={{ width:'50%',height:1,backgroundColor:'#76b8b8' }}></View>
                 <Text style={{ fontSize:20,color:'#828282' }}>5000 MRU</Text>
             </View>
             <View style={{flexDirection:'row',top:10,alignItems:'center',justifyContent: 'space-between',padding:10,borderBottomColor:'#c9c9c9',borderBottomWidth:2, width:'100%',height:50,backgroundColor:'#ededed' }}>
                 <Text style={{ fontSize:20,color:'#828282' }}>24:00</Text>
                 <View style={{ width:'50%',height:1,backgroundColor:'#76b8b8' }}></View>
                 <Text style={{ fontSize:20,color:'#828282' }}>1000 MRU</Text>
             </View>
             <View style={{flexDirection:'row',top:10,alignItems:'center',justifyContent: 'space-between',padding:10,borderBottomColor:'#c9c9c9',borderBottomWidth:2, width:'100%',height:50,backgroundColor:'#ededed' }}>
                 <Text style={{ fontSize:20,color:'#828282' }}>10:16</Text>
                 <View style={{ width:'50%',height:1,backgroundColor:'#76b8b8' }}></View>
                 <Text style={{ fontSize:20,color:'#828282' }}>13.000 MRU</Text>
             </View>
             <View style={{flexDirection:'row',top:10,alignItems:'center',justifyContent: 'space-between',padding:10,borderBottomColor:'#c9c9c9',borderBottomWidth:2, width:'100%',height:50,backgroundColor:'#ededed' }}>
                 <Text style={{ fontSize:20,color:'#828282' }}>10:16</Text>
                 <View style={{ width:'50%',height:1,backgroundColor:'#76b8b8' }}></View>
                 <Text style={{ fontSize:20,color:'#828282' }}>5000 MRU</Text>
             </View>
             
     
             
        </ScrollView>
    </View>
  )
}

export default Journalisation