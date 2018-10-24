import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({value, onChangeText, placeholder, secureTextEntry}) => {

const { inputStyle, containerStyle} = styles;
    return(
        <View style={containerStyle}>
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                
            />

        </View>

    )
}


const styles = {
    inputStyle:{
        color:'#000',
        paddingLeft: 5,
        paddingRight: 5,
        lineHeight: 23,
        fontSize: 18,
        paddingBottom: 7,
        flex: 2
    },
    containerStyle:{
        backgroundColor: '#fff',
        paddingTop: 15,
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    }
}
export { Input };