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
                    style={ ResultCommentBoxStyle }
                    multiline = {true}
                    numberOfLines = {4}
                     />
            </View>
        );
    }
}

const ResultCommentBoxStyle = {
    backgroundColor: '#F1F3F4',
        borderColor: '#F1F3F4',
    borderWidth: 1,
    borderRadius: 5,
    height: 150
    
}