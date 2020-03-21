import {GET_DATA, ADD_SMURF, SET_ERROR, UPDATE_LIST} from '../actions'

const initialState = {
    smurfs: [],
    isFetchingData: false,
    error: ''
}

export const SmurfReducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_DATA:
            return {
                ...state,
                isFetchingData: true,
            };
        case UPDATE_LIST:
            return {
                ...state,
                smurfs: action.payload,
                isFetchingData: false
            }
        case ADD_SMURF:
            return {
                ...state,
                smurfs: action.payload,
                isFetchingData: false
            }
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        default:
            return state
    }

}