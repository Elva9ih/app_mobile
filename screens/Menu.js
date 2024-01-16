import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const ContactPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Contact Us</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.contactInfoContainer}>
            <FontAwesome name="facebook-square" size={30} color="#1877f2" style={styles.icon} />
            <Text style={styles.contactInfo}>facebook.com/yourpage</Text>
          </View>
          <View style={styles.contactInfoContainer}>
            <FontAwesome name="whatsapp" size={30} color="#25d366" style={styles.icon} />
            <Text style={styles.contactInfo}>+123456789</Text>
          </View>
          <View style={styles.contactInfoContainer}>
            <FontAwesome name="twitter" size={30} color="#1da1f2" style={styles.icon} />
            <Text style={styles.contactInfo}>@yourtwitter</Text>
          </View>
          <View style={styles.contactInfoContainer}>
            <MaterialIcons name="email" size={30} color="#ff5722" style={styles.icon} />
            <Text style={styles.contactInfo}>contact@yourdomain.com</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent overlay for better text visibility
    padding: 20,
    width: '80%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: '#6588bf',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default ContactPage;