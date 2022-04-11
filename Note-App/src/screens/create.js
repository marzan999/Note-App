import { View, Text } from 'react-native'
import React from 'react'
import Input from '../components/input'
import RadioInput from '../components/radio-input'
import Button from '../components/button'
import { ActivityIndicator } from 'react-native'

const OPTIONS = ['red', 'green', 'blue']

export default function Create() {

  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [noteColor, setNoteColor] = React.useState('white')
  const [loading, setLoading] = React.useState(false)

  const onSave = () => {
    setLoading(true)
  }

  return (
    <View style={{ margin: 20, flex: 1 }}>
      <Input placeholder="Set the title" />
      <Input placeholder="Set the description" />

      <View style={{ marginTop: 20 }}>
        <Text style={{ marginBottom: 20, fontSize: 18 }}>Select your note color</Text>
        {OPTIONS.map((option, index) => (
          <RadioInput
            key={index}
            lebel={option}
            value={noteColor}
            setValue={setNoteColor}
            size="big"
          />
        ))}
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        {
          loading ? (
            <ActivityIndicator />
          ) : (
            <View style={{ alignSelf: 'center', margin: 20, }}>
              <Button onPress={onSave} title="Submit" />
            </View>
          )
        }

      </View>

    </View>
  )
}