import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Icon, Image } from 'react-native-elements';
import { launchCamera } from 'react-native-image-picker';

const Methodes = () => {
    const [imgUri,setImgUri] = useState("https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=")
    const [typePayement,setTypePayement] = useState("Bankili");
    const handleTypePayement = (type) => {
        setTypePayement(type);
    }
    const openCameralib = async() => {
         const result = await launchCamera();
    }
  return (
    <View>
    <View style={{ justifyContent:'flex-end',height:50 }}>
          <Text style={{ fontSize:25,textAlign:'center' }}>Total : <Text style={{ fontWeight:600 }}>200</Text> MRU</Text>
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
       <View style={{ justifyContent:'center',height:'auto',top:20 }}>
       <Text style={{ height:50,fontSize:20,width:'80%',alignSelf:'center',justifyContent:'flex-end',textAlign:'center' }}>Type de payement: <Text style={{ fontWeight:600 }}>{typePayement}</Text></Text>
              <View style={{ width:'80%',flexWrap:'wrap',justifyContent:'space-evenly',height:210,alignSelf:'center',flexDirection:'row' }}>
                    <TouchableOpacity 
                    onPress={() => {handleTypePayement("Bankili")}}
                    style={{ borderRadius:10,height:40,justifyContent:'center',alignItems:'center',margin:10,width:80,backgroundColor:'#75ab3f' }}>
                        <Text style={{ color:'white',fontSize:20 }}>Bankili</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => {handleTypePayement("Masrivi")}}
                    style={{ borderRadius:10,height:40,justifyContent:'center',alignItems:'center',margin:10,width:80,backgroundColor:'red' }}>
                        <Text style={{ color:'white',fontSize:20 }}>Masrivi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => {handleTypePayement("Sedad")}}
                    style={{ borderRadius:10,height:40,justifyContent:'center',alignItems:'center',margin:10,width:80,backgroundColor:'gray' }}>
                        <Text style={{ color:'white',fontSize:20 }}>Sedad</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => {handleTypePayement("Berid")}}
                    style={{ borderRadius:10,height:40,justifyContent:'center',alignItems:'center',margin:10,width:80,backgroundColor:'blue' }}>
                        <Text style={{ color:'white',fontSize:20 }}>Berid</Text>
                    </TouchableOpacity>
              </View>
       </View>

              
            <TouchableOpacity style={{ backgroundColor:'#4eab3f',borderRadius:20,width:'70%',alignSelf:'center',margin:10,height:50,justifyContent:'center',alignItems:'center' }}>
                     <Text style={{color:'white',fontSize:25 }}>Valider</Text>
            </TouchableOpacity>
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