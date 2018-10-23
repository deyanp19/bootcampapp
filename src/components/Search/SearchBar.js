import React, { Component } from "react";
import { AppRegistry, TextInput, View } from 'react-native';

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
                
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}>
            </TextInput>

            </View>
        );
    }
}


