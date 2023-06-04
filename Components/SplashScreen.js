// 앱 처음 실행할 때 보일 로딩화면
// npm i react-native-splash-screen --save이거해줌
// Import React and Component

import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Text,Image} from 'react-native';


//처음 앱 실행했을 때 움직이는 발바닥 밑에 install 다 해줘야 돼
//npm i --save lottie-react-native
//npm i --save lottie-ios@3.2.3

import LottieView from 'lottie-react-native';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.replace('Auth');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
       <LottieView 
          source={require('../assets/Todolist.json') /** 움직이는 LottieView */
          }
          autoPlay loop
        />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  activityIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
});