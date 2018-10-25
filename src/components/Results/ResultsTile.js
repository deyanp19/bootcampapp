import React from 'react';
import { StyleSheet, Text, View, Image , Linking} from 'react-native';
// import data from '../../../data.json';
import Button from '../Button/Button';
import ResultsSection from './ResultsSection';
import Icon from'react-native-vector-icons/FontAwesome';
const star = (<Icon name ="star" size={20} color="#FA8D62"/>)
const comment = (<Icon name ="comment" size={20} color="#FA8D62"/>)


const ResultsTile = (props) => {
    return (
        <View style={styles.resultsTileStyle}>
            <ResultsSection>
                <Text style={styles.textStyle}>{props.name}</Text>
                <Text style={styles.textStyle}>{props.location}</Text>

            </ResultsSection>

            <ResultsSection>
                <Text style={styles.textStyle}>{props.topics}</Text>
            </ResultsSection>

            {/* <ResultsSection>
                <Text style={styles.textStyle}>{props.url}</Text>
            </ResultsSection> */}

            <ResultsSection>
                <Text style={styles.textStyle}>$15,000</Text>

                {/* <Button 
                    onPress={() => Linking.openURL(props.url)}>
                    View Bootcamp Page
                </Button>         */}
                <ResultsSection>
                    <Button 
                        onPress={() => Linking.openURL(props.url)}>
                        View Bootcamp Page
                    </Button>  

                    <Button>
                        {comment} 
                    </Button> 

                    <Button>
                        {star}
                    </Button> 
                </ResultsSection>
     
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