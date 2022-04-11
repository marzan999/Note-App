import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { firebase } from '../config'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
  {
    key: 1,
    title: 'Document',
    subtitle: 'Make yourself better',
    text: 'Learn new stuffs get professional',
    image: require('../../assets/banner1.png'),
  },
  {
    key: 2,
    title: 'Learn',
    subtitle: 'Learn and grow',
    text: 'You can earn professionally with our bootcamps',
    image: require('../../assets/banner2.png'),
  },
  {
    key: 3,
    title: 'Help',
    subtitle: 'Help others by educating',
    text: 'Create your own notes and help others',
    image: require('../../assets/banner3.png'),
  }
];

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

  const renderItem = ({ item }) => {

    const { key, title, subtitle, text, image } = item 
    return (
      <View style={{flex: 1 }}>
      <Image source={image} style={{width: '100%', height: 300 }} resizeMode="contain"/>
      </View>
    )
  }

  const onDone = () => {

  }

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      keyExtractor={item => item.key}
      activeDotStyle={{backgroundColor: 'green'}}
    />
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

  return (
    <SafeAreaView style={{flex: 1}}>
      <Onboarding/>
    </SafeAreaView>
  )

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