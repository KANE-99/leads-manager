import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import ReactDOM from "react-dom";
import Header from './Layout/header'
import store from '../store'
import Dashboard from './Layout/dashboard';

const errorOption = {
    timeout: 3000,
    position: 'top center'
}

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...errorOption}>
                    <Fragment>
                        <Header />
                        <div className='container'>
                            <Dashboard />
                        </div>
                    </Fragment>
                </AlertProvider>
            </Provider>


        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));