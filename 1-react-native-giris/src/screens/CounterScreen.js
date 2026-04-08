import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useReducer } from "react";

const reducer = (state, action) => { 
  // console.log(action)
  switch(action.type) {
    case 'increment': 
      return {
        ...state, count: state.count + action.payload
      }
      case 'decrement': 
      return {
        ...state, count: state.count - action.payload
      }
      default: {
        return state
      }
  }
}

export default function CounterScreen() {
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Button
        title="Artır"
        onPress={() => {
          dispatch({type: 'increment', payload: 1 })
          // setCounter(counter + 1);
        }}
      />
      <Button
        title="Azalt"
        onPress={() => {
          dispatch({type: 'decrement', payload: 1 })
          // setCounter(counter - 1);
        }}
      />
      <Text>Sayı:{state.count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
