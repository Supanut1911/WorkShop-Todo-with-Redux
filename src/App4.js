// Bears
import React,{Component} from 'react'
import {Provider} from 'react-redux'
import {createStore , combineReducers, applyMiddleware} from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk';
import Bears from './Bears/Bears'

//==============functional ===================================
export const getStdFail = () => {
    return {
        type : "GET_STD_FAIL"       
    }
}

export const getStdSucess = (std) => {
    return {
        type : "GET_STD_SUCCESS",
        payload:std
    }
}


//============action for getting bears data=====================
export const getStd = () => async  (dispatch) => {
    try {
        const res = await axios.get(`http://localhost/api/psu`)
        const resBody = await res.data
        dispatch(getStdSucess(resBody))
    } catch (error) {
        dispatch( getStdFail())
    }
}







//==============Reducer==========================================
export const stdReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_STD_FAIL' :
            console.log('action' , action.std)
            return action.payload
        case 'GET_STD_SUCCESS' :
            console.log('action : success' ,action.std)
            return action.payload
        default : 
            return state
    }
}


//=====================Store===================================
export const rootReducer = combineReducers({
    std : stdReducer 
})
export const store = createStore(rootReducer , applyMiddleware(thunk))

class App4 extends Component {

    render() {
        return(
            <Provider store = {store} >
                <div>
                    <Bears/>
                </div>  
            </Provider>
            
        )
    }
}

export default App4




