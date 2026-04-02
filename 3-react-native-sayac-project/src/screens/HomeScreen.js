import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const navigation = useNavigation()
  
  return (
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ana Ekran</Text>
      <Button
        title="Kurslarım"
        onPress={() => navigation.navigate('Kurslarım')}
      />
       <Button
        title="Kurs Bilgilerim"
        onPress={() => navigation.navigate('KursBilgilerim')}
      />
        <Button
        title="Sayaç Uygulaması"
        onPress={() => navigation.navigate('Sayac')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})