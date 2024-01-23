import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Icon, Image } from 'react-native-elements';
import { launchCamera } from 'react-native-image-picker';
import PayementComponent from './PayementComponent';

const Methodes = () => {
    const [imgUri,setImgUri] = useState("https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=")
    const [typePayement,setTypePayement] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
        setModalVisible(true);
      };
    
      const closeModal = () => {
        setModalVisible(false);
      };
    const handleTypePayement = (type) => {
        setTypePayement(type);
    }
    const openCameralib = async() => {
         const result = await launchCamera();
    }
  return (
    <View>
    <View style={{ justifyContent:'flex-end',height:50 }}>
          <Text style={{ fontSize:25,textAlign:'center',color:'#777878' }}>Total : <Text style={{ fontWeight:600 }}>200</Text> MRU</Text>
    </View>
      <Image resizeMode='contain' style={styles.img} source={{ uri:imgUri }}/>
      <View style={{justifyContent:'center',borderRadius:6,flexDirection:'row' }}>
                <TouchableOpacity
                    onPress={openCameralib}
                    style={styles.btnCam}
                >
                    <Icon name='camera' color='white' width="30"/>
                    <Text style={styles.textBtn}> Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={openCameralib}
                    style={styles.btnBrow}
                >
                    <Icon name="photo" type="font-awesome" color='#75ab3f' width="30"/>
                    <Text style={styles.textBrow}> Browser</Text>
                </TouchableOpacity>
      </View>
      {/* <Text style={{ height:50,marginTop:30,width:'80%',alignSelf:'center',textAlign:'center' }}>Vous pouver utiliser autres methodes de payement.</Text> */}

       <View style={{ justifyContent:'center',flexDirection:'column',width:250,alignSelf:'center',alignItems:'center',height:100,top:80 }}>
  
            <TouchableOpacity onPress={openModal} style={{ width:100,height:100,borderColor:'gray',borderWidth:5,backgroundColor:'#6588bf',justifyContent:'center',alignItems:'center',borderRadius:100 }}>
            <Text style={{textAlign:'center',color:'white',fontSize:10, padding:10, }}>Choisez Le type de payement</Text> 
            </TouchableOpacity>
            <Text style={{textAlign:'center',color:'#035363',fontSize:20, padding:10, }}> {typePayement}</Text>      
       </View>

              
            <TouchableOpacity style={{marginTop:180, backgroundColor:'#4eab3f',borderRadius:20,width:'70%',alignSelf:'center',margin:10,height:50,justifyContent:'center',alignItems:'center' }}>
                     <Text style={{color:'white',fontSize:25 }}>Valider</Text>
            </TouchableOpacity>
            <PayementComponent
               visible={modalVisible}
               onClose={closeModal}
               handleTypePayement={handleTypePayement}
            />
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
        width:'90%',
        height:300,
        marginLeft:'5%',
    },
    btnCam:{
         alignSelf:'center',
         justifyContent:'center',
         alignItems:'center',width:100,
         height:40,
         backgroundColor:'#75ab3f',
         flexDirection:'row',
         borderColor:'#75ab3f',
         borderWidth:1
    },
    btnBrow:{
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',width:100,
        height:40,
        backgroundColor:'white',
        flexDirection:'row',
        borderColor:'#75ab3f',
        borderWidth:1

   },
    textBtn:{
        color:'#ffff'
    },
    textBrow:{
        color:'#75ab3f'
    }
});
export default Methodes