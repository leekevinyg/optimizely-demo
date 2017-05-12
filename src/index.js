import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ExperimentActions from './actions/ExperimentActions';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

window.OptimizelyExperiments = {
    activate: function(experimentName) {
    	console.log('activating experiment ' + experimentName);
        ExperimentActions.addExperiment(experimentName);
    },
    deactivate: function(experimentName) {
       ExperimentActions.removeExperiment(experimentName);
    }
};