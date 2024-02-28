import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you want to use FontAwesome icons
import { CheckBox } from 'react-native-elements';
import { SetConnexion } from '../slices/ConnexionSlice';
import {URL_PATH} from "../AppPath"
const LoginScreen = ({navigation}) => {
  // const [username, setUsername] = useState('');
  const [telephone, setTelphone] = useState('49252653');
  const [password, setPassword] = useState('1234');
  const [showPassword, setShowPassword] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const dispatch=useDispatch()
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
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
  // ################# Login ###########################
  const handleLogin = async () => {
    try {
      const response = await fetch(`${URL_PATH}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: password,
          telephone: telephone,
        }),
      });
      if (!response.ok) {
        throw new Error("L'authentification a échoué");
      }
      const data = await response.json();
      if (data.userExists) {
        console.log("Authentification réussie");
        const connect={password,telephone}
        dispatch(SetConnexion(connect))
        setPassword('')
        setTelphone('')
        navigation.replace('Home');
      } else {
        alert("L'utilisateur n'existe pas");
      }
    } catch (error) {
      console.error('Erreur pendant l\'authentification :', error.message);
    }
  };
// #########################################
  return (
    <View style={styles.container}>
   {isKeyboardVisible?'':(
    <Image
      source={require('../assets/loginImage.png')}
      style={styles.image}

    />
   )}
        <View style={styles.buttons}>
        {/* <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      /> */}

       <View style={styles.iconDel}>
        <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#6588bf" onPress={toggleShowPassword} />
      </View>
      <View style={styles.iconPh}>
        <Icon name='phone'  size={20} color="#6588bf" onPress={toggleShowPassword} />
      </View>
      {/* <View style={styles.iconContainer}>
          <Icon name="user" size={20} color="#6588bf" />
      </View> */}

      {/* Username TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Telephone"
        // secureTextEntry={!showPassword}
        onChangeText={(text) => setTelphone(text)}
        value={telephone}
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
           {/* <Text>Go to </Text> */}
           <TouchableOpacity 
            onPress={() => navigation.replace('SigneUp')}
            >
           {/* <Text style={styles.forget}> Signe Up </Text> */}
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
    top: 81, // Adjust the top position as needed
    zIndex: 1, // To position the icon above the TextInput
  },
  iconPh: {
    position: 'absolute',
    right: 20, // Adjust the right position as needed
    top: 15, // Adjust the top position as needed
    zIndex: 1, // To position the icon above the TextInput
  },
});

export default LoginScreen;