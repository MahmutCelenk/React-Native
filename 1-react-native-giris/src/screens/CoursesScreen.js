import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function CoursesScreen() {
   const courses = [
    {name: 'Angular',  id: 1},
    {name: 'React JS',  id: 2},
    {name: 'Vue JS',  id: 3},
    {name: 'Java',  id: 4},
    {name: 'Go',  id: 5},
  ]
  return (
     <FlatList 
      // horizontal
      // showsHorizontalScrollIndicator={false}
      data={courses} 
      keyExtractor={(item) => String(item.id)}
      renderItem={({item}) => {
        return <Text style={styles.content}>{item.name}</Text>
      }}
    />
  )
}

const styles = StyleSheet.create({
    content: {
    fontSize: 20,
    backgroundColor: 'yellow',
    marginVertical: 10,
    padding: 20 
  }
})