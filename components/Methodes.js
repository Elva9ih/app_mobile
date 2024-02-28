import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon, Image } from 'react-native-elements';
import PayementComponent from './PayementComponent';
import * as ImagePicker from 'expo-image-picker';
const Methodes = ({navigation}) => {

    // const [imgUri,setImgUri] = useState("https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=")
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
    
    const hundelvalidate=()=>{
    alert("Le paiement a été effectué avec succès.")
        navigation.replace('Home')
    }

    // camera

    const [selectedImage, setSelectedImage] = useState(null);
  const [click,setClick]=useState(false)
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async (sourceType) => {
    setClick(true)
    let result;
    if (sourceType === 'library') {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      setClick(false)
    } else if (sourceType === 'camera') {
      result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      setClick(false)
    }

    // console.log(result.assets[0].uri);
    if (!result.cancelled) {
      // console.log("hello");
      setSelectedImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    const uri = "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=";
    if (uri && !uri.canceled) { 
      setSelectedImage(uri);
    }
  }, []);

    // end
  return (
    <View>
    <View style={{ justifyContent:'flex-end',height:50 }}>
          <Text style={{ fontSize:25,textAlign:'center',color:'#777878' }}>Total : <Text style={{ fontWeight:600 }}>200</Text> MRU</Text>
    </View>
      
      {selectedImage && (
        <Image resizeMode='contain' style={styles.img} source={{ uri:selectedImage }}/>
      )}
      
      <View style={{flexDirection:'row', width:'100%',height:'10%',justifyContent:'center' }}>
          <TouchableOpacity 
              style={{ backgroundColor:'#252636',borderRadius:20,width:'20%',alignSelf:'center',margin:10,height:50,justifyContent:'center',alignItems:'center' }}
              onPress={() => pickImage('library')}>
                  <Icon name="photo" size={30} color="white" />
              </TouchableOpacity>

              <TouchableOpacity 
              style={{ backgroundColor:'#252636',borderRadius:20,width:'20%',alignSelf:'center',margin:10,height:50,justifyContent:'center',alignItems:'center' }}
              onPress={() => pickImage('camera')}>
                <Icon name="camera" size={30} color="white" />
            </TouchableOpacity>
      </View>
       <View style={{ justifyContent:'center',flexDirection:'column',width:250,alignSelf:'center',alignItems:'center',height:100,top:50 }}>
            <TouchableOpacity onPress={openModal} style={{ width:"100%",height:70,borderColor:'gray',borderWidth:5,backgroundColor:'#6588bf',justifyContent:'center',alignItems:'center',borderRadius:8 }}>
            {typePayement==""&&
            <Text style={{textAlign:'center',color:'white',fontSize:15, padding:10, }}>Choisez Le type de payement</Text> 
            }
            {!typePayement==""&&
            <Text style={{textAlign:'center',color:'white',fontSize:20, padding:10, }}>{typePayement}</Text> 
            }
            </TouchableOpacity>
       </View>

              
            <TouchableOpacity 
            style={{marginTop:70, backgroundColor:'#4eab3f',borderRadius:20,width:'70%',alignSelf:'center',margin:10,height:50,justifyContent:'center',alignItems:'center' }}
            onPress={()=>{hundelvalidate()}}
            >
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