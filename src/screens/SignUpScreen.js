import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export const SignUpScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Sign Up</Text>
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
