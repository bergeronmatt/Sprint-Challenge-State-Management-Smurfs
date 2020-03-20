import React from 'react'
import {connect} from 'react-redux'

const SmurfList = props => {
    console.log(`Props: ${props.smurfs}`)
    return(
        <>
            {props.error ? (<div className='error'>{props.error}</div>): props.smurfs.map(smurf => (
                <div className='smurfCard'>
                    <div key={smurf.id}className='smurfBio'>
                        <h1>{smurf.name}</h1>
                        <p>{smurf.age}</p>
                        <p>{smurf.height}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

const mapPropsToState = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(
    mapPropsToState,
    {}
)(SmurfList);