import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dispatcher from 'dispatchr';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

console.log('in index.js');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

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