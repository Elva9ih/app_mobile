import { View, TextInput, Text, StyleSheet} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { allproduits } from '../slices/ProduitSlice';
import Search from '../components/Search';
import { Icon } from 'react-native-elements';


const Home = () => {
    const myProducts = useSelector(allproduits);
  return (
    <View style={{ flex:1 }}>
        <View style={{ flexDirection:'column',justifyContent:'center' }}>
          <Search/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    paddingBottom: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 3,
    borderRadius: 999, // Use a large value for a rounded shape
    borderWidth: 1,
    borderColor: 'gray',
  },
  input: {
    marginLeft: 2,
    flex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 2,
    borderLeftWidth: 2,
    paddingLeft: 2,
    borderLeftColor: 'gray',
  },
  locationText: {
    color: 'gray',
  },
  filterButton: {
    padding: 3,
    borderRadius: 999,
  },
});
export default Home