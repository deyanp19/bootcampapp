import React from 'react';
import { StyleSheet, Text, View, Image , Linking} from 'react-native';
// import data from '../../../data.json';
import Button from '../Button/Button';
import ResultsSection from './ResultsSection';

const ResultsTile = (props) => {
    return (
        <View style={styles.resultsTileStyle}>
            <ResultsSection>
                <Text style={styles.textStyle}>{props.title}</Text>
                <Text style={styles.textStyle}>{props.title}</Text>

            </ResultsSection>

            <ResultsSection>
                <Text style={styles.textStyle}>{props.artist}</Text>
            </ResultsSection>

            <ResultsSection>
                <Text style={styles.textStyle}>{props.url}</Text>
            </ResultsSection>

            <ResultsSection>
                <Text style={styles.textStyle}>$15,000</Text>

                <Button 
                    onPress={() => Linking.openURL(props.url)}>
                    View Bootcamp Page
                </Button>            
            </ResultsSection>  
                
                               
       </View>
    )
}


const styles = {
    resultsTileStyle:{
        backgroundColor: "#ffffff",
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 10,
        elevation: 1,
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 8,
        flex: 1,
        flexDirection: 'column'
    },
    textStyle:{
        fontSize: 16,
        justifyContent: 'space-evenly',

    }
}

export default ResultsTile;