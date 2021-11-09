import React from 'react'
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ThemeColours } from './ThemeColours';

export function Signin ( props ) {
  const navigation = useNavigation()
  return(
    <View style={styles.container}>
      <Text style={styles.font}>Log in</Text>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
      <View style={styles.inner}>
        <Text style={styles.font}>Email</Text>
        <TextInput style={styles.input} />
        <Text style={styles.font}>Password</Text>
        <TextInput style={styles.input} secureTextEntry={true}  />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.font}>Don't have an account?</Text>
        <Button title="Sign up for an account" onPress={() => navigation.navigate("Signup")} />
      </View>
      </KeyboardAvoidingView>
      
    </View>
  )
}

const styles = StyleSheet.create( {
  input: {
    backgroundColor: ThemeColours.cultured,
    fontSize: 16,
    padding: 5,
    borderRadius: 4,
  },
  button: {
    marginVertical: 15,
    backgroundColor: ThemeColours.turquoise,
    padding: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: ThemeColours.blackcoral,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: ThemeColours.cultured,
    textAlign: 'center',
  },
  inner: {
    width: 300,
    marginBottom: 90,
    
  },
  kb: {
    flex: 1,
  },
  font: {
    color: ThemeColours.eggshell,
  }
})