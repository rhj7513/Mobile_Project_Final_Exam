import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, View, Text, TouchableOpacity, Platform, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
//항목 보이는 컴포넌트
// import Task from './Components/Task';
import Today from './Pages/Today';
import Tomorrow from './Pages/Tomorrow';

import StackNavigator from './Components/StackNavigator';

export default function App (){
  return (
    <View style={styles.container}>
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    </View>
    
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
      },
      tasksWrapper:{
        paddingTop:80,
        paddingHorizontal:20,
    
      },
      sectionTitle:{
        fontSize:24,
        fontWeight:'bold',
      },
      items:{
        marginTop: 30,
      },
      writeTaskWrapper:{
        position:'absolute',
        bottom: 60,
        width:'100%',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight:15,
        paddingLeft:15

      },
      input:{
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#c0c0c0',
        borderWidth: 1,
        width: 310,
      },
      addWrapper:{
        width:60,
        height:60,
        backgroundColor:'#fff',
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center',
        bordercolor: '#c0c0c0',
        borderWidth: 1,
      },
      addText:{

      }

});
