import React from 'react';
import { View, Text, Button } from 'react-native';
import SearchBar from './SearchBar';


const SearchSection = (props) => {

    return(
        <View >
                {props.children}
                <SearchBar />
        </View>
    )

}
const styles = {
    searchSectionStyle:{
        height: 40,
        width: "100%",
        backgroundColor: 'white',
        borderRadius: 5,
        paddingLeft: 15,
        marginBottom: 20,
        justifyContent: 'center'
    }
    
}


export default SearchSection;