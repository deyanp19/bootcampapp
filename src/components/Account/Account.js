import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, refresh } from '../../actions';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Section, Spinner } from '../Common/';


class Account extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }
    

    render(){ 
        return(
            <View style ={{height: '100%'}}>
                <Header headerText='Account Settings'/>

                <View style={styles.containerStyle}>
                    <Section>
        

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
                    </Section>
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
    },
    sectionStyle:{
        marginTop: 20,
        padding: 10,
        height: 30,
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
    emailChanged, passwordChanged, loginUser, refresh 
})(Account);