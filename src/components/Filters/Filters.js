import React, { Component } from "react";
import  { View } from "react-native";
import FilterBtn from "./FilterBtn";

export default class Filters extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         filters: filters
    //     }
    // }
    render () {  
        return (
            <View style>
                <FilterBtn/>
            </View>
        );
    }
}