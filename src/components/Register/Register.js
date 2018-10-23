import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Section from '../Common/Section';
import RegisterButton from './RegisterButton';

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

                <RegisterButton>
                    Sign Up
                </RegisterButton>

            </Section>

            <Section>
                <Text style={styles.agreementStyle}>
                    By signing up, you agree with the Terms of Service and Privacy Policy
                </Text>

                <RegisterButton>
                    Already have an account? Click Here!
                </RegisterButton>
            </Section>
           

        </View>


    ) 

}

const styles = {
    containerStyle:{
        marginTop: '15%'
    },
    textStyle:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '400',
        marginBottom: '5%'
    },
    agreementStyle:{
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '400',
        marginBottom: '5%',
        marginLeft: '10%',
        marginRight: '10%'
    },
    inputStyle:{
        backgroundColor: '#fff',
        padding: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        borderRadius: 5,
        fontSize: 16
    }
}

export default Register;