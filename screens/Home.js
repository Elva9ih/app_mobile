import { View, TextInput,Image, Text, StyleSheet, FlatList} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allproduits } from '../slices/ProduitSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { allcategories } from '../slices/CategorieSlice';
import Head from '../components/Head';
import { addProduitVent } from '../slices/ListProduitSlice';


const Home = ({navigation}) => {
  const dispatch=useDispatch()
    const myProducts = useSelector(allproduits);
    const categories = useSelector(allcategories);
    const renderProduct = ({item}) => (
         <View>
              <View style={{ padding:10,marginLeft:10,borderRadius:10 ,backgroundColor:'#fff'}}>
              <Image
                    source={{ uri:item.image }} 
                    style={{ height:100,backgroundColor:'transparent',width:150,}}
              />
              <Text style={{ color:'#8b8c8c',fontSize:14,fontWeight:300 }}>{item.name}</Text>
              <Text style={{ color:'#8b8c8c',fontSize:15,fontWeight:500 }}>{item.quantite + " unité"}</Text>
               <TouchableOpacity 
               style={{ width:'100%',backgroundColor:'#6588bf',marginTop:5 }}
               onPress={() => {
                dispatch(addProduitVent(item));
                }}
               >
                  <Text style={{ color:'#ebebeb',textAlign: 'center' }}>Add to cards</Text>
               </TouchableOpacity>
              </View>
         </View>
    );
    const renderItem = ({ item }) => (
      <View  style={{ marginTop:20 }}>
        <View style={{ marginBottom:10,marginLeft:10,flexDirection:'row' ,justifyContent:'space-between'}}>
        <Text style={{ fontSize:25,fontWeight:400,color:'#6a6b6b' }}>{item}</Text>
       <TouchableOpacity         
                onPress={() => navigation.navigate('Categorie', { itemId: item})}
       >
               <Text style={{paddingLeft:10,fontStyle:'italic',  fontSize:15,fontWeight:600,right:10,marginTop:7,color:'#cc7c87',borderRadius:20 }}> See more { '>' } </Text>
       </TouchableOpacity> 
      
      </View>
         <FlatList
           showsHorizontalScrollIndicator={false}
            horizontal
            data={myProducts.filter(i => i.categorie == item)}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={renderProduct}
            numColumns={1}
            />

      </View>
      
    );
  return (
    <View style={{ flex:1 }}>

    {/*  searsh */}
       <Head/>
    {/* categorie */}
         <View style={{ height:600,width:'100%',marginTop:35 }}>
         <FlatList
            data={categories}
            keyExtractor={(item) => item}
            renderItem={renderItem}
            style={{ backgroundColor:'#ededed' }}
        />
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
export default Home
