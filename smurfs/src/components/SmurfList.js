import React, {useState, useEffect} from 'react';
import Smurfs from './Smurfs';
import Axios from 'axios';

function SmurfList () {

    const {smurfs, setSmurfs} = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(`Smurf List Response: ${res}`)
        })
        .catch(err => {
            console.log(`Smurf List Error: ${err}`)
        })
    })

    return (
        <div>
            <h1>Smurf List</h1>
            <Smurfs />
        </div>
    )
};

export default SmurfList;