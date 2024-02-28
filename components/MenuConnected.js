
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Connexion } from '../slices/ConnexionSlice';
import {Icon} from 'react-native-elements'
const MenuConnected = () => {
    const dispatch=useDispatch()
    const conexion = useSelector(Connexion);
    const navigation=useNavigation()
    
  return (
    <View style={styles.container}>
    <View style={styles.overlay}>
      <TouchableOpacity style={styles.header}
      onPress={()=>{navigation.navigate('JournalisationType')}}
      >
        <View style={{ flexDirection:'row',width:'96%',justifyContent:'space-between' }}>
        <Text style={styles.headerText}>Med Ejlal</Text>
        <Text style={{ fontSize:20,fontWeight:800,justifyContent:'center',color:'#595959' }}>+222 {conexion.telephone} </Text>
        </View>
        <View style={{ justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
          <Text style={{ fontSize:18,fontWeight:'600',marginRight:10 ,color:'#6986d6'}}>journal</Text> 
          <Icon name='arrow-right' size={12} type='font-awesome' color='#6986d6'/>
        </View>
      </TouchableOpacity>
      <View style={styles.contentContainer}>
      <Text style={{ fontWeight:'700',fontSize:20 }}>Support et contact</Text>
        <View style={{ marginBottom:25 }}>
          <View style={styles.buttonContainer}>
            <FontAwesome name="phone" size={30} color="#1877f2" style={styles.icon} />
            <Text style={styles.contactInfo}>connecter nous</Text>
          </View>
          <View style={styles.buttonContainer}>
            <FontAwesome name="envelope" size={30} color="#1877f2" style={styles.icon} />
            <Text style={styles.contactInfo}>connecter@gmail.com</Text>
          </View>
        </View>
        <Text style={{ fontWeight:'700',fontSize:20 }}>Réseaux sociaux</Text>
       
          <View style={{ justifyContent:'space-between',flexDirection:'row',alignItems:'center',width:"100%",height:'25%' ,paddingHorizontal:10 }}>
            <View style={styles.buttonContainerReseaux}>
              <View style={{ justifyContent:'center',alignItems:'center' }}>
                <FontAwesome name="facebook-square" size={50} color="#1877f2" style={styles.icon} />
              </View>
              <Text style={styles.contactInfo}>facebook.com/yourpage1</Text>
            </View>
            <View style={styles.buttonContainerReseaux}>
              <View style={{ justifyContent:'center',alignItems:'center' }}>
                  <FontAwesome name="whatsapp" size={50} color="#25d366" style={styles.icon} />
              </View>
              <Text style={styles.contactInfo}>+123456789</Text>
            </View>
          </View>
          <View style={{ justifyContent:'space-between',flexDirection:'row',alignItems:'center',width:"100%",height:'25%',paddingHorizontal:10 }}>
          <View style={styles.buttonContainerReseaux}>
              <View style={{ justifyContent:'center',alignItems:'center' }}>
                  <FontAwesome name="twitter" size={50} color="#1da1f2" style={styles.icon} />
              </View>
            <Text style={styles.contactInfo}>Dcs@yourtwitter</Text>
          </View>
            <View style={styles.buttonContainerReseaux}>
                <View style={{ justifyContent:'center',alignItems:'center' }}>
            <MaterialIcons name="email" size={50} color="#ff5722" style={styles.icon} />
              </View>
            <Text style={styles.contactInfo}>contact@yourdomain.com</Text>
          </View> 
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttondeconnexion}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>DeConnexion</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      backgroundColor: '#fff', // Semi-transparent overlay for better text visibility
      padding: 20,
      width: '100%',
      height: '100%',
      borderRadius: 20,
    },
    
    headerTextnumber: {
      fontSize: 20,
      fontWeight: '500',
      color: '#333',
      
    },
    headerText: {
      fontSize: 20,
      fontWeight: '900',
      color: '#595959',
    },
    header: {
      margin:10,
      justifyContent:'space-between',
      // flexDirection:'row',
      backgroundColor: '#edeff0',
      width:'96%',
      padding:15,
      borderRadius:10 
    },
    contentContainer: {
      flex: 1,
      marginTop:35
    },
    contactInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    icon: {
      marginRight: 10,
    },
    contactInfo: {
      fontSize: 18,
      color: '#333',
    },
    buttonContainer: {
      backgroundColor: '#edeff0',
      padding:10,
      paddingHorizontal:50,
      borderRadius: 10,
      marginTop: 10,
      width: '100%',
      flexDirection:'row'
    },
    buttonContainerReseaux: {
      backgroundColor: '#edeff0',
      padding: 5,
      borderRadius: 10,
      marginTop: 10,
      width: '45%',
      height:'90%',
      justifyContent:'space-between',
      flexDirection:'column'
    },
    buttondeconnexion: {
      backgroundColor: '#6588bf',
      padding: 15,
      borderRadius: 10,
      marginTop: 10,
      width: '100%',
      alignItems: 'center',
      
    },
    buttonText: {
      fontSize: 20,
      color: '#fff',
    },
  });
  
export default MenuConnected