import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { firebase } from '../config'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIntroSlider from 'react-native-app-intro-slider';
import Button from '../components/button';
import { AntDesign } from '@expo/vector-icons';



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

const Onboarding = ({ setOnboarded }) => {
  const makeOnboardingTrue = async () => {
    try {
      await AsyncStorage.setItem('onboarding', 'true')
    } catch (e) {
      console.log(e)
    }
    setOnboarded(true)
  }

  // React.useEffect(() => {
  //   makeOnboardingTrue()
  // }, [])

  const renderItem = ({ item }) => {

    const { title, subtitle, text, image } = item
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={image}
          style={{ width: '100%', height: 300 }}
          resizeMode="contain"
        />

        <View style={{ marginTop: 30 }}>

          <Text style={{ textAlign: 'center', fontSize: 32, fontWeight: 'bold', color: '#18B18D' }}>
            {title}
          </Text>

          <Text style={{ textAlign: 'center', fontSize: 22, color: '#18B18D', marginTop: 20 }}>
            {subtitle}
          </Text>

          <Text style={{ textAlign: 'center', fontSize: 18, marginTop: 20, marginHorizontal: 40 }}>
            {text}
          </Text>

        </View>

      </View>
    )
  }

  // const onDone = () => {
  //   alert("done")
  //   setOnboarded(true)
  // }

  const renderDoneButton = () => {
    return (
      //<Button title="DONE"/>
      <View style={{ width: 30, height: 30, backgroundColor: 'green', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
        <AntDesign name="check" size={24} color="white" />
      </View>
    )
  }

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={makeOnboardingTrue}
      keyExtractor={item => item.key}
      activeDotStyle={{ backgroundColor: 'green' }}
      renderDoneButton={renderDoneButton}
    // bottomButton
    // showDoneButton={false}
    />
  )

}

export default function Home({ navigation }) {

  const [checking, setChecking] = React.useState(true)
  const [onboarded, setOnboarded] = React.useState(false)
  const [notes, setNotes] = React.useState([])

  const getOnboardingValue = async () => {
    // AsyncStorage.removeItem('onboarding')
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
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Onboarding setOnboarded={setOnboarded} />
      </SafeAreaView>
    )
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Text>Home</Text>
      <Pressable onPress={() => firebase.auth().signOut()}>
        <Text>LOGOUT</Text>
      </Pressable> */}

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#18B18D' }}>
          My Notes
        </Text>

        <Pressable onPress={() => navigation.navigate('Create')}>
          <AntDesign name="pluscircle" size={24} color="#18B18D" />
        </Pressable>
      </View>

      {
        notes.length === 0 ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Image source={require('../../assets/empty-state.png')} />

            <Text style={{ fontSize: 18, marginTop: 20 }}>
              You don't have any note yet.
            </Text>

          </View>
        ) : (
          <View />
        )
      }

    </SafeAreaView>
  )
}