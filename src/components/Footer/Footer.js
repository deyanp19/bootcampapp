import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';


const search = (<Icon name="search" size={25} color="#ffffff" />);
const profile = (<Icon name="user-circle" size={25} color="#ffffff" />);
const heart = (<Icon name="heart" size={25} color="#ffffff" />);
// const more = (<Icon name="bookmark" size={25} color="#ffffff" />);



const Footer = (props) => {
    const { textStyle, viewStyle } = styles;
    
    return (
        <View style={viewStyle}>
            <TouchableOpacity
                onPress={() => Actions.landing()}
                >
                <View style={styles.iconStyle}>
                    {search}
                </View>
                <Text style={styles.textStyle}>Search</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => Actions.account()}>
                <View style={styles.iconStyle}>
                    {heart}
                </View>
                <Text style={styles.textStyle}>Favorites</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => Actions.login()}>
                <View style={styles.iconStyle}>
                    {profile}
                </View>
                <Text style={styles.textStyle}>Account</Text>
            </TouchableOpacity>



            {/* <TouchableOpacity
                onPress = {() => Actions.register()}
                >
                <View style={styles.iconStyle}>
                    {more}
                </View>
                <Text style={styles.textStyle}>More</Text>
            </TouchableOpacity> */}
        </View>

    );

};
  

const styles = {
    viewStyle:{
        backgroundColor: '#fA8D62',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        minHeight: 40,
        minWidth: '100%',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 25
    },
    iconStyle:{
        alignSelf:'center'
    },
    textStyle: {
        fontSize: 12,
        color: '#ffffff',
        alignSelf: 'center'
    }


};


export default Footer;