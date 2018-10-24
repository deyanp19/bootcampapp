import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import firebase from 'firebase';

import { Section, Input } from '../Common/';
import RegisterButton from './RegisterButton';

class Login extends Component {
    state = {
        email: "",
        password: "",
        error: "",
        loading: false,
        loggedIn: null
    };

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyARhVJr40Iz-dIAV5aOtaKD6lLi41ZxQAc",
            authDomain: "authentication-4be06.firebaseapp.com",
            databaseURL: "https://authentication-4be06.firebaseio.com",
            projectId: "authentication-4be06",
            storageBucket: "authentication-4be06.appspot.com",
            messagingSenderId: "653745336722"
          });

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
                        Sign In With Email
                    </Text>

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

                    <Text style={styles.errorTextStyle}>
                        {this.state.error}
                    </Text>

                    <RegisterButton
                        onPress={this.onButtonPress.bind(this)}
                        >
                        Log In
                    </RegisterButton>

                </Section>

                <Section>
                    <Text style={styles.agreementStyle}>
                        Forgot your username or password?
                    </Text>

                    <RegisterButton>
                        Don't have an account? Click Here!
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
    },
    errorTextStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default Login;