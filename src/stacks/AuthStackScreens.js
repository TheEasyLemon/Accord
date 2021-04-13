import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import { SignInScreen } from '../screens/SignInScreen.js'
import { SignUpScreen } from '../screens/SignUpScreen.js'

export const AuthStackScreens = () => {
  const AuthStack = createStackNavigator()
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
}
