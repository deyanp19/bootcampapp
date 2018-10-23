import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const RegisterButton = ({onPress, children}) => {

    const { textStyle } = styles;

    return(
        <TouchableOpacity
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
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 5,
        
    }
}

export default Button;