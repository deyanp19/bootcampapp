import React from 'react';
import { Text, View } from 'react-native'

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>

    );

};
  

const styles = {
    viewStyle:{
        backgroundColor: '#2B616D',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 40,
        paddingBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        elevation: 1,
        marginBottom: 10,
        position: 'relative'
    },
    
    textStyle: {
        fontSize: 24,
        color: '#ffffff'
    }


};

export default Header;