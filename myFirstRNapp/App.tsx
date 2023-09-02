/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {
const [refreshing, setrefresh]=useState(false)
const onrefresh=() =>{
  setrefresh(true)
  setTimeout(() => {
    setrefresh(false)
  }, 2000);
}
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onrefresh}></RefreshControl>}>
        <Text style={{fontSize:30}}>React Native provides a number of built-in Core Components ready for you to use in your app. You can find them all in the left sidebar (or menu above, if you are on a narrow screen). If you're not sure where to get started, take a look at the following categories:React Native provides a number of built-in Core Components ready for you to use in your app. You can find them all in the left sidebar (or menu above, if you are on a narrow screen). If you're not sure where to get started, take a look at the following categories:React Native provides a number of built-in Core Components ready for you to use in your app. You can find them all in the left sidebar (or menu above, if you are on a narrow screen). If you're not sure where to get started, take a look at the following categories:React Native provides a number of built-in Core Components ready for you to use in your app. You can find them all in the left sidebar (or menu above, if you are on a narrow screen). If you're not sure where to get started, take a look at the following categories:</Text>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background:{
    backgroundColor:'lightgray',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
});

export default App;
