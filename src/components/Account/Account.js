import React, { Component } from 'react';
import { View, Text, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, refresh } from '../../actions';
import Icon from 'react-native-vector-icons/FontAwesome';


import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Section } from '../Common/';

const edit = (<Icon name ="pencil-square-o" size={45} color="#FA8D62"/> );

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

                    <Text style={styles.textStyle}>  
                        My Profile
                    </Text>

                    {/* <Section> */}
                        <View style = {styles.sectionStyle}>
                            <TextInput
                                editable={false}
                                placeholder="First Name"
                                // value={this.props.first}
                                // onChangeText={this.onFirstChange.bind(this)}
                                style={styles.inputStyle}
                                >
                            </TextInput>

                            <TouchableOpacity 
                                style={styles.iconStyle}
                                // onPress={() => Actions.results()}
                                >
                                {edit}
                            </TouchableOpacity>

                        </View>
                        


                        {/* <TextInput
                            placeholder="Last Name"
                            // value={this.props.last}
                            // onChangeText={this.onLastChange.bind(this)}
                            style={styles.inputStyle}

                            >
                        </TextInput>


                        <TextInput
                            placeholder="Email"
                            // value={this.props.email}
                            // onChangeText={this.onEmailChange.bind(this)}
                            style={styles.inputStyle}
                            underlineColorAndroid='transparent'
                            >
                        </TextInput>

                        <TextInput
                            placeholder="Password"
                            // value={this.props.password}
                            // onChangeText={this.onPasswordChange.bind(this)}
                            secureTextEntry
                            style={styles.inputStyle}
                            underlineColorAndroid='transparent'
                            >
                        </TextInput> */}
                    {/* </Section> */}
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
    inputStyle:{
        backgroundColor: '#fff',
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        borderRadius: 5,
        fontSize: 18,
        flex: 8
    },
    iconStyle:{
        // flex: 1,
        // justifyContent: 'center'

    },
    sectionStyle:{
        flexDirection: 'row',
        // backgroundColor: 'black',
        justifyContent:'space-evenly',
        alignItems:'stretch',
        padding: 5,
        borderRadius: 5,
        width: '95%',
        alignSelf:'center',
        margin: 10
    },
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