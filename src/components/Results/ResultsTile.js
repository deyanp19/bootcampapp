import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Linking, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';
// import data from '../../../data.json';
import Button from '../Button/Button';
import ResultsSection from './ResultsSection';
import Icon from 'react-native-vector-icons/FontAwesome';
import ResultsCommentBox from './ResultsCommentBox';

const star = (<Icon name="star" size={20} color="#FA8D62" />)
const comment = (<Icon name="comment" size={20} color="#FA8D62" />)
const browser = (<Icon name="file" size={20} />)


export default class ResultsTile extends Component {
    constructor()
    {
        super();
 
        this.state = { 
            // onLayoutHeight: 0,
            modifiedHeight: 0,
            expanded: false 
        }
 
        if( Platform.OS === 'android' )
        {
          UIManager.setLayoutAnimationEnabledExperimental( true )
        }
    }
 
    changeLayout = () =>
    {
        LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );
 
        if( this.state.expanded === false )
            this.setState({ modifiedHeight: 100, expanded: true });
        else
            this.setState({ modifiedHeight: 0, expanded: false });
    }
 
    getViewHeight( height )
    {
        this.setState({ onLayoutHeight: height });
    }
    
    render() {


        return (
            <View style={styles.resultsTileStyle}>
            <TouchableOpacity activeOpacity = { 0.8 } onPress = { this.changeLayout }>
                <ResultsSection>
                    <Text style={styles.textStyle}>{this.props.name}</Text>
                    <Text style={styles.textStyle}>{this.props.location}</Text>

                </ResultsSection>

                <ResultsSection>
                    <Text style={styles.textStyle}>{this.props.topics}</Text>
                </ResultsSection>

                {/* <ResultsSection>
                <Text style={styles.textStyle}>{this.props.url}</Text>
            </ResultsSection> */}

                <ResultsSection>
                    <Text style={styles.textStyle}>$15,000</Text>

                    {/* <Button 
                    onPress={() => Linking.openURL(this.props.url)}>
                    View Bootcamp Page
                </Button>         */}
                    <ResultsSection>
                        {/* <Button 
                        onPress={() => Linking.openURL(this.props.url)}>
                        View Bootcamp Page
                    </Button>   */}

                        {/* <Button>
                        {comment} 
                    </Button>  */}

                        <Button>
                            {browser}
                        </Button>
                        <Button>
                            {star}
                        </Button>
                    </ResultsSection>

                </ResultsSection>

            </TouchableOpacity>

                                <View style = {{ height: this.state.modifiedHeight, overflow: 'hidden' }}>
                        <Text style = { styles.text } onLayout = {( event ) => this.getViewHeight( event.nativeEvent.layout.height )}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                            containing Lorem Ipsum passages, and more recently with desktop publishing software 
                            like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <ResultsCommentBox/>
                        </View>
            </View>
        )
    }
}

const styles = {
    resultsTileStyle: {
        backgroundColor: "#ffffff",
        marginLeft: 12,
        marginRight: 12,
        marginBottom: 10,
        elevation: 1,
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 8,
        flex: 1,
        flexDirection: 'column'
    },
    textStyle: {
        fontSize: 16,
        justifyContent: 'space-evenly',

    }
}

