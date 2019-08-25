import { GET_LEADS,DELETE_LEAD } from "../actions/types";

const initialstate = {
    leads:[]
}
export default function(state = initialstate, action){
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,
                leads:action.payload
            } 
        case DELETE_LEAD:
            return {
                ...state,
                leads:state.leads.filter(lead => lead.id !== action.payload)
            }   
        default:
            return state;
    }
}