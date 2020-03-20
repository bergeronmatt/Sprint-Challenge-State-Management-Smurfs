import React from 'react';


const Smurfs = props => {
    return (
      <div className="smurf-list">
        {props.smurfs.map(smurf => (
      
          <div className="smurf" key={smurf.id}>
            <h2>{smurf.name}</h2>
            <p>{smurf.email}</p>
          </div>
       
        ))}
      </div>
    );
  };

export default Smurfs;