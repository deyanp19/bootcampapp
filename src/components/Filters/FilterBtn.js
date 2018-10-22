import React from 'react';
import { View, Button } from 'react-native';

const BtnStyle = {
    border: "1px black"
}
const FilterBtn = (props) => {
    return(
        <View>
            <Button
//   onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
  style={BtnStyle}
/>
            </View>
    )
}

export default FilterBtn;