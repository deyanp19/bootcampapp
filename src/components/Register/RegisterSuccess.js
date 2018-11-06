import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RegisterButton from './RegisterButton'

const RegisterSuccess = () => {
    return (
        <View style={{height: '100%'}}>
            <Header headerText='Bootcamp Base'/>
            
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>
                    You have successfully created an account!
                </Text>

                <Text style={styles.textStyle}>
                    Click the Button below to Log In
                </Text>

                <RegisterButton
                    onPress={() => Actions.login()}>
                    To Log In Page
                </RegisterButton>
            </View>

            <Footer/>
        </View>

    )
}

const styles = {
    containerStyle:{
        marginTop: '10%',
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '400',
        marginBottom: '5%',
    }

}

export default RegisterSuccess;