import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getGit} from '../App'

class Index extends Component {

   

    componentDidMount() {
        console.log('1props :',this.props)
        this.props.getGit(this.state.name)

    }

    state = {
        name : ""
    }

    
    
    render() {
        return (
            <div>
                <input type="text" name="name" onChange={ (e)=> {
                    this.setState({
                        [e.target.name] : e.target.value
                    })
                }}/>
                <button onClick={ () => this.props.getGit(this.state.name)}>submit</button>
                <h1>{this.props.value.login}</h1> <br/>
                <img src={this.props.value.avatar_url}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        value : state.gitPass
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGit : (name) => dispatch( getGit(name) )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index)