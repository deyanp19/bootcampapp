import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Section, Input } from '../Common/';
import RegisterButton from './RegisterButton';

class Register extends Component {
    state = {
        first: "",
        last: "",
        email: "",
        password: "",
        error: "",
        loading: false,
    };

    render(){ 
        return(
            <View style={styles.containerStyle}>
                <Section>
                    <Text style={styles.textStyle}> 
                        Create An Account
                    </Text>

                    <Input
                        placeholder="First Name"
                        value={this.state.first}
                        onChangeText={first => this.setState({ first })}

                        >
                    </Input>

                    <Input
                        placeholder="Last Name"
                        value={this.state.last}
                        onChangeText={last => this.setState({ last })}

                        >
                    </Input>

                    <Input
                        placeholder="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        >
                    </Input>

                    <Input
                        placeholder="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry
                        >
                    </Input>

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

}

const styles = {
    containerStyle:{
        marginTop: '5%'
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