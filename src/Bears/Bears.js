import React, {Component} from 'react'
import {connect} from 'react-redux'
import {store , getStd} from '../App4'

class Bears extends Component {

componentDidMount = () => {
     console.log("1value =",this.props.value)    
    this.props.getStd()


}

renderStd = () => {
     console.log("2value =",this.props.value)    
        if (this.props.value) {
                   return this.props.value.map( (item, index) => {
                       return (<li key={index}> {item.id + "  "+item.name+"  "+item.surename+"  "+item.Major+"  "+item.Gpa} </li>
                   )})
               }
}

    render () {
        return(
            <div>
                    Get data from backEnd <hr/>
                
                <ul>
                {this.renderStd()}
                    </ul>    
  
       
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStd : () => dispatch( getStd() )
    }
}

const mapStateToProps = (state) => {
    return {
       value : state.std
    }
}

export default connect (mapStateToProps , mapDispatchToProps)(Bears)

