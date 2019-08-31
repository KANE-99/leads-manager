import { combineReducers } from 'redux'
import leads from './leads'
import errors from './errors'
import messages from './messages'
import auth from './auth'

const reducers = combineReducers({
    leads,
    errors,
    messages,
    auth
})
export default reducers