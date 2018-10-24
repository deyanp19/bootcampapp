import React, { Component } from "react";
import { AppRegistry, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Button from '../Button/Button';
const glass = (<Icon name="search" size={20} color="#FA8D62" />)

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
    }
    render() {

        return (
            <View style={{ flexDirection: 'row' }}>
                {glass}
                <TextInput
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="Search"
                    style={{ paddingLeft: 10 }}
                >

                </TextInput>

            </View>
        );
    }
}


