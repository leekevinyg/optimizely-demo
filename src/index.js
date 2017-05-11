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
});
var DispatcherContext = Dispatcher.createContext({});

window.OptimizelyExperiments = {
    activate: function(experimentName) {
    	console.log('activating experiment' + experimentName);
        DispatcherContext.dispatch('experimentActivate', {
            id: experimentName
        });
    },
    deactivate: function(experimentName) {
        DispatcherContext.dispatch('experimentDeactivate', {
            id: experimentName
        });
    }
};