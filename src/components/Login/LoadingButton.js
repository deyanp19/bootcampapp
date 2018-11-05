import React from 'react';
import {  TouchableOpacity } from 'react-native';

const LoadingButton = ({onPress, children}) => {

    const { buttonStyle } = styles;

    return(
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle:{
        backgroundColor: '#FA8D62',
        padding: 15,
        margin: 15,
        borderRadius: 5,
        elevation: 1,
    },
}

export default LoadingButton;