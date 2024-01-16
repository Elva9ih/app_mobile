import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Button, Icon, Text } from 'react-native-elements';

const Menu = () => {
    return (
        <View style={{ backgroundColor:'#cfdee3',flex:1 }}>
              <View>
                   <TouchableOpacity style={{ alignSelf:'center',
                   flexDirection:'row',marginTop:40,backgroundColor:'#6593c2',borderRadius:20,padding:10,justifyContent:'space-evenly', }}>
                        <Icon name="login" color="white" size={40}/>
                        <Text style={{ fontSize:30,color:"white" }}> Connection</Text>
                   </TouchableOpacity>
                 </View>

                 <View style={{flexWrap:'wrap' }}>
                 <Text style={{ marginTop:40,fontSize:30 }}>Contacts</Text>
                   <TouchableOpacity style={{ alignSelf:'center',
                   flexDirection:'row',flexWrap:'wrap',marginTop:40,borderRadius:20,padding:10,justifyContent:'space-evenly', }}>
                        <Icon name="facebook" color="white" size={40}/>
                        <Icon name="facebook" color="white" size={40}/>
                        <Icon name="facebook" color="white" size={40}/>
                   </TouchableOpacity>
                 </View>

        </View>
    );
}

const styles = {
    buttonStyle: {
      backgroundColor: '#6588bf', // Button background color
      borderRadius: 40,
      marginVertical: 100,
      width:'70%',
      height:20,
      alignSelf: 'center'
    },
  };

export default Menu;
