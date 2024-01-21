
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const MenuConnected = () => {
    const navigation=useNavigation()
  return (
    <View style={styles.container}>
    <View style={styles.overlay}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mohamed Ejlal</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerTextnumber}>+222 49252653</Text>
      </View>
      <View style={styles.contentContainer}>
      <Text style={{ fontWeight:'700' }}>Support et contact</Text>
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
        <Text style={{ fontWeight:'700' }}>Réseaux sociaux</Text>
        <View style={styles.buttonContainer}>
          <FontAwesome name="facebook-square" size={30} color="#1877f2" style={styles.icon} />
          <Text style={styles.contactInfo}>facebook.com/yourpage</Text>
        </View>
        <View style={styles.buttonContainer}>
          <FontAwesome name="whatsapp" size={30} color="#25d366" style={styles.icon} />
          <Text style={styles.contactInfo}>+123456789</Text>
        </View>
        <View style={styles.buttonContainer}>
          <FontAwesome name="twitter" size={30} color="#1da1f2" style={styles.icon} />
          <Text style={styles.contactInfo}>@yourtwitter</Text>
        </View>
        <View style={styles.buttonContainer}>
          <MaterialIcons name="email" size={30} color="#ff5722" style={styles.icon} />
          <Text style={styles.contactInfo}>contact@yourdomain.com</Text>
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
      // justifyContent: 'center',
      // alignItems: 'center',
      borderRadius: 20,
    },
    
    headerTextnumber: {
      fontSize: 20,
      fontWeight: '500',
      color: '#333',
      
    },
    headerText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#333',
    },
    header: {
      marginLeft:0,
      marginBottom: 20,
    },
    contentContainer: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
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
      backgroundColor: '#bcc3cc',
      padding: 15,
      borderRadius: 10,
      marginTop: 10,
      width: '100%',
      flexDirection:'row'
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