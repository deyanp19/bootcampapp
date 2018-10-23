import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const RegisterButton = ({onPress, children}) => {

    const { textStyle, buttonStyle } = styles;

    return(
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}>

            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>


    )
}

const styles = {
    textStyle:{
        alignSelf: 'center',
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 5,
        
    },
    buttonStyle:{
        backgroundColor: '#FA8D62',
        padding: 15,
        margin: 15,
        borderRadius: 5,
        elevation: 1,
        fontSize: 14
    },
}

export default RegisterButton;