// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {store , getBear} from '../App4'

// class Bears extends Component {

// componentDidMount = () => {
    
//     this.props.getBear()
//     console.log("value ="+this.props.value)
// }

// renderBear = () => {
//     return this.props.value.map( (bear)=> {
//         console.log( bear.name)
//         return (<li key={bear.id}>{bear.name} , {bear.major}</li>)

//     })
// }

//     render () {
//         return(
//             <div>
//                 <ul>
//                     Hello this APP4 <hr/>
//                 {() => this.renderBear()}
//                {/* {this.props.value} */}
//                 </ul>
       
//             </div>
//         )
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getBear : () => dispatch( getBear() )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//        value : state.bears
//     }
// }

// export default connect (mapStateToProps , mapDispatchToProps)(Bears)



import React, {Component} from 'react';
import {getBear} from '../App4'
import { connect } from 'react-redux'

class Bears extends Component {

   componentDidMount() {
       console.log('props',this.props)
       this.props.getBears()
   }

   renderBears = () => {
       if (this.props.bears) {
           return this.props.bears.map( (bear, index) => {
               console.log( bear.name)
               return (<li key={index}> {bear.name} : {bear.weight} </li>
           )})
       }
   }

   render() {
       return (
           <div style={{margin: '20px'}}>
               <h3>Render Bear</h3>
               <ul>
                   {this.renderBears()}
                
               </ul>
           </div>
       );
   }
}

const mapStateToProps =  ({bears}) => {
   return {bears}
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBears: () => dispatch(getBear())
    }
 }
 
 export default connect(mapStateToProps,mapDispatchToProps)(Bears);