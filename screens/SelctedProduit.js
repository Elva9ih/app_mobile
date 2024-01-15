import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import Produit from '../components/Produit';
import { allproduits } from '../slices/ProduitSlice';
import { Icon } from 'react-native-elements';
import { allcategories } from '../slices/CategorieSlice';

const SelctedProduit = () => {

    const categories = useSelector(allcategories);
    // alert(JSON.stringify(categories))
    const renderItem = ({ item }) => (
          <Produit
              key={item.id}
              id={item.id}
              name={item.name}
              prix={item?.prix}
              quantite={item.quantite}
              image={item.image}
              categorie={item.categorie}
            />
      );
  return (

    <SafeAreaView style={{flex:1, backgroundColor: '#fff' }}>
      
      <ScrollView style={{ backgroundColor:'#ffff'}} >
        {/* featured */}
            <View style={{ alignItems:'center',backgroundColor:'#ededed',height:630}}>
                <FlatList
                data={categories}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                numColumns={1} // Set the number of columns to 3
                />
            </View>
            <View style={{ margin:3 ,flexDirection:'row', justifyContent:'center', marginTop:25}}>
              <Text style={{ fontSize: 25,fontWeight:500, color: 'black' }}>Totale =</Text>
              <Text style={{ fontSize: 25,fontWeight:400, color: 'black' }}>10000 MRU</Text>
            </View>
            <View style={{ flexDirection:'row' ,justifyContent:'center',marginTop:20}}>
                <TouchableOpacity
                style={{
                  width: "30%",
                  height: 40,
                  backgroundColor: "#9e5f52",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 7,
                  // marginLeft:10,
                }}
                onPress={() => {
                  // dispatch(deleteAllMyCartItem())
                  // dispatch(deleteAlldemand())
                }}
              >
                <Text style={{ fontSize:18 ,fontWeight:300,color:'white'}}>Suprimer</Text>
              </TouchableOpacity>
              <TouchableOpacity
            style={{
              width: "30%",
              height: 40,
              backgroundColor: "#6588bf",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 7,
              marginLeft:35,
            }}
            onPress={() => {
              // dispatch(deleteAllMyCartItem())
              // dispatch(deleteAlldemand())
            }}
          >
             <Text style={{ fontSize:18 ,fontWeight:300,color:'white'}}>Confirmer</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={{
              width: "28%",
              height: 30,
              backgroundColor: "#c71e1e",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 7,
              margin:2,
            }}
            onPress={() => {
              // dispatch(deleteAllMyCartItem())
              // dispatch(deleteAlldemand())
            }}
          >
             <Icon name='trash' size={18} type='font-awesome' color='white'/>
          </TouchableOpacity> */}
            </View>
          
        </ScrollView>
        
    </SafeAreaView>
  
  )
}

export default SelctedProduit