import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';


export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {  
    
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,      
      done: false
  }
    
    setTasks(oldState => [...oldState,newTask])

  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    /* const taskDone = tasks.filter(obj => obj.id===id)
    taskDone[0].done=!taskDone[0].done

    setTasks(oldState => oldState.filter(obj => obj.id !== id))
    setTasks(oldState => [...oldState,taskDone[0]]) */
    const updatedTasks = tasks.map(task => ({...task}))

    const foundItem = updatedTasks.find(obj=>obj.id===id)

    if(!foundItem)
      return

    foundItem.done=!foundItem.done
    setTasks(updatedTasks)
    
  }

  function handleRemoveTask(id: number) {
    
    const updatedTask = tasks.filter(obj => obj.id !== id)
    setTasks(updatedTask)
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})