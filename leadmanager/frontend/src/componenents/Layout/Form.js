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
            [event.target.id] : event.target.value
        })
    }
    onSubmitHandler = (e) => {
        e.preventDefault()
        const { name, email, message } = this.state
        const lead = { name, email, message }
        this.props.addLead(lead);
    }
    render() {
        return (
            <form style={{ marginTop: '10px',marginBottom: '20px' }} onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" onChange={this.onChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" onChange={this.onChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor='message'>Message</label>
                    <textarea className='form-control' id='message' onChange={this.onChangeHandler}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
               
            </form>
        )
    }
}
Form.propTypes = {
    addLead:PropTypes.func.isRequired
}

export default connect(null, { addLead })(Form)
