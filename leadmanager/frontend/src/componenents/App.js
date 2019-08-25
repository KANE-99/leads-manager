import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import ReactDOM from "react-dom";
import Header from './Layout/header'
import store from '../store'
import Dashboard from './Layout/dashboard';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />  
                    <div className='container'>
                        <Dashboard />
                    </div>
                </Fragment>
            </Provider>


        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));