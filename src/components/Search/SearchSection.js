import React from 'react';
import { View, Text, Button } from 'react-native';
import SearchBar from './SearchBar';


const SearchSection = (props) => {

    return(
        <View style={{flexDirection: 'row'}}>
<<<<<<< HEAD
            <View style={TextInputStyle}>
                {props.children}
                <SearchBar />
=======
        <View style={TextInputStyle}>
            {props.children}
        <SearchBar />
        </View>
>>>>>>> dev
            </View>
        </View>
    )

}
const TextInputStyle = {
    
    height: 40,
    // borderColor: 'black',
    // borderWidth: 1,
    width: "100%",
    // marginLeft: 15,
    // marginRight: 15,
    backgroundColor: 'white',
    // borderRadius: 5,
    paddingLeft: 15,
    marginBottom: 20,
    // marginTop: 10
    justifyContent: 'center'
}


export default SearchSection;