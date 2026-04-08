import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useReducer } from 'react'
import ColorChange from '../../components/ColorChange'

const reducer = (state, action) => { 
    console.log(action)
    switch(action.type) {
        case 'changedRed': 
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state : {...state, red: state.red + action.payload}
         case 'changedBlue': 
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state : {...state, green: state.green + action.payload}
        case 'changedGreen': 
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state : {...state, blue: state.blue + action.payload}
    }
}

export default function ColorChangeScreen() {
  const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0})
  const {red, green, blue} = state
  return (
    <View>
        <ColorChange 
           color='kirmizi' 
           onIncrease={() => dispatch({type:'changedRed', payload:20})}
           onDecrease={() => dispatch({type:'changedRed', payload:-20})} />
        <ColorChange 
           color='mavi' 
           onIncrease={() => dispatch({type:'changedBlue', payload:20})}
           onDecrease={() => dispatch({type:'changedBlue', payload:-20})} 
        />
        <ColorChange 
            color='yesil' 
            onIncrease={() => dispatch({type:'changedGreen', payload:20})}
            onDecrease={() => dispatch({type:'changedGreen', payload:-20})} />

        <View style={{
            height:150,
            width:150,
            backgroundColor:`rgb(${red},${green},${blue})`}}/>
    </View>
    
  )
}

const styles = StyleSheet.create({})