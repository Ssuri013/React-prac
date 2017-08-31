import React from 'react';
import { Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.viewStyle} alignItems='center' >
     <Text style={styles.textStyle}>{this.props.headerText}</Text>
     </View>
   );
  }
}


const styles = {
  viewStyle: {
  backgroundColor: '#F8F8F8',
  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.2,
  elevation: 2,
  position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
