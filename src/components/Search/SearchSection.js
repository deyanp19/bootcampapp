import React from 'react';
import { View, Text, Button } from 'react-native';
import SearchBar from './SearchBar';
import Icon from'react-native-vector-icons/FontAwesome';
const glass = (<Icon name ="search" size={20} color="#FA8D62"/>)

const SearchSection = (props) => {

    return(
        <View style={{flexDirection: 'row'}}>
            <View style={TextInputStyle}>
                {props.children}
                <SearchBar />
            </View>
        </View>
    )

}
const TextInputStyle = {
    
    height: 40,
    // borderColor: 'black',
    // borderWidth: 1,
    width: "70%",
    marginLeft: 15,
    // marginRight: 80,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 15,
    marginBottom: 20,
    marginTop: 10
}


export default SearchSection;