import React, { Component,Fragment } from 'react'
import Leads from './leads';
import Form from './Form';
import Alerts from './Alerts';

export class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <Alerts />
                <Form />
                <Leads />
            </Fragment>
        )
    }
}

export default Dashboard;
