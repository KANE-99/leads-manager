import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLead } from '../../actions/leads';
import PropTypes from 'prop-types'

export class Form extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }
    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmitHandler = (e) => {
        e.preventDefault()
        const { name, email, message } = this.state
        const lead = { name, email, message }           
        this.props.addLead(lead);
        this.setState({
            name: '',
            email: '',
            message: ''
        }, () => console.log(this.state));
        
    }
    render() {
        return (
            <form style={{ marginTop: '10px', marginBottom: '20px' }} onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={this.onChangeHandler} value={this.state.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={this.onChangeHandler} value={this.state.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor='message'>Message</label>
                    <textarea className='form-control' id='message' name='message' onChange={this.onChangeHandler} value={this.state.message}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        )
    }
}
Form.propTypes = {
    addLead: PropTypes.func.isRequired
}

export default connect(null, { addLead })(Form)
