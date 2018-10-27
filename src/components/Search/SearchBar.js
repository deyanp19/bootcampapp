import React, { Component } from "react";
import { AppRegistry, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Button from '../Button/Button';
const glass = (<Icon name="search" size={25} color="#FA8D62" />)

export default class SearchBar extends Component {
    state = {
        search: "",
    };


    render() {

        return (
            <View style = {styles.searchSectionStyle}>
                <TouchableOpacity style={styles.iconStyle}>
                    {glass}
                </TouchableOpacity>

                <TextInput
                    underlineColorAndroid='transparent'
                    style={styles.searchBarStyle}
                    placeholder="Coding Track, Bootcamp Name"
                    value={this.state.search}
                    onChangeText={search => this.setState({ search })}

                    >
                </TextInput>
            </View>
        );
    }
}

const styles = {
    searchSectionStyle:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent:'flex-start',
        alignItems:'stretch',
        padding: 5,
        borderRadius: 25,
        width: '90%',
        alignSelf:'center',
        margin: 10
    },
    iconStyle:{
        alignSelf: 'center', 
        paddingLeft: 15,
        marginRight: 10

    },
    searchBarStyle:{
        height: 30,
        fontSize: 16,
        width: '100%',
        margin: 5,
        alignItems: 'stretch'
    }
}


