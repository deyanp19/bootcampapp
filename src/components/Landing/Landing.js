import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Section } from '../Common';
import SearchBar from '../Search/SearchBar';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const fullstack = (<Icon name="houzz" size={50} color="#FA8D62" />);
const uiux = (<Icon name="support" size={50} color="#FA8D62" />);
const datasci = (<Icon name="database" size={50} color="#FA8D62" />);
const part = (<Icon name="calendar-check-o" size={50} color="#FA8D62" />);
const full = (<Icon name="fax" size={50} color="#FA8D62" />);
const appre = (<Icon name="university" size={50} color="#FA8D62" />);



const Landing = () => {
    return(
        <View style={{height: '100%'}}>
            <Header headerText='Welcome to Bootcamp Base'/>
            
            <View style={styles.containerStyle}>
                <Text style={styles.headingStyle}>Find the Right Bootcamp</Text>
                <SearchBar/>
                <View style={styles.iconSectionStyle}>
                    <TouchableOpacity style={styles.iconBoxStyle}>
                        <View style={styles.iconStyle}>
                            {fullstack}
                        </View>
                        <Text style={styles.textStyle}>Full Stack</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.iconStyle}>
                            {uiux}
                        </View>
                        <Text style={styles.textStyle}>UX/UI</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.iconStyle}>
                            {datasci}
                        </View>
                        <Text style={styles.textStyle}>Data Sci.</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.iconSectionStyle}>
                    <TouchableOpacity style={styles.iconBoxStyle}>
                        <View style={styles.iconStyle}>
                            {part}
                        </View>
                        <Text style={styles.textStyle}>Part Time</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.iconStyle}>
                            {full}
                        </View>
                        <Text style={styles.textStyle}>Full Time</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.iconStyle}>
                            {appre}
                        </View>
                        <Text style={styles.textStyle}>Apprentice</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <Footer/>
        </View>


    )

}


const styles = {
    containerStyle:{
        marginTop: '8%'
    },
    headingStyle:{
        alignSelf: 'center',
        fontSize: 18,
        marginBottom: '5%'
    },
    iconSectionStyle:{
        marginTop: '5%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        width: '85%',
        alignSelf:'center',

    },
    textStyle:{
        alignSelf:'center',
        fontSize: 16
    },
    iconStyle:{
        // borderWidth: 1,
        // borderColor: '#000',
        paddingTop: 30,
        paddingRight: 30,
        paddingLeft: 30,
        paddingBottom: 5
        // backgroundColor: '#fff',
    }

}

export default Landing;