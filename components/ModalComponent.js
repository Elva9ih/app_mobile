import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const ModalComponent = ({ visible, onClose }) => {
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
          <TouchableOpacity style={{ flexDirection:'row',marginBottom:20 }}>
          <Icon
        name="paypal"
        type="font-awesome"
        size={30}
        color="blue"
      />
        <Text style={{ fontSize:20,color:'#696969' }}> payPal</Text>

          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection:'row',marginBottom:30 }}>
          <Icon
        name="cc-mastercard"
        type="font-awesome"
        size={30}
        color="#e38222"
      />
        <Text style={{ fontSize:20,color:'#696969' }}> masterCard</Text>

          </TouchableOpacity>

          <TouchableOpacity  onPress={onClose} style={{alignSelf:'center', flexDirection:'row', }}>
          <Icon
        name="close"
        size={25}
        // type="font-awesome"
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

export default ModalComponent;