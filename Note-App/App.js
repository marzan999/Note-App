import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Create from './src/screens/create';
import Update from './src/screens/update';
import Login from './src/screens/login';
import Signup from './src/screens/signup';
import React from 'react';

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

const Stack = createNativeStackNavigator();

export default function App() {

  const [user, setUser] = React.useState(false)

  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        {
          user ? (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Create" component={Create} />
              <Stack.Screen name="Update" component={Update} />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
              <Stack.Screen name="Signup" component={Signup} />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
