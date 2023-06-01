import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, View, Text, TouchableOpacity, Platform, TextInput } from 'react-native';

//항목 보이는 컴포넌트
import Task from './Pages/Task';

export default function App (){
    //사용자 입력 할일
    const [task, setTask] = useState();
    //Item으로 들어갈 task들
    const [taskItems, setTaskItems] = useState([]);

    // 할일 다 하고 목록 눌렀을 때 항목 자체를 삭제하고 싶으면 주석 코드 살리고 밑에 코드 죽여요
    // //누르면 할일 적용
    // const handleAddTask = () => {
    //     // Keyboard.dismiss();
    //     console.log("눌림?", task);
    //     setTaskItems([...taskItems, task])
    //     setTask(null);
    // }

    // //할일 다 했을 때 상태
    // const completeTask = (index) =>{
    //     let itemsCopy = [...taskItems];
    //     itemsCopy.splice(index, 1);
    //     setTaskItems(itemsCopy);

    // }

    //항목 눌렀을 때 항목 안 없어지고 체크표시 여부로만 판단하고 싶으면 이 코드 살려요
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
      }

   


  return (
    <View style={styles.container}>
        {/* 오늘 할일 */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>오늘 할일</Text>

        <View style={styles.items}>

            {/* {
                // 할일 항목 걍 없애버리고 싶으면 이 코드 살리셈!!!
                 taskItems.map((item, index) => {
                    return (
                      <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                        <Task text={item} />
                      </TouchableOpacity>
                    );
                  })
            } */}

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
      </View>

    {/* 키보드 입력하는 곳 */}
      <KeyboardAvoidingView
        behavior={Platform.os === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        >
            <TextInput style={styles.input} placeholder ={'Write a task'}  value ={task}  onChangeText={text => setTask(text)}/>
            <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
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
        alignItems: 'center'

      },
      input:{
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        bordercolor: '#c0c0c0',
        borderWidth: 1,
        width: 250,

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
