import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';

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
