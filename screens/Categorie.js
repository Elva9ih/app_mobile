import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { allproduits } from '../slices/ProduitSlice';
import { Image } from 'react-native-elements';
import Head from '../components/Head';
import { Icon } from 'react-native-elements';
import { addProduitVent, deleteProduitVent } from '../slices/ListProduitSlice';
const Categorie = ({route}) => {
   const dispatch=useDispatch()
    const { itemId} = route.params;
    const mycategorie = useSelector(allproduits);
    const myProducts= mycategorie.filter(i =>i.categorie === itemId)
    const renderProduct = ({item}) => (
           <View style={{ width:'47%',height:200,margin:7}}>
                <View style={{ padding:10,borderRadius:10 ,backgroundColor:'#fff'}}>
                {!('selected' in item )?null:(
                  <View style={{ position:'absolute',backgroundColor:'#cc7c87',zIndex:100,right:7,borderRadius:100,top:7}}>
                    <TouchableOpacity
                    onPress={() => {
                      dispatch(deleteProduitVent(item.id));
                      }}
                    >
                        <Icon name='close' color='#fff' />
                    </TouchableOpacity>
                  </View>
               )} 
                <Image
                      source={{ uri:item.image }} 
                      style={{ height:100,backgroundColor:'transparent',width:'100%',}}
                />
                <Text style={{ color:'#8b8c8c',fontSize:14,fontWeight:300,overflow: 'hidden' }}>{item.name}</Text>
                <Text style={{ color:'#6588bf',fontSize:14,fontWeight:400 }}>{item.prix+' MRU'}</Text>
                <Text style={{ color:'#8b8c8c',fontSize:15,fontWeight:500 }}>{item.quantite + " unité"}</Text>
                {'selected' in item ?null:(
               <TouchableOpacity 
               style={{ width:'100%',backgroundColor:'#6588bf',marginTop:5 }}
               onPress={() => {
                dispatch(addProduitVent(item));
                // setSelected(true)
                }}
               >
                  <Text style={{ color:'#ebebeb',textAlign: 'center' }}>Add to cards</Text>
               </TouchableOpacity>
              )}
               {!('selected' in item )?null:(
               <TouchableOpacity disabled style={{ width:'100%',backgroundColor:'#84e8b3',marginTop:5 }}>
                  <Text style={{ color:'#ffff',textAlign: 'center',fontStyle:'italic'}}>selected</Text>
               </TouchableOpacity>
               )}
                </View>
           </View>
      );
  return (
    <View style={{ flex:1,width:'100%',height:'100%'}}>
         <Head/>
         <View style={{ width:'90%',height:50,alignItems:'center',justifyContent:'center',backgroundColor:'#6588bf', margin:10,left:10 }}>
            <Text style={{ color:'#dbd9d9',fontWeight:300,fontSize:20 }}>{itemId}</Text>
         </View>
         <FlatList
            data={myProducts}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={renderProduct}
            numColumns={2}
            style={{ backgroundColor:'#ededed' }}
            />
    </View>
  )
}

export default Categorie