import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { allproduits } from '../slices/ProduitSlice';
import { Image } from 'react-native-elements';
import Head from '../components/Head';
import { Icon } from 'react-native-elements';
import { addProduitVent, countProduits, deleteProduitVent } from '../slices/ListProduitSlice';
import { StyleSheet } from 'react-native';
const Categorie = ({route,navigation}) => {
   const dispatch=useDispatch()
    const { itemId} = route.params;
    const mycategorie = useSelector(allproduits);
    const [refreshPage, setRefreshPage] = useState(false);
    const count = useSelector(countProduits);
    const myProducts= mycategorie.filter(i =>i.categorie === itemId);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState();
    const handleSearch = (text) => {
      const query = text.toLowerCase();
      const filtered = myProducts.filter(item =>
        item.name.toLowerCase().includes(query)
      );
      setSearchQuery(text);
      setFilteredProducts(filtered);
    };
    useEffect(() => {
      setFilteredProducts(myProducts)
    }, [count]);
    
    const renderProduct = ({item}) => (
           <View style={{ width:200,height:200,margin:10,marginLeft:3 ,justifyContent:'center'}}>
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
               <View style={{ justifyContent:'center',alignItems:'center' }}>
                <Image
                      source={{ uri:item.image }} 
                      style={{ height:100,backgroundColor:'transparent',width:110,}}
                />
               </View>
                
                <Text style={{ color:'#8b8c8c',fontSize:14,fontWeight:300,overflow: 'hidden' }}>{item.name}</Text>
                <Text style={{ color:'#6588bf',fontSize:14,fontWeight:400 }}>{item.prix+' MRU'}</Text>
                <Text style={{ color:'#8b8c8c',fontSize:15,fontWeight:500 }}>{item.quantite + " unité"}</Text>
                {'selected' in item ?null:(
               <TouchableOpacity 
               style={{ width:'100%',backgroundColor:'#6588bf',marginTop:5 }}
               onPress={() => {
                dispatch(addProduitVent(item));
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

<View>
    <View style={{ flexDirection:'column',justifyContent:'center' }}>
    <View style={styles.searsh_vente}>
    <TouchableOpacity
    onPress={() => {
      navigation.navigate("Menu");
    }}
    >
    <Icon name="menu" size={40} color="#7f8282" />
    </TouchableOpacity>
    <View style={{ width:'70%',flexDirection:'row'}}>
      <View style={{top:12,left:10,zIndex:2}}>
        <Icon name='search' size={18} type='font-awesome' color='#7f8282'/>
    </View>
    <TextInput
      style={{ backgroundColor: 'white', height: 38, width: '96%',right:15, borderRadius: 10, padding: 1, paddingLeft: 38 }}
    //   value={search}
      placeholder='Search'
      underlineColorAndroid='transparent'
      onChangeText={handleSearch}
      value={searchQuery}
      // onChangeText={handleSearch}
    />


  </View>
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
         
         <View style={{ width:'90%',height:50,alignItems:'center',justifyContent:'center',backgroundColor:'#6588bf', margin:10,left:10 }}>
            <Text style={{ color:'#dbd9d9',fontWeight:300,fontSize:20 }}>{itemId}</Text>
         </View>
         <FlatList
            data={filteredProducts}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={renderProduct}
            numColumns={2}
            style={{ backgroundColor:'#ededed' }}
            />
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
export default Categorie