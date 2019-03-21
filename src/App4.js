// Bears
import React,{Component} from 'react'
import {Provider} from 'react-redux'
import {createStore , combineReducers, applyMiddleware} from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk';
import Bears from './Bears/Bears'

//============action for getting bears data=====================
export const getBear = () => async  (dispatch) => {
    try {
        const res = await axios .get(`http://localhost/api/psu`)
        // const resBody = await res.data
        dispatch(getBearSucess(res.data))
    } catch (error) {
        dispatch(getBearFail())
    }
}

//==============functional ===================================
export const getBearFail = () => {
    return {
        type : "GET_BEAR_FAIL"       
    }
}

export const getBearSucess = (bears) => {
    return {
        type : "GET_BEAR_SUCCESS",
        bears
    }
}




//==============Reducer==========================================
const bearReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_BEAR_FAIL' :
            console.log('action' , action.bears)
            return action.bears
        case 'GET_BEAR_SUCCESS' :
            console.log('action : success' ,action.bears)
            return action.bears
        default : 
            return state
    }
}


//=====================Store===================================
const rootReducer = combineReducers({
    bears : bearReducer 
})
const store = createStore(rootReducer , applyMiddleware(thunk))

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




