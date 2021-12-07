import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ThemeColours } from './ThemeColours'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

// screens to show in Home
// import { Settings } from './Settings'
// import { AddClient } from './AddClient'
// import { Signout } from './Signout'

const Tab = createBottomTabNavigator()

export function Home(props) {
  const navigation = useNavigation()
  const [listData, setListData] = useState()

  useEffect(() => {
    if (!props.auth) {
      navigation.reset({ index: 0, routes: [{ name: 'Signin' }] })
    }
    console.log(props.user)
  }, [props.auth])

  useEffect(() => {
    setListData(props.data)
  }, [props.data])

  const data = { time: new Date().getTime(), user: Math.random() * 100 }

  const onClick = (item) => {
    console.log(item.id)
    navigation.navigate('Detail', {
      id: item.id,
      time: item.time,
      user: item.user,
    })
  }

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text onPress={() => onClick(item)}>
        time: {item.time}
        id: {item.id}
      </Text>
    </View>
  )

  return (
    /*
        <Tab.Navigator>
       
         <Tab.Screen 
        name="Add Client" 
        component={AddClient} 
        options={{
          tabBarLabel: "Add Client",
          tabBarIcon: ({color,size}) => (
            <Ionicons name="add-outline" color={color} size={size} />
            
          )
        }}
        />
        <Tab.Screen 
        name="Settings" 
        component={Settings} 
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({color,size}) => (
            <Ionicons name="settings" color={color} size={size} />
            
          )
        }}>
         
        </Tab.Screen>
        
    </Tab.Navigator>
    */
    <View>
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.add('cities', data)
        }}
      >
        <Text>Add something</Text>
      </TouchableOpacity>
      <FlatList
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: 40,
  },
  button: {
    backgroundColor: ThemeColours.turquoise,
    padding: 10,
  },
  item: {
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
})
