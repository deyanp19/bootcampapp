import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import data from '../../../data.json';
import ResultsTile  from './ResultsTile';

export default class Results extends React.Component {

    state= {
        data: data.data
    }
    
   renderResultTiles() {
    return this.state.data.map(data => 
    <ResultsTile  
        key={data.title}
        title={data.title}
        artist={data.artist}
        url={data.url}
        /> 
        );
    }

    componentWillMount(){
        console.log('received data: ' , this.state.data)
    }

    render() {
        return (
            <ScrollView style={TileStyle}>
                {this.renderResultTiles()}
            </ScrollView>
        )
    }
}


const TileStyle = {
    height: '100%',
}
