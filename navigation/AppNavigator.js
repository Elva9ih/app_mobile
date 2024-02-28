import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from 'react-native';
import {Icon} from 'react-native-elements'
import Home from '../screens/Home';
import SelctedProduit from '../screens/SelctedProduit'
import Categorie from '../screens/Categorie';
import Menu from '../screens/Menu';
import LoginScreen from '../components/Login';
import SigneUpScreen from '../components/SigneUp';
import Codebar from '../components/Codebar';
import Methodes from '../components/Methodes';
import JournalisationParType from '../components/JournalisationParType';
import Journalisation from '../components/Journalisation';
import Archive from '../screens/Archive';
import { useSelector } from 'react-redux';
import { countProduitsArchive } from '../slices/ArchiveSlice';
const Stack = createStackNavigator();

const AppNavigator = ({navigation}) => 
  (
  <NavigationContainer >
    <Stack.Navigator >
    <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ 
          headerTitle:'Menu',
        headerTitleStyle: {
          color: 'white', 
        },
        // headerRight: () => (
        //   <View style={{ marginRight: 20 }}>
        //     <TouchableOpacity>
        //       <Icon name='user' size={30} type='font-awesome' color='white' />
        //     </TouchableOpacity>
        //   </View>
        // ),
        headerStyle: {
          backgroundColor: '#6588bf',
          shadowColor: '#427D9D',
        },
         }}
      />
       <Stack.Screen
        name="Archive"
        component={Archive}
        options={{ 
          headerTitle:'Archive',
        headerTitleStyle: {
          color: 'white', 
        },
        // headerRight: () => (
        //   <View style={{ marginRight: 20 }}>
        //     <TouchableOpacity>
        //       <Icon name='user' size={30} type='font-awesome' color='white' />
        //     </TouchableOpacity>
        //   </View>
        // ),
        headerStyle: {
          backgroundColor: '#6588bf',
          shadowColor: '#427D9D',
        },
         }}
      />
    <Stack.Screen
        name="Home" 
        component={Home}
        options={{ 
          headerTitle:'Home',
        headerTitleStyle: {
          color: 'white', 
        },
        // headerRight: () => (
        //   <View style={{ marginRight: 20 }}>
        //     <TouchableOpacity>
        //       <Icon name='user' size={30} type='font-awesome' color='white' />
        //     </TouchableOpacity>
        //   </View>
        // ),
        headerStyle: {
          backgroundColor: '#6588bf',
          shadowColor: '#427D9D',
        },
         }}
      />
    <Stack.Screen
        name="ListProduits"
        component={SelctedProduit}
        options={{ 
          headerTitle:'List des ventes',
        headerTitleStyle: {
          color: '#ebeced', 
        },
        headerRight: () => {
          const countelement=useSelector(countProduitsArchive);
          const navigation = useNavigation();
         return(
           <View style={{ marginRight: 20 }}>
             <View style={{ backgroundColor:'#b5656d',height:15,borderRadius:100 ,alignItems:'center' }}>
               <Text style={{ fontSize:10,color:'white',fontWeight:'900' }}>{countelement}</Text>
             </View>
             <TouchableOpacity
             onPress={()=>{navigation.navigate('Archive')}}>
               <Icon name='archive' size={25} type='font-awesome' color='white' />
             </TouchableOpacity>
           </View>
         )
       },
        headerStyle: {
          backgroundColor: '#6588bf',
          shadowColor: '#427D9D',
        },
         }}
      />
    <Stack.Screen
        name="JournalisationType"
        component={JournalisationParType}
        options={{ 
          headerTitle:'',
        headerTitleStyle: {
          color: 'white', 
        },
        // headerRight: () => (
        //   <View style={{ marginRight: 20 }}>
        //     <TouchableOpacity>
        //       <Icon name='user' size={30} type='font-awesome' color='white' />
        //     </TouchableOpacity>
        //   </View>
        // ),
        headerStyle: {
          backgroundColor: '#6588bf',
          shadowColor: '#427D9D',
        },
         }}
      />
      <Stack.Screen
        name="Methodes"
        component={Methodes}
        options={{ 
          headerTitle:'Method de payement',
        headerTitleStyle: {
          color: 'white', 
        },
        // headerRight: () => (
        //   <View style={{ marginRight: 20 }}>
        //     <TouchableOpacity>
        //       <Icon name='user' size={30} type='font-awesome' color='white' />
        //     </TouchableOpacity>
        //   </View>
        // ),
        headerStyle: {
          backgroundColor: '#6588bf',
          shadowColor: '#427D9D',
        },
         }}
      />
      <Stack.Screen
        name="Journalisation"
        component={Journalisation}
        options={{ 
          headerTitle:'Journalisation',
        headerTitleStyle: {
          color: 'white', 
        },
        // headerRight: () => (
        //   <View style={{ marginRight: 20 }}>
        //     <TouchableOpacity>
        //       <Icon name='user' size={30} type='font-awesome' color='white' />
        //     </TouchableOpacity>
        //   </View>
        // ),
        headerStyle: {
          backgroundColor: '#6588bf',
          shadowColor: '#427D9D',
        },
         }}
      />
      <Stack.Screen
        name="SigneUp"
        component={SigneUpScreen}
        options={{ 
          headerTitle:'Menu',
        headerTitleStyle: {
          color: 'white', 
        },
        // headerRight: () => (
        //   <View style={{ marginRight: 20 }}>
        //     <TouchableOpacity>
        //       <Icon name='user' size={30} type='font-awesome' color='white' />
        //     </TouchableOpacity>
        //   </View>
        // ),
        headerStyle: {
          backgroundColor: '#6588bf',
          shadowColor: '#427D9D',
        },
         }}
      />
     
      
        <Stack.Screen
        name="Categorie"
        component={Categorie}
        options={{ 
          headerTitle:'Categorie',
        headerTitleStyle: {
          color: '#ebeced', 
        },
        // headerRight: () => (
        //   <View style={{ marginRight: 20 }}>
        //     <TouchableOpacity>
        //       <Icon name='user' size={30} type='font-awesome' color='#ebeced' />
        //     </TouchableOpacity>
        //   </View>
        // ),
        headerStyle: {
          backgroundColor: '#6588bf',
          shadowColor: '#427D9D',
        },
         }}
      />
      
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ 
          headerTitle:'Menu',
        headerTitleStyle: {
          color: 'white', 
        },
        // headerRight: () => (
        //   <View style={{ marginRight: 20 }}>
        //     <TouchableOpacity>
        //       <Icon name='user' size={30} type='font-awesome' color='white' />
        //     </TouchableOpacity>
        //   </View>
        // ),
        headerStyle: {
          backgroundColor: '#6588bf',
          shadowColor: '#427D9D',
        },
         }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;