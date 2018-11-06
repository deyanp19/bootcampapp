import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RegisterButton from './RegisterButton'

const LoginSuccess = () => {
    return (
        <View style={{height: '100%'}}>
            <Header headerText='Bootcamp Base'/>
            
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>
                    You have successfully logged in!
                </Text>

                <RegisterButton
                    onPress={() => Actions.landing()}>
                    Back to Home
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
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '400',
        marginBottom: '5%',
    }

}

export default LoginSuccess;