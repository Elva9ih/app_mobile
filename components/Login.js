// LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you want to use FontAwesome icons
import { CheckBox } from 'react-native-elements';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = () => {
    // Implement your authentication logic here
    // For simplicity, let's just log the credentials for now
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your authentication logic (e.g., API calls) here
  };

  return (
    <View style={styles.container}>
    <Image
      source={require('../assets/loginImage.png')}
      style={styles.image}

    />
        <View style={styles.buttons}>
        <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />

       <View style={styles.iconDel}>
        <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#6588bf" onPress={toggleShowPassword} />
      </View>
         <View style={styles.iconContainer}>
        <Icon name="user" size={20} color="#6588bf" />

      </View>

      {/* Username TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={!showPassword}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
        <View style={styles.check}>
                <CheckBox 
                  title="Remember me"
                  checkedColor="#6588bf"  // Change the checked color
                  checked={isChecked}
                  containerStyle={styles.checkBoxContainer}
                  onPress={() => setIsChecked(!isChecked)}
                />
                <TouchableOpacity>
                    <Text style={styles.forget}>Forget your password ?</Text>
                </TouchableOpacity>
         </View>
        </View>
     

   <View style={styles.mbot}>
   <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login </Text>
        <Icon name="angle-right" size={30} color="white" />
      </TouchableOpacity> 
      <View style={styles.signeup}>
           <Text>Go to </Text>
           <TouchableOpacity 
            onPress={() => navigation.navigate('SigneUp')}
            >
           <Text style={styles.forget}> Signe Up </Text>
      </TouchableOpacity> 
      </View>
   </View>

   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
  },
   image:{
       height:290,
       width:'98%',
       

   },
   mbot:{
      width:'100%',
   },
   forget:{
      color:'#6588bf',
      fontWeight:'400',
   },

   checkBoxContainer:{
     borderColor:'transparent',
     backgroundColor:'transparent'
   },
   check:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
   },
  input: {
    height: 40,
    width: '95%',
    height:50,
    borderColor: '#ffffff',
    backgroundColor:'#F9F7F6',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 8,
  },
  buttons:{
    width: '100%',
    alignItems: 'center',

  },
  loginButton: {
    backgroundColor: '#6588bf',
    padding: 10,
    borderRadius: 8,
    flexDirection:'row',
    justifyContent:'center',
    width:'100%',
    marginBottom:10

  },
  signeup:{
     flexDirection:'row',
     justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
  },
  iconContainer: {
    position: 'absolute',
    right: 15, // Adjust the left position as needed
    top: 12, // Adjust the top position as needed
    zIndex: 1, // To position the icon above the TextInput
  },

  iconDel: {
    position: 'absolute',
    right: 15, // Adjust the right position as needed
    top: 80, // Adjust the top position as needed
    zIndex: 1, // To position the icon above the TextInput
  },
});

export default LoginScreen;