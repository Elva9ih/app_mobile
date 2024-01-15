import React,{ useState }from 'react';
import { Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import {Icon} from 'react-native-elements'
const Search = () => {
    const [search, setSearch] = useState('');
    // const mycategorie = useSelector(state => state.categorie);
    const dispatch = useDispatch();
    // const searchFilter=(text)=>{
    //     if (text){
    //         const newData=myProducts.filter((item)=>{
    //             const itemData =item.name? item.name.toUpperCase():''.toUpperCase();
    //             const textData=text.toUpperCase();
    //             return itemData.indexOf(textData)>-1;
    //         });
    //         dispatch(deleteAllSearch());
    //         myProducts.forEach(item => {
    //             dispatch(addMySearchData(item));
    //         });
    //         dispatch(deleteAll());
    //         newData.forEach(item => {
    //             dispatch(addMyProducts(item));
    //         });
    //     }
    //     else{
    //         dispatch(deleteAll());
    //         myshearchdata.forEach(item => {
    //             dispatch(addMyProducts(item));
    //         });
    //     }
    // }
    // const handleSearch = (text) => {
    //     setSearch(text);
    //     searchFilter(text);
    //   };
    return (
  <View>
    <TextInput
      style={{ backgroundColor: 'white', height: 38, width: '80%', borderRadius: 10, margin: 20, padding: 1, paddingLeft: 38 }}
    //   value={search}
      placeholder='Search'
      underlineColorAndroid='transparent'
      // onChangeText={handleSearch}
    />
    <View style={{ right:160,bottom:48 }}>
        <Icon name='search' size={18} type='font-awesome' color='black'/>
    </View>

  </View>
  
    ); 
};

export default Search;