import React from "react";
import "./App.css";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { SmurfReducer as reducer} from '../reducers'
import SmurfForm from './SmurfForm'
import SmurfList from './SmurfList'

const store = createStore(reducer, applyMiddleware(thunk));

function App() {

  return(
    <Provider store={store}>
      <div className = 'App'>
        <h1>Smurf List</h1>
        <SmurfForm/>
        <div className="smurf-container">
          <SmurfList/>
        </div>
      </div>
    </Provider>
  )

}

export default App;
