import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { login } from '../../actions/auth';
import { connect } from "react-redux"

export class Login extends Component {
    state = {
        name : '',
        password : ''
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.login(this.state.name,this.state.password);
    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        if(this.props.isAuthenticated){
            return <Redirect to='/' />
        }
        return (
            <form style={{ marginTop: '10px', marginBottom: '20px' }} onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={this.onChangeHandler} value={this.state.name} />
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password:</label>
                    <input type="password" className='form-control' id='password' name='password' onChange={this.onChangeHandler} value={this.state.password}></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p>Don't have an Account?
                    <Link to='/register'>Register</Link>
                </p>
            </form>
        )
    }
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps,{ login })(Login);