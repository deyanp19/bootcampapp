import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import data from '../../../data.json';
import ResultsTile  from './ResultsTile';




const TileStyle = {
    height: '30%',
    width: '80%',
    backgroundColor: '#f8f8f8'
}

export default class Results extends React.Component {
    render() {
        return (
            <View style={TileStyle}>
                <ResultsTile  
                    title={data.data[0].title}
                    artist={data.data[0].artist}
                    url={data.data[0].url}
                    image={data.data[0].thumbnail_image}
                />
            </View>
        )
    }
}



