import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';
import Cart from '../screens/cart';
import WishList from '../screens/wishList';
import OrderSuccess from '../screens/orderSuccess';
import SearchScreen from '../screens/search';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="WishList" component={WishList} />
        <Stack.Screen name="OrderSuccess" component={OrderSuccess} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
