

export const ADD_SMURF = 'ADD_SMURF';


export const addSmurf = newSmurfName => {
    return {
        type: ADD_SMURF,
        payload: {name: newSmurfName}
    };
};

