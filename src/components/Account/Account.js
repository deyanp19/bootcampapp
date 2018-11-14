import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, TextInput, Keyboard, TouchableOpacity, } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { connect } from 'react-redux';
import { userAccountFetch } from '../../actions';


const edit = (<Icon name ="pencil-square-o" size={55} color="#FA8D62"/> );

class Account extends Component {
 
    fetchData() {
        this.props.userAccountFetch();
    }

    render(){ 

    

        return(
            <View style ={{height: '100%'}}>
                {/* <Header headerText='Bootcamp Base'/> */}
                <View style={styles.containerStyle}>

                    <View style = {styles.sectionStyle}>
                        <Text style={styles.textStyle}>  
                            Account Setting
                        </Text>
                        <TouchableOpacity
                            onPress={this.fetchData.bind(this)}
                            style={styles.editButton}
                            >
                            {edit}
                        </TouchableOpacity>
                    </View>

                        <View style = {styles.sectionStyle}>
                            <TextInput
                                editable={false}
                                placeholder="First Name"
                                value={this.props.first}
                                // onChangeText={this.onFirstChange.bind(this)}
                                style={styles.inputStyle}
                                >
                            </TextInput>

                   
                        </View>

                        <View style = {styles.sectionStyle}>
                            <TextInput
                                editable={false}
                                placeholder="Last Name"
                                value={this.props.userFirst}
                                // onChangeText={this.onFirstChange.bind(this)}
                                style={styles.inputStyle}
                                >
                            </TextInput>
                        </View>

                        <View style = {styles.sectionStyle}>
                            <TextInput
                                editable={false}
                                placeholder="Email"
                                value={this.props.userEmail}
                                style={styles.inputStyle}
                                >
                            </TextInput>
                        </View>

                        <View style = {styles.sectionStyle}>
                            <TextInput
                                editable={false}
                                placeholder="Password"
                                value={this.props.first}
                                // onChangeText={this.onFirstChange.bind(this)}
                                style={styles.inputStyle}
                                secureTextEntry
                                >
                            </TextInput>
                        </View>                        
                   </View>
                {/* <Footer/> */}
            </View>
        ) 
    }

}

const styles = {
    containerStyle:{
        marginTop: '5%',
    },
    textStyle:{
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '400',
        marginBottom: '5%',
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
    sectionStyle:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems:'stretch',
        padding: 5,
        borderRadius: 5,
        width: '95%',
        alignSelf:'center',
    },
    editButton:{
        position: 'absolute',
        bottom: 5,
        right: 0,
    }
}


export default connect(null, { userAccountFetch })(Account);