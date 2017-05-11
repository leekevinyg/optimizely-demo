import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ExperimentStore from './store/ExperimentStore';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

var Dispatcher = require('dispatchr').createDispatcher({
    stores: [ExperimentStore]
}).createContext({});

window.OptimizelyExperiments = {
    activate: function(experimentName) {
    	console.log('activating experiment' + experimentName);
        Dispatcher.dispatch('experimentActivate', {
            id: experimentName
        });
    },
    deactivate: function(experimentName) {
        Dispatcher.dispatch('experimentDeactivate', {
            id: experimentName
        });
    }
};