import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { decrement, deleteProduitVent, increment } from '../slices/ListProduitSlice';
// import { Icon } from 'react-native-elements';
const Produit = ({ id, name, quantite, prix, image,qty }) => {
  const dispatch=useDispatch();
  return (
    <View style={{  backgroundColor: 'white', margin: 2, padding: 2, width: 380, flexDirection: 'row' ,justifyContent:'space-between',marginTop:10}}>
      <View style={{flexDirection: 'row' }}>
        <View>
            <Image style={{ width: 100, height: 100, margin: 0 }} source={{ uri: image }} />
        </View>
        
        <View style={{ marginLeft:10,marginVertical:5 }}>
            <View>
              <Text style={{ fontSize: 20, color: '#8b8c8c' }}>{name}</Text>
              <Text style={{ fontSize: 12,fontWeight:900, color: '#5fad93' }}>{prix+' MRU'}</Text>
            </View>
              <View style={{flexDirection:'row', justifyContent:'flex-start',alignItems:'center',marginRight:10,marginTop:6}}>
              <TouchableOpacity 
                style={{ backgroundColor:'#6588bf', borderRadius:100,width:30,marginRight:8,alignItems:'center' }}
                onPress={() => {
                  dispatch(increment(id))
                }}
              >
                    <Text style={{  fontSize: 20,color: 'white' }} >+</Text>
              </TouchableOpacity>
                <Text style={{ fontSize: 25, color: 'black' }} >{qty}</Text>
              <TouchableOpacity 
                style={{ backgroundColor:'#6588bf', borderRadius:100,width:30,marginLeft:8,marginTop:3,alignItems:'center' }}
                // onPress={dispatch(decrement(id))}
                onPress={() => {
                  dispatch(decrement(id))
                }}
              >
                    <Text style={{ fontSize: 20, color: 'white' }} >-</Text>
              </TouchableOpacity>
          </View>
        </View>
        </View>
        <View style={{ flexDirection:'row',alignItems:'center',justifyContent:'center' }}>
          <TouchableOpacity style={{  borderRadius:100,width:20,marginRight:15,marginTop:-30,alignItems:'center' }}
          onPress={() => {
            dispatch(deleteProduitVent(id))
          }}
          >
                <Text style={{ fontSize: 30, color: '#9e5f52' }} >x</Text>
          </TouchableOpacity>
      </View>
      
      
      
    </View>
  );
};

export default Produit;
