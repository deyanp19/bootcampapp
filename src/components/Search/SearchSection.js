import React from 'react';
import { View, Text } from 'react-native';
import SearchBar from './SearchBar';


const SearchSection = (props) => {

    return(
        <View>
            {props.children}
        <SearchBar/>
        </View>
    )

}


export default SearchSection;