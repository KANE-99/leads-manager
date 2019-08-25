import { combineReducers } from 'redux'
import leads from './leads'
import errors from './errors'
import messages from './messages'

const reducers = combineReducers({
    leads,
    errors,
    messages
})
export default reducers