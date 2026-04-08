import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import CoursesInformationScreen from './src/screens/CoursesInformationScreen';
import CounterScreen from './src/screens/CounterScreen';
import BoxScreen from './src/screens/BoxScreen';  
import ColorChangeScreen from './src/screens/ColorChangeScreen';
import PasswordScreen from './src/screens/PasswordScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  // const message = 'Javascript'

 
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>React Native</Text>
    //   <Text style={styles.content}>React JS</Text>
    //    <Text>{message}</Text>
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Ana Sayfa'>
        <Stack.Screen name="Ana Sayfa" component={HomeScreen} />
        <Stack.Screen name = 'Kurslarım' component={CoursesScreen} />
        <Stack.Screen name = 'KursBilgilerim' component={CoursesInformationScreen} />
        <Stack.Screen name = 'Sayac' component={CounterScreen} />
        <Stack.Screen name = 'KutuUygulaması' component={BoxScreen} />
        <Stack.Screen name = 'RenkDegistirme' component={ColorChangeScreen} />
        <Stack.Screen name = 'SifreEkranı' component={PasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // title: {
  //   fontSize: 50
  // },
  // content: {
  //   fontSize: 20
  // }
});
