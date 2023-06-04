import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, View, Text, TouchableOpacity, Platform, TextInput, ScrollView } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

//항목 보이는 컴포넌트
import Task from '../Components/Task';

export default function Tomorrow (){
    //사용자 입력 할일
    const [task, setTask] = useState();
    //Item으로 들어갈 task들
    const [taskItems, setTaskItems] = useState([]);
    //stautsbar
    const [completedCount, setCompletedCount] = useState(0); // 체크된 항목 개수 상태


    //누르면 할일 적용
    const handleAddTask = () => {
      if (task) {
        setTaskItems([...taskItems, { text: task, completed: false }]);
        setTask('');
      }
    }
    //할일 다 했을 때 상태
    const completeTask = (index) => {
      let itemsCopy = [...taskItems];
      itemsCopy[index].completed = !itemsCopy[index].completed; // 토글
      setTaskItems(itemsCopy);
      // 체크된 항목 개수 업데이트
      const completedTasks = itemsCopy.filter((item) => item.completed);
      setCompletedCount(completedTasks.length);
    }

    //모든 항목을 삭제할 때
    const removeAllTasks = () => {
      setTaskItems([]);
      setCompletedCount(0); // 모든 항목 삭제 시 체크된 항목 개수 초기화
    }

    // 상태 표시줄 게이지 계산
    const statusBarWidth = taskItems.length > 0 ? (completedCount / taskItems.length) * 100 : 0;


  return (
    <View style={styles.container}>
        {/* 오늘 할일 */}
      <View style={styles.tasksWrapper}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.sectionTitle}>내일 할일</Text>
          <TouchableOpacity onPress={() => removeAllTasks()} style={{marginTop:5}}>
            <Icon name='trash-can' size={30} color={'red'} />
          </TouchableOpacity>
        </View>
        
        <ScrollView>
          <View style={styles.items}>

              {/* 할일 목록 띄우는 곳 체크여부o*/}{
              taskItems.map((item, index) => {
                  return (
                      <Task
                      key={index}
                      text={item.text}
                      completed={item.completed}
                      onToggle={() => completeTask(index)}
                      />
                  );
                  })
              }
          </View>
        </ScrollView>
      </View>
     
      {/* 상태 표시줄 */}
      <View style={styles.statusBar}>
          <View style={{ width: `${statusBarWidth}%`, height: '100%', backgroundColor: '#55bcf6', borderRadius: 10, }} />
      </View>
  
   

      
    {/* 키보드 입력하는 곳 */}
      <KeyboardAvoidingView
        behavior={Platform.os === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        >
            <TextInput style={styles.input} placeholder ={'Write a task'}  value ={task}  onChangeText={text => setTask(text)}/>
            <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper}>
                    <Icon name={task ? "send" : "send"} size={23} color={'red'} />
                </View>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
      },
      tasksWrapper:{
        paddingTop:30,
        paddingHorizontal:20,
    
      },
      sectionTitle:{
        fontSize:24,
        fontWeight:'bold',
      },
      items:{
        flex:1,
        marginTop: 50,
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
      statusBar:{
        height: 30,
        backgroundColor: 'lightgray',
        position:'absolute',
        top:80,
        width:'90%',
        borderRadius: 10,
        right:22,
      }
});
