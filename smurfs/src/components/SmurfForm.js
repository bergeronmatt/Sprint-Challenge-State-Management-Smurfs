import React, {useState} from 'react'
import {connect} from 'react-redux'
import {getData, addSmurf} from '../actions'

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
        props.addSmurf(smurf);
        setSmurf({name:'', age:'', height:''})
    }

    return(
        <>

            <form onSubmit={submitForm}>
                <label htmlFor='smurfName'>Smurf Name</label>
                <input
                    id='smurfName'
                    type='text'
                    name='smurfName'
                    onChange={handleChanges}
                    value={smurf.name}
                />

                <label htmlFor='smurfAge'>Smurf Age</label>
                <input
                    id='smurfAge'
                    type='text'
                    name='smurfAge'
                    onChange={handleChanges}
                    value={smurf.age}
                />

                <label htmlFor='smurfHeight'>Smurf Height</label>
                <input
                    id='smurfHeigh'
                    type='text'
                    name='smurfHeight'
                    onChange={handleChanges}
                    value={smurf.height}
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
    {getData}
)(SmurfForm)