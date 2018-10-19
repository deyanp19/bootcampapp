import React, { Component} from "react";
import { AppRegistry, TextInput } from 'react-native';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "type some shit"
        }
    }
render() {

    return(
        <TextInput
        style={{height: 40, borderColor: 'black', borderWidth: 1, width: "60%"}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
}
}
