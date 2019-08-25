import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withAlert } from 'react-alert'
import { connect } from "react-redux";

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        messages: PropTypes.object.isRequired
    }
    componentDidUpdate(prevState) {
        const { error, alert, messages } = this.props
        if (error !== prevState.error) {
            if (error.msg.name){
                alert.error(`name: ${error.msg.name.join()}`);
            }
            if (error.msg.email){
                alert.error(`email: ${error.msg.email.join()}`);
            }           
        }
        if (messages !== prevState.messages) {
            if(messages.delete_lead){
                alert.success(messages.delete_lead)
            }
            if(messages.add_lead){
                alert.success(messages.add_lead)
            }
        }
    }
    render() {
        return (
            <Fragment />
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        error: state.errors,
        messages: state.messages
    })
}

export default connect(mapStateToProps)(withAlert()(Alerts))
