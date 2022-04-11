import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { firebase } from '../config'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Onboarding = () => {
  const makeOnboardingTrue = async () => {
    try {
      await AsyncStorage.setItem('onboarding', 'true')
    } catch (e) {
      console.log(e)
    }
  }

  React.useEffect(() => {
    makeOnboardingTrue()
  }, [])

  return (
    <Text>Onboarding</Text>
  )

}

export default function Home() {

  const [checking, setChecking] = React.useState(true)
  const [onboarded, setOnboarded] = React.useState(false)

  const getOnboardingValue = async () => {
    try {
      const value = await AsyncStorage.getItem('onboarding')
      if (value !== null) {
        setOnboarded(true)
        setChecking(flase)
      } else {
        setOnboarded(false)
      }
      setChecking(false)
    } catch (e) {
      console.log(e)
      setChecking(false)
    }
  }

  React.useEffect(() => {
    getOnboardingValue()
  }, []);

  if (checking) {
    return null
  }

  if (!onboarded) {
    return <Onboarding />
  }

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Pressable onPress={() => firebase.auth().signOut()}>
        <Text>LOGOUT</Text>
      </Pressable>
    </SafeAreaView>
  )
}