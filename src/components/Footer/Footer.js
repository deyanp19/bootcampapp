import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const search = (<Icon name="search" size={25} color="#FA8D62" />);
const profile = (<Icon name="user-circle" size={25} color="#FA8D62" />);
const message = (<Icon name="envelope" size={25} color="#FA8D62" />);
const more = (<Icon name="bookmark" size={25} color="#FA8D62" />);



const Footer = (props) => {
    const { textStyle, viewStyle } = styles;
    
    return (
        <View style={viewStyle}>
            <TouchableOpacity>
                <View style={styles.iconStyle}>
                    {search}
                </View>
                <Text style={styles.textStyle}>Search</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.iconStyle}>
                    {profile}
                </View>
                <Text style={styles.textStyle}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.iconStyle}>
                    {message}
                </View>
                <Text style={styles.textStyle}>Messages</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.iconStyle}>
                    {more}
                </View>
                <Text style={styles.textStyle}>More</Text>
            </TouchableOpacity>
        </View>

    );

};
  

const styles = {
    viewStyle:{
        backgroundColor: '#ffffff',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        minHeight: 40,
        minWidth: '100%',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10
    },
    iconStyle:{
        alignSelf:'center'
    },
    textStyle: {
        fontSize: 12,
        color: '#000',
        alignSelf: 'center'
    }


};


export default Footer;