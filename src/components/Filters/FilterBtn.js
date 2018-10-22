import React from 'react';
import { View, Button } from 'react-native';

const BtnStyle = {
//  backgroundColor: "green",
borderRadius: 4,
borderWidth: 0.5,
borderColor: '#d6d7da',
}
const FilterBtn = (props) => {
    return(
        <View
        style={BtnStyle}>
            <Button
//   onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
  
/>
            </View>
    )
}

export default FilterBtn;