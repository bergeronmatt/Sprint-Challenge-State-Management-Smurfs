import React from 'react'

import {getData} from '../actions'

const SmurfForm = props => {
    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    }

    return(
        <>
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