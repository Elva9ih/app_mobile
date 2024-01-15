import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity, View } from 'react-native';
import {Icon} from 'react-native-elements'
import Home from '../screens/Home';
import SelctedProduit from '../screens/SelctedProduit'
import Categorie from '../screens/Categorie';
const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer >
    <Stack.Navigator >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ 
          headerTitle:'Home',
        headerTitleStyle: {
          color: 'white', 
        },
        headerRight: () => (
          <View style={{ marginRight: 20 }}>
            <TouchableOpacity>
              <Icon name='user' size={30} type='font-awesome' color='white' />
            </TouchableOpacity>
          </View>
        ),
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
          color: 'white', 
        },
        headerRight: () => (
          <View style={{ marginRight: 20 }}>
            <TouchableOpacity>
              <Icon name='user' size={30} type='font-awesome' color='white' />
            </TouchableOpacity>
          </View>
        ),
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
        headerRight: () => (
          <View style={{ marginRight: 40 }}>
            <TouchableOpacity>
              <Icon name='user' size={30} type='font-awesome' color='#ebeced' />
            </TouchableOpacity>
          </View>
        ),
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