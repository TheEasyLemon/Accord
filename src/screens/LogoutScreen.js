import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

export const LogoutScreen = () => {
    return (
        <View style={styles.container}>
            <Icon name='hands'
                  type='font-awesome-5'></Icon>
            <Text>Subway</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFAEC0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
