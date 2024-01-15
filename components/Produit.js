import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Produit = ({ id, name, quantite, prix, image }) => {
  return (
    <View style={{  backgroundColor: 'white', margin: 2, padding: 2, width: 380, flexDirection: 'row' ,justifyContent:'space-between',marginTop:10}}>
      <View style={{flexDirection: 'row' }}>
        <View>
            <Image style={{ width: 100, height: 100, margin: 0 }} source={{ uri: image }} />
        </View>
        
        <View style={{ marginLeft:10,marginVertical:5 }}>
            <Text style={{ fontSize: 15, color: '#8b8c8c' }}>{name}</Text>
            <Text style={{ fontSize: 15,fontWeight:900, color: '#5fad93' }}>{prix+' MRU'}</Text>
            <Text style={{ fontSize: 12, color: 'black' }}>{quantite +' unité'}</Text>
          </View>
        </View>
        <View style={{ flexDirection:'row',alignItems:'center',justifyContent:'center' }}>
          <View style={{justifyContent:'center',alignItems:'center',marginRight:10}}>
            <TouchableOpacity style={{ backgroundColor:'#6588bf', borderRadius:100,width:20,marginRight:5,alignItems:'center' }}>
                  <Text style={{ fontSize: 20, color: 'white' }} >+</Text>
            </TouchableOpacity>
              <Text style={{ fontSize: 20, color: 'black' }} >3</Text>
            <TouchableOpacity style={{ backgroundColor:'#6588bf', borderRadius:100,width:20,marginRight:5,marginTop:3,alignItems:'center' }}>
                  <Text style={{ fontSize: 20, color: 'white' }} >-</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{  borderRadius:100,width:20,marginRight:5,marginTop:3,alignItems:'center' }}>
                <Text style={{ fontSize: 20, color: '#9e5f52' }} >x</Text>
          </TouchableOpacity>
      </View>
      
      
      
    </View>
  );
};

export default Produit;
