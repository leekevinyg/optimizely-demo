import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import ExperimentActions from './actions/ExperimentActions';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <HomePage />,
  document.getElementById('app')
);

window.OptimizelyExperiments = {
    activate: function(experimentName) {
    	console.log('activating experiment ' + experimentName + ' from OptimizelyExperiments hook');
        ExperimentActions.addExperiment(experimentName);
    },
    deactivate: function(experimentName) {
    	console.log('deactivating experiment ' + experimentName + ' from OptimizelyExperiments hook');
       ExperimentActions.removeExperiment(experimentName);
    }
};