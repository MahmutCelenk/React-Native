import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DesignScreen() {
  return (
    <View style={styles.mainWiew}>
      {/* <View style={{width: 50, height:80, backgroundColor: 'red', position: 'absolute', left: 0 , top: 0}} />
      <View style={{width: 50, height:80, backgroundColor: 'blue', position: 'absolute', right: 0 , top: 0}} />
      <View style={{width: 50, height:80, backgroundColor: 'green', position: 'absolute', left: 0 , bottom: 0}} />
      <View style={{width: 50, height:80, backgroundColor: 'yellow', position: 'absolute', right: 0 , bottom: 0}} /> */}
       {/* <Text style={styles.mainTextOne}>1</Text> */}
       {/* <Text style={styles.mainTextTwo}>2</Text>
       <Text style={styles.mainTextThree}>3</Text> */}

      <View style={styles.red} />
      <View style={styles.blue} />
      <View style={styles.green} />
      <View style={styles.yellow} />
    </View>
  )
}

const styles = StyleSheet.create({
    mainWiew: {
        // borderWidth: 1,
        // borderColor: 'black',
        // margin: 20,
        // borderRadius: 20,
        // height: 400,
        // alignItems: 'stretch' // default
        // alignItems: 'flex-start'
        // alignItems: 'flex-start',
        // alignItems: 'center'
        // alignItems: 'baseline'
        // flexDirection: 'row',
        // flexDirection: 'column', // default
        // justifyContent: 'flex-end'
        // justifyContent: 'flex-start'
        // justifyContent: 'flex-start',ü
        width: '100%',
        height: '100%',
    },
    // mainText: {
    //      borderWidth: 1,
    //     borderColor: 'red',
    //     margin: 10,
    //     // marginHorizontal: 30,
    //     // marginVertical: 30
    //     padding: 20,
    //     // paddingHorizontal: 20,
    //     // paddingVertical: 20,
    //     borderRadius: 10,
    // }
    //  mainTextOne: {
    //      borderWidth: 1,
    //     borderColor: 'red',
    //     margin: 10,
    //     padding: 20,
    //     borderRadius: 10,
    //     // flex: 3
    //     // alignSelf: 'flex-start'
    //     position: 'absolute',
    //     bottom: 0,
    //     left: 0,
    //     // right: 0,
    //     // top: 0

    // },
    //  mainTextTwo: {
    //      borderWidth: 1,
    //     borderColor: 'red',
    //     margin: 10,
    //     padding: 20,
    //     borderRadius: 10,
    //     // flex: 5
    //     // alignSelf: 'center'
    //     // top: 10
    //     // left: 30
    //     // bottom: 10
    //     right: 40
    // },
    //  mainTextThree: {
    //      borderWidth: 1,
    //     borderColor: 'red',
    //     margin: 10,
    //     padding: 20,
    //     borderRadius: 10,
    //     // flex: 1
    //     // alignSelf: 'flex-end'
    // },
    red: {
        width: '25%', 
        height: '25%', 
        backgroundColor: 'red', 
        position: 'absolute', 
        left: 0, 
        top: 0
    },
    blue:{
         width: '25%', 
        height: '25%', 
        backgroundColor: 'blue', 
        position: 'absolute', 
        right: 0, 
        top: 0
    },
    green: {
        width: '25%', 
        height: '25%', 
        backgroundColor: 'green', 
        position: 'absolute', 
        left: 0, 
        bottom: 0
    },
    yellow: {
        width: '25%', 
        height: '25%', 
        backgroundColor: 'yellow', 
        position: 'absolute', 
        right: 0, 
        bottom: 0
    }

})