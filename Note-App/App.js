import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Create from './src/screens/create';
import Update from './src/screens/update';
import Login from './src/screens/login';
import Signup from './src/screens/signup';
import React from 'react';
import { firebase } from './src/config';

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

const Stack = createNativeStackNavigator();

export default function App() {

  const [loading, setLoading] = React.useState(true);

  const [user, setUser] = React.useState(false);

  function authStateChanged(user) {
    console.log("user ", user);
    setUser(user);
    setLoading(false);
  }

  React.useEffect(() => {
    const subscribe = firebase.auth().onAuthStateChanged(authStateChanged);
  }, [])

  if(loading) {
    return(
      <View style={{felx: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
      
    )
  }

  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        {
          user ? (
            <>
              <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
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
