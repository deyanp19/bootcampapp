import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

export default class ResultCommentBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    render() {

        return (
            <View>
                <TextInput
                    onChange={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder='Leave a comment'
                    style={ ResultCommentBoxStyle } />
            </View>
        );
    }
}

const ResultCommentBoxStyle = {
        borderColor: 'black',
    borderWidth: 1,
}