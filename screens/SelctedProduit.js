import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import Produit from '../components/Produit';
import { allventeproduits, deleteAllProduitVent, totalprix } from '../slices/ListProduitSlice';

const SelctedProduit = () => {
    const dispatch=useDispatch();
    const allproduits = useSelector(allventeproduits);
    const totale = useSelector(totalprix);
    const renderItem = ({ item }) => (
          <Produit
              id={item.id}
              name={item.name}
              prix={item?.prix}
              quantite={item.quantite}
              image={item.image}
              categorie={item.categorie}
              qty={item.qty}
            />
      );
  return (

    <SafeAreaView style={{flex:1, backgroundColor: '#fff' }}>
      
      <View style={{ backgroundColor:'#ffff'}} >
        {/* featured */}
            <View style={{ alignItems:'center',backgroundColor:'#ededed',height:630}}>
                <FlatList
                data={allproduits.listproduit}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                numColumns={1} 
                />
            </View>
            <View style={{ margin:3 ,flexDirection:'row', justifyContent:'center', marginTop:25}}>
              <Text style={{ fontSize: 25,fontWeight:500, color: 'black' }}>Totale =</Text>
              <Text style={{ fontSize: 25,fontWeight:400, color: 'black' }}>{totale} MRU</Text>
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
                }}
                onPress={() => {
                  dispatch(deleteAllProduitVent())
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
          
        </View>
        
    </SafeAreaView>
  
  )
}

export default SelctedProduit