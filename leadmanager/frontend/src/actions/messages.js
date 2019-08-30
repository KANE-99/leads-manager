import { CREATE_MESSAGE, GET_ERRORS } from './types';

export const createMessage = (msg) => ({
    type: CREATE_MESSAGE,
    payload: msg
})

export const returnErrors = (msg , status) => {
    return {
        type: GET_ERRORS,
        payload: {msg, status}
    } 
}