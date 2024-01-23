import { View, Text, Image, SafeAreaView, TouchableOpacity, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import Produit from '../components/Produit';
import { allventeproduits, deleteAllProduitVent, totalprix } from '../slices/ListProduitSlice';
import ModalComponent from '../components/ModalComponent';
import { TextInput } from 'react-native-gesture-handler';
import PrintPdf from '../components/PrintPdf';

const SelctedProduit = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );
    
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const [remise, setRemise] = useState(0);
const data=useSelector(allventeproduits)
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
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
            <View style={{ alignItems:'center',backgroundColor:'#ededed',height:isKeyboardVisible ? 200:500}}>
                <FlatList
                data={allproduits.listproduit}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                numColumns={1} 
                />
            </View>

            <View style={{ margin:3 ,flexDirection:'row', justifyContent:'space-between',alignItems:'center',margin:25, marginTop:25}}>
              <Text style={{ fontSize: 20,paddingLeft: 2,paddingRight: 2, fontSize: 20,fontWeight:400, color: '#383838' }}>Totale = {totale} MRU</Text>
              <Text style={{ fontSize: 16,fontWeight:300, color: 'black' }}>Remis :</Text>
        <View
        style={{  
          textAlign:'center',
          borderWidth: 0.5,
          borderRadius: 8,
          borderColor: 'gray',
          flexDirection:'row',
          alignItems:'center',
          padding:2,
          paddingLeft:2
         }}
         >
        <TextInput
         placeholder="remis.."
         value={remise}
         keyboardType='numeric'
         onChangeText={(remise) => {if(remise <= 100){setRemise(remise)}}}

         style={{  
          textAlign:'center',

         }}
        />
        <Text>%</Text>
        </View>
       
            </View>
            <Text style={{paddingLeft: 2,paddingRight: 2, fontSize: 20,fontWeight:400,alignSelf: 'center', color: '#383838' }}>Prix = {totale} MRU</Text>

            <View style={{ flexDirection:'row',width:'80%',alignSelf:'center' ,justifyContent:'space-evenly',marginTop:20}}>
                <TouchableOpacity
                style={{
                  width: "30%",
                  height: 40,
                  backgroundColor: "#b35049",
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
            onPress={openModal}
          >
             <Text  style={{ fontSize:18 ,fontWeight:300,color:'white'}}>Confirmer</Text>
          </TouchableOpacity>
            <PrintPdf/>
            </View>
            <ModalComponent
             visible={modalVisible} 
             onClose={closeModal} 
             da={allproduits.listproduit}
             />

        </View>
        
    </SafeAreaView>
  
  )
}

export default SelctedProduit