import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
// import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Section, Spinner } from '../Common/';
import RegisterButton from './RegisterButton';
import LoadingButton from './LoadingButton';


class Login extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }
    
    onButtonPress() {
        {Keyboard.dismiss()}
        const { email, password } = this.props;
        this.props.loginUser({ email, password});
    }

    renderError() {
        if (this.props.error) {
            return(
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
            )
        }
    }

    renderSpinner() {
        if (this.props.loading){
            return (<Spinner size="large"/>)}
        }

    render(){ 
        return(
            <View style ={{height: '100%'}}>
                <Header headerText='Bootcamp Base'/>

                <View style={styles.containerStyle}>
                    <Section>
                        <Text style={styles.textStyle}>  
                            Log In With Email
                        </Text>

                        <TextInput
                            placeholder="Email"
                            value={this.props.email}
                            onChangeText={this.onEmailChange.bind(this)}
                            style={styles.inputStyle}
                            underlineColorAndroid='transparent'
                            >
                        </TextInput>

                        <TextInput
                            placeholder="Password"
                            value={this.props.password}
                            onChangeText={this.onPasswordChange.bind(this)}
                            secureTextEntry
                            style={styles.inputStyle}
                            underlineColorAndroid='transparent'
                            >
                        </TextInput>


                    <RegisterButton
                        onPress={this.onButtonPress.bind(this)}>
                        Log In
                    </RegisterButton>

                    </Section>

                    <Section>
                        <Text style={styles.agreementStyle}>
                            Forgot your username or password? 
                        </Text>

                        <RegisterButton
                            onPress={() => Actions.register()}
                            >
                            Don't have an account? Click Here!
                        </RegisterButton>
                        
                        {this.renderError()}

                    </Section>

                    {this.renderSpinner()}

                </View>
                
                <Footer/>
            </View>


        ) 
    }

}

const styles = {
    containerStyle:{
        marginTop: '5%',
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
        fontSize: 18,
    },
    errorTextStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        loading: state.auth.loading,
        error: state.auth.error,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { 
    emailChanged, passwordChanged, loginUser 
})(Login);