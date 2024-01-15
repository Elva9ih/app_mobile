import { View, TextInput, Text, StyleSheet} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { allproduits } from '../slices/ProduitSlice';
import Search from '../components/Search';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Home = () => {
    const myProducts = useSelector(allproduits);
    alert(JSON.stringify(myProducts))
  return (
    <View style={{ flex:1 }}>
        <View style={{ flexDirection:'column',justifyContent:'center' }}>
         <View style={styles.searsh_vente}>
         <TouchableOpacity>
         <Icon name="menu" size={40} color="#7f8282" />
         </TouchableOpacity>
             <Search/>
             <TouchableOpacity style={{ right:10 }}>
                <Icon name="shopping-cart" size={40} color="#2a7882" />
             </TouchableOpacity>
             
         </View>
        </View>
             <View style={{ backgroundColor:'#db3d43',position:'absolute',padding:2,borderRadius:200,right:20,top:10 }}>
                  <Text style={{ fontSize:12,color:'white'}}> 2 </Text>
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