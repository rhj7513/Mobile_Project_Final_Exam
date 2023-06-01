import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Task (props){
    // 항목 아예 삭제하고 싶으면 이부분 살리셈
    // return(
    //     <View style={styles.item}>
    //         <View style={styles.itemLeft}>
    //             <View style={styles.square}></View>
    //             <Text style={styles.itemText}>{props.text}</Text>
    //         </View>
    //         <View style={styles.circular}></View>
    //     </View>
    // )
    return (
      // 체크여부는 이부분 살리셈
      <TouchableOpacity onPress={props.onToggle}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={props.completed ? styles.squareCompleted : styles.square}></View>
          <Text style={props.completed ? styles.itemTextCompleted : styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
      </View>
    </TouchableOpacity>
    )
}


export default Task;

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft:{
        flexDirection:'row',
        alignItems: 'center',
        flexWrap: 'wrap'

    },
    square:{
        width: 24,
        height:24,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    itemText:{
        maxWidth: '80%',
    },
    circular:{
        width:12,
        height:12,
        borderColor:'#55bcf6',
        borderWidth: 2,
        borderRadius:5,
    }

});