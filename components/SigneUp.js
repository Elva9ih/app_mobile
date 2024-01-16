// SigneUpScreen.js

import React, { useState,useEffect } from 'react';
import { View, Text,Keyboard, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you want to use FontAwesome icons
import { CheckBox } from 'react-native-elements';

const SigneUpScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

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
    {isKeyboardVisible ? '':(
 <Image
      source={require('../assets/loginImage.png')}
      style={styles.image}

    />
    )
    }
   
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
      <View style={styles.iconphone}>
        <Icon name="phone" size={20} color="#6588bf" />

      </View>
      <View style={styles.email}>
        <Icon name="envelope" size={20} color="#6588bf" />

      </View>
      {/* Username TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Phone"
        secureTextEntry={!showPassword}
        onChangeText={(phone) => setPassword(phone)}
        value={phone}
      />
        <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={(email) => setPassword(email)}
        value={email}
      />
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

         </View>
        </View>
     

   <View style={styles.mbot}>
   <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Signe Up </Text>
        <Icon name="angle-right" size={30} color="white" />
      </TouchableOpacity> 
      <View style={styles.signeup}>
           <Text>Back to </Text>
           <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
           <Text style={styles.forget}> Login </Text>
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
  iconphone:{
    position: 'absolute',
    right: 15, // Adjust the left position as needed
    top: 83, // Adjust the top position as needed
    zIndex: 1, // To position the icon above the TextInput
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
    justifyContent:'center',
    marginTop:-20,
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
    top: 212, // Adjust the top position as needed
    zIndex: 1, // To position the icon above the TextInput
  },
  email: {
    position: 'absolute',
    right: 15, // Adjust the right position as needed
    top: 146, // Adjust the top position as needed
    zIndex: 1, // To position the icon above the TextInput
  },
});

export default SigneUpScreen;