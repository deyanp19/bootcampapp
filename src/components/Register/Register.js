import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Section from '../Common/Section';
import Button from '../Button/Button';

const Register = () => {

    return(
        <View style={styles.containerStyle}>
            <Section>
                <Text style={styles.textStyle}>
                    Create An Account
                </Text>
                <TextInput 
                    style={styles.inputStyle}>
                    First Name
                </TextInput>

                <TextInput 
                    style={styles.inputStyle}>
                    Last Name
                </TextInput>

                <TextInput 
                    style={styles.inputStyle}>
                    Email
                </TextInput>

                <TextInput 
                    style={styles.inputStyle}>
                    Password
                </TextInput>

                <Button style={styles.buttonStyle}>
                    Sign Up
                </Button>

            </Section>
           

        </View>


    ) 

}

const styles = {
    containerStyle:{
        marginTop: '15%'
    },
    buttonStyle:{
        backgroundColor: '#000',
        // color: '#007aff',
        padding: 10
    },
    textStyle:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '400',
        marginBottom: '5%'
    },
    inputStyle:{
        backgroundColor: '#fff',
        padding: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        borderRadius: 5
    }
}

export default Register;