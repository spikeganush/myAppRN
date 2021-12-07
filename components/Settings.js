import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Signout } from './Signout';

export function Settings (props) {
  return (
    <View style={styles.screen}>
      <Text>Add item</Text>
      <Signout handler={props.handler} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen : {
    display: "flex",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})