import React, { Component } from "react";
import { AppRegistry, TextInput } from 'react-native';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "type some shit"
        }
    }
    render() {

        return (
            <TextInput
                style={TextInputStyle}
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
            />
        );
    }
}

const TextInputStyle = {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    width: "60%",
    marginLeft: 80,
    marginRight: 80,
    backgroundColor: 'white'
}