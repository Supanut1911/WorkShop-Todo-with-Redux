
import React, {Component} from 'react';
// import './App.css';
 import TaskList from './todo/TaskList'
 import InputTask from "./todo/InputTask";
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'

export const addtask = (value) => ({
  type:"ADDTASK",
  payload: value
})

const initState = {
id:2,
  tasks: [
          {id: 1, task: 'Do homework'},
          {id: 2, task: 'coding '}],
    // id:3
}

const taskReducer = (state = initState , action) => {
  switch(action.type){
    case "ADDTASK":
          state = {
           ...state,

           tasks:[...state.tasks,{id:state.tasks.id+=1,task:action.payload,}]
          }
    default:
  }
  return state
}
const rootReducer = combineReducers({
  taskPass : taskReducer
})
export const store = createStore(rootReducer)

// store.subscribe( ()=> {
//   console.log('update store ', store.getState())
// })

// store.dispatch({
//   type:"ADDTASK",
//   payload:{
//     id:3,task:"readbook"
//   }
// })



class App extends Component {

  //  addTask = (task) => {
  //      this.setState({
  //               tasks: [...this.state.tasks, {id: this.state.id,task } ],
  //               id: this.state.id+1  })
  //  }

   render() {   
       return (
         <Provider store={store}>
              <div>
                  <h1>Todo</h1>
                  {/* <TaskList tasks={this.state.tasks}/> */}
                  <TaskList/>
                  {/* <InputTask addTask={this.addTask} id={this.state.id}/> */}
                  <InputTask/>
                  <br/>
              </div>
         </Provider>
           
       );
   }
}

export default App;
