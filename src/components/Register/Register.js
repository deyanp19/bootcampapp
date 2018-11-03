import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import firebase from 'firebase';

import { Section, Input } from '../Common/';
import RegisterButton from './RegisterButton';
import { Actions } from 'react-native-router-flux';

class Register extends Component {
    state = {
        first: "",
        last: "",
        email: "",
        password: "",
        error: "",
        loading: false,
        loggedIn: null
    };

    componentWillMount(){
        if(!firebase.apps.length){
            firebase.initializeApp({
                apiKey: "AIzaSyARhVJr40Iz-dIAV5aOtaKD6lLi41ZxQAc",
                authDomain: "authentication-4be06.firebaseapp.com",
                databaseURL: "https://authentication-4be06.firebaseio.com",
                projectId: "authentication-4be06",
                storageBucket: "authentication-4be06.appspot.com",
                messagingSenderId: "653745336722"
              });
        }
        

          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }

          });
    }


    onButtonPress(){
        const { email, password } = this.state
        this.setState({ error: "", loading: true });

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onCreateAccountSuccess.bind(this))
        .catch(this.onCreateAccountFail.bind(this));
    }

    onCreateAccountFail(){
        this.setState({ error: 'Account Creation Failed', loading:false })                   
    }

    onCreateAccountSuccess(){
        this.setState({ 
            first: "",
            last: "",
            email:"", 
            password:"", 
            error: "Account Created", 
            loading: false

            // redirect to login page
        });



    }
    render(){ 
        return(
            <View style={styles.containerStyle}>
                <Section>
                    <Text style={styles.textStyle}> 
                        Create An Account
                    </Text>

                    <TextInput
                        placeholder="First Name"
                        value={this.state.first}
                        onChangeText={first => this.setState({ first })}
                        style={styles.inputStyle}

                        >
                    </TextInput>

                    <TextInput
                        placeholder="Last Name"
                        value={this.state.last}
                        onChangeText={last => this.setState({ last })}
                        style={styles.inputStyle}

                        >
                    </TextInput>

                    <TextInput
                        placeholder="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        style={styles.inputStyle}

                        >
                    </TextInput>

                    <TextInput
                        placeholder="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry
                        style={styles.inputStyle}

                        >
                    </TextInput>

                    <Text style={styles.errorTextStyle}>
                        {this.state.error}
                    </Text>

                    <RegisterButton
                        onPress={this.onButtonPress.bind(this)}
                        >
                        Sign Up
                    </RegisterButton>

                </Section>

                <Section>
                    <Text style={styles.agreementStyle}>
                        By signing up, you agree with the Terms of Service and Privacy Policy
                    </Text>

                    <RegisterButton
                        onPress={() => Actions.login()}
                        >
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
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        borderRadius: 5,
        fontSize: 18
    },
    errorTextStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default Register;