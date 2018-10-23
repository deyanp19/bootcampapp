import React, { Component } from "react";
import { AppRegistry, TextInput, View } from 'react-native';
import Icon from'react-native-vector-icons/FontAwesome';
import Button from '../Button/Button';

const glass = (<Icon name = "search" size={30} color="#FA8D62" />);

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "type some shit"
        }
    }
    render() {

        return (
            <View>
            <TextInput
                style={TextInputStyle}
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}>
            </TextInput>

            </View>
        );
    }
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