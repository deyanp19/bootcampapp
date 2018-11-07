import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';

import { Section, Input } from '../Common/';
import RegisterButton from './RegisterButton';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { 
    emailCreate,
    passwordCreate,
    firstNameChanged, 
    lastNameChanged,
    createUser,
    refresh
    
} from '../../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Register extends Component {

    componentWillMount() {
        this.props.refresh();
    }

    onFirstChange(text){
        this.props.firstNameChanged(text);
    }

    onLastChange(text){
        this.props.lastNameChanged(text);
    }


    onEmailCreate(text) {
        this.props.emailCreate(text)
    }

    onPasswordCreate(text) {
        this.props.passwordCreate(text)
    }

    onButtonPress() {
        {Keyboard.dismiss()}
        const { email, password } = this.props;
        this.props.createUser({ email, password})
    }

    render(){ 
        return(
            <View style ={{height: '100%'}}>
                <Header headerText='Create an Account'/>

                <View style={styles.containerStyle}>
                    <Section>
                        <TextInput
                            placeholder="First Name"
                            value={this.props.first}
                            onChangeText={this.onFirstChange.bind(this)}
                            style={styles.inputStyle}

                            >
                        </TextInput>

                        <TextInput
                            placeholder="Last Name"
                            value={this.props.last}
                            onChangeText={this.onLastChange.bind(this)}
                            style={styles.inputStyle}

                            >
                        </TextInput>

                        <TextInput
                            placeholder="Email"
                            value={this.props.email}
                            onChangeText={this.onEmailCreate.bind(this)}
                            style={styles.inputStyle}

                            >
                        </TextInput>

                        <TextInput
                            placeholder="Password"
                            value={this.props.password}
                            onChangeText={this.onPasswordCreate.bind(this)}
                            secureTextEntry
                            style={styles.inputStyle}

                            >
                        </TextInput>

                        <Text style={styles.errorTextStyle}>
                            {this.props.error}
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
                <Footer/>
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

const mapStateToProps = state => {
    return {
        email: state.register.email,
        password: state.register.password,
        first: state.register.first,
        last: state.register.last,
        loading: state.register.loading,
        error: state.register.error,
        user: state.register.user
    }
}

export default connect(mapStateToProps, { 
    emailCreate, passwordCreate, 
    firstNameChanged, lastNameChanged, 
    createUser, refresh
})(Register);