import React, {useState} from 'react'
import {connect} from 'react-redux'
import {getData, addSmurf} from '../actions'
import axios from 'axios'

const SmurfForm = props => {
    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    }

    const [smurf, setSmurf] = useState({
        name:'',
        age:'',
        height:''
    });

    const handleChanges = e => {
        setSmurf({...smurf, [e.target.name]: e.target.value})
        console.log(`SMURF NAME: ${smurf}`);
    };

    const submitForm = e => {
        e.preventDefault();
        setSmurf({name: smurf.name, age: smurf.age, height: smurf.height})
        axios.post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            console.log(`post response: ${res}`)
        })
        .catch(err => {
            console.log(`post error: ${err}`)
        })
    }

    return(
        <>

            <form onSubmit={submitForm}>
                <label htmlFor='smurfName'>Smurf Name</label>
                <input
                    type='text'
                    name='name'
                    onChange={handleChanges}
                />

                <label htmlFor='smurfAge'>Smurf Age</label>
                <input
                    type='text'
                    name='age'
                    onChange={handleChanges}
                />

                <label htmlFor='smurfHeight'>Smurf Height</label>
                <input
                    type='text'
                    name='height'
                    onChange={handleChanges}
                />
                <button type="submit">Add Smurf</button>

            </form>

            {props.isFetchingData ? (
                <div>...fecthing data...</div>
            ):( 
                <button onClick={handleGetData}>Get Smurfs</button>
            )}
        </>
    )
}

const mapStateToProps = state => {
    return{
        isFetchingData: state.isFetchingData
    };
};

export default connect(
    mapStateToProps,
    {getData, addSmurf}
)(SmurfForm)