import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import data from '../../../data.json';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ResultsTile  from './ResultsTile';

export default class Results extends React.Component {

    state = {
        data: data.data,
    }
    
   renderResultTiles() {

    return this.state.data.map(data => 
        
    <ResultsTile  
        key={data.name}
        name={data.name}
        location={(data.location).split(';')[0]}
        topics={(data.topics).split(',')[0]}
        /> 
        );
    }

    // componentWillMount(){
    //     console.log('received data: ' , this.state.data)
    // }

    render() {
        return (
            <View style ={{height: '100%'}}>
                <Header headerText='Bootcamps'/>
                    <ScrollView style={TileStyle}>

                        {this.renderResultTiles()}
                    </ScrollView>
                <Footer/>
            </View>
        )
    }
}


const TileStyle = {
    height: '100%',
}
