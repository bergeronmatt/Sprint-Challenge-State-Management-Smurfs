import React, {useState, useEffect} from 'react';
import Smurfs from './Smurfs';
import axios from 'axios';

function SmurfList () {

    const {smurfs, setSmurfs} = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(`Smurf List Response: ${res}`)
            setSmurfs(res.data)
        })
        .catch(err => {
            console.log(`Smurf List Error: ${err}`)
        })
    })

    return (
        <div>
            <h1>Smurf List</h1>
            <Smurfs smurfs={smurfs} />
        </div>
    )
};

export default SmurfList;