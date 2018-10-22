import React from 'react';
import { View, Text } from 'react-native';

const ResultsSection = (props) => {

    return(
        <View style={styles.sectionStyle}>
            {props.children}

        </View>
    )

}


export default ResultsSection;

const styles = {
    sectionStyle: {
        justifyContent: 'space-between',
        // backgroundColor: '#f3e5f5',
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5
    }
}