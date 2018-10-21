import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import data from '../../../data.json';

const ResultsTile = (props) => {
    return (
        <View>
            <Text>{props.title}</Text>
            <Text>{props.artist}</Text>
            <Text>{props.url}</Text>  
            <Image source={{uri: props.image}}
       style={{width: '30%', height: '30%'}} />
       </View>
    )
}

export default ResultsTile;