import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

const ModalComponent = ({ visible, onClose }) => {
         const navigation = useNavigation();
  // const handlePostRequest = (da) => {
  //   // console.log(JSON.da)
  //   axios.post('https://6e66-41-223-98-194.ngrok-free.app/api/produits', da)
  //   .then(response => {
  //     console.log('Response:', response.data);
  //     // Handle successful response here
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //     // Handle error here
  //   });
     
  // };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >

      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={{ width:300}}>
               <View style={{ width:'98%',height:70,bottom:20,justifyContent:'space-between',alignItems:'flex-end',fontSize:40,flexDirection:'row'}}>
                     <Text style={{fontSize:20 }}>Prix : <Text style={{fontSize:20,fontWeight:600 }}>2000</Text> MRU.</Text>
                     <TouchableOpacity  onPress={onClose} style={{alignSelf:'center', flexDirection:'row', }}>
          <Icon
        name="close"
        size={40}
        // type="font-awesome"
        color="#c45271"
      />

          </TouchableOpacity>
               </View>
               <View style={{ width:300,height:45,fontSize:40,flexDirection:'row',alignItems:'center' }}>
                     
                     <TextInput
                     placeholder='Payer'
                     keyboardType='numeric'
                          style={{ width:'60%',borderColor:'#556582',borderBottomWidth:2,paddingLeft:10,fontSize:20 }}
                     />
                      <Text style={{fontSize:20,width:'30%',left:10 }}>MRU</Text>
               </View>
               <View style={{ width:200,height:60,fontSize:40 ,justifyContent:'center'}}>
                     <Text style={{fontSize:20 }}>Rest : <Text style={{fontSize:20,fontWeight:600,color:'#945b38' }}>10</Text> MRU.</Text>
               </View>
          <View style={{ width:'100%',height:100,justifyContent:'center' }}>
            <TouchableOpacity style={{ backgroundColor:'#4eab3f',borderRadius:20,width:'70%',alignSelf:'center',margin:10,height:50,justifyContent:'center',alignItems:'center' }}>
                     <Text style={{color:'white',fontSize:25 }}>Valider</Text>
            </TouchableOpacity>
        </View>
        <Text style={{ height:50,width:'80%',alignSelf:'center',textAlign:'center' }}>Vous pouvez utiliser autres methodes de payement.</Text>
        <View style={{ width:'100%' }}>
            <TouchableOpacity          
                 onPress={() => {
                             navigation.navigate('Methodes');
                           }}
                    style={{ backgroundColor:'#6588bf',width:'100%',height:50,justifyContent:'center',alignItems:'center' }}>
                    <Text style={{ color:'white',fontSize:22 }}>Autre methodes</Text>
            </TouchableOpacity>
        </View>
          </View>
        </View>
       
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'start',
  },
});

export default ModalComponent;