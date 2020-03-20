
import axios from 'axios'

export const GET_DATA= 'GET_DATA'
export const UPDATE_LIST = 'UPDATE_LIST'
export const ADD_SMURF = 'ADD_SMURF'
export const SET_ERROR = 'SET_ERROR'



export const getData = () => dispatch => {
    dispatch({type: GET_DATA})
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(`Actions Response: ${res.data}`)
        dispatch({type: UPDATE_LIST, payload: res.data})
    })
    .catch(err => {
        console.log(`Actions Error catching data from API: ${err}`)
        dispatch({type: SET_ERROR, payload: 'error fetching data from api'})
    })
}

export const addSmurf = creds => dispatch => {
    return axios.post('http://localhost:3333/smurfs', creds)
    .then(res => {
        const addedSmurf = {type: ADD_SMURF, payload: res}
        dispatch(addedSmurf)
    })
}


