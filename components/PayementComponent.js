import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { URL_PATH } from '../AppPath';
const PayementComponent = ({ visible, onClose ,handleTypePayement}) => {
    const [data,setData] = useState({});
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${URL_PATH}/api/paeiment/data`);
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };
    
      fetchData();
    
    }, []);
    
  // alert(JSON.stringify(data))
 const renderType = ({item}) => {
    return (
        <View>
        <TouchableOpacity
        style={{ flexDirection:'row',marginBottom:20 }}
        onPress={() => {handleTypePayement(item.type_paiement),onClose()}}
        >

     <Text style={{ fontSize:25,color:'#696969' }}> {item.type_paiement}</Text>

       </TouchableOpacity>
       </View>
    )
 }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >

      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <Text style={{ fontSize:25,color:'#303030',marginBottom:35,borderBottomColor:'#bfbfbf',borderBottomWidth:1 }}>Payement Methodes</Text>
     <FlatList
            data={data}
            keyExtractor={(item)=>item.type_paiement.toString()}
            renderItem={renderType}
            numColumns={1}
            style={{ maxHeight:200,overflow:'scroll' }}

     />
         
          <TouchableOpacity  onPress={onClose} style={{alignSelf:'center', flexDirection:'row', }}>
          <Icon
        name="close"
        size={25}
        color="#c45271"
      />
              <Text style={{ fontSize:20,color:'#c45271',top:-2 }}>close</Text>

          </TouchableOpacity>
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

export default PayementComponent;