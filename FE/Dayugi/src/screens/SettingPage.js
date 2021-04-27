import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SettingPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>설정 페이지</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SettingPage