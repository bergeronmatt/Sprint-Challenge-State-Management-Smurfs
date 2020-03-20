
import axios from 'axios'
import { connect } from 'react-redux'

export const GET_DATA= 'GET_DATA'
export const ADD_SMURF = 'ADD_SMURF'
export const SET_ERROR = 'SET_ERROR'


export const getData = () => dispatch => {
    dispatch({type: GET_DATA})
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(`Actions Response: ${res}`)
    })
    .catch(err => {
        console.log(`Actions Error catching data from API: ${err}`)
        dispatch({type: SET_ERROR, payload: 'error fetching data from api'})
    })
}


