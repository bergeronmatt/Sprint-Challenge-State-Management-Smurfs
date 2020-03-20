import React from 'react';

const Smurfs = props => {
    return (
        <div className='smurf-list'>
            {props.smurfs.map(smurf => (
                <div className='smurf' key={smurf.name}>
                    <h2>{smurf.name}</h2>
                </div>
            ))}
        </div>
    )
}

export default Smurfs