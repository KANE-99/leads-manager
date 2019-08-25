import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types.js'
import axios from 'axios'
import {createMessage} from '../actions/messages'

export const getLeads = () => dispatch => {
    axios.get('api/leads/')
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}
export const deleteLeads = (id) => dispatch => {
    axios.delete(`api/leads/${id}/`)
        .then(res => {
            dispatch(createMessage({ delete_lead: 'Lead Deleted' }));
            dispatch({
                type: DELETE_LEAD,
                payload: id
            })
        }).catch(err => console.log(err))
}
export const addLead = lead => dispatch => {
    axios.post("api/leads/", lead)
        .then(res => {
            dispatch(createMessage({ add_lead: 'Lead Added' }))
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            })
        }).catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        })
}