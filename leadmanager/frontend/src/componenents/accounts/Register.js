import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Register extends Component {
    state = {
        name : '',
        email : '',
        password : '',
        password2 : ''
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Hello");
    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <form style={{ marginTop: '10px', marginBottom: '20px' }} onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={this.onChangeHandler} value={this.state.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={this.onChangeHandler} value={this.state.email} />
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password:</label>
                    <input type="password" className='form-control' id='password' name='password' onChange={this.onChangeHandler} value={this.state.password}></input>
                </div>
                <div className="form-group">
                    <label htmlFor='password2'>Confirm Password:</label>
                    <input type='password' className='form-control' id='password2' name='password2' onChange={this.onChangeHandler} value={this.state.password2}></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p> Already have an account?
                    <Link to='/login'>Login</Link>
                </p>
            </form>
        )
    }
}

export default Register;