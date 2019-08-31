import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { Provider as AlertProvider } from 'react-alert'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AlertTemplate from 'react-alert-template-basic'
import Login from './accounts/Login';
import Register from './accounts/Register';
import Alerts from './Layout/Alerts'
import PrivateRouter from './common/PrivateRouter'
import ReactDOM from "react-dom";
import Header from './Layout/header'
import store from '../store'
import Dashboard from './Layout/dashboard';
import { loadUser } from '../actions/auth';

const errorOption = {
    timeout: 3000,
    position: 'top center'
}

export default class App extends Component {
    componentDidMount(){
        store.dispatch(loadUser());
    }
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...errorOption}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className='container'>
                                <Switch>
                                    <PrivateRouter exact path='/' component={Dashboard}></PrivateRouter>
                                </Switch>
                                <Switch>
                                    <Route exact path='/login' component={Login}></Route>
                                </Switch>
                                <Switch>
                                    <Route exact path='/register' component={Register}></Route>
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>


        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));