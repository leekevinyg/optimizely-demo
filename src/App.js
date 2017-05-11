import React, { Component } from 'react';
import CallToAction from './CallToAction';
import ExperimentStore from './store/ExperimentStore';
import './App.css';

class App extends Component {
  
  static contextTypes = {
    getStore: React.PropTypes.func.isRequired;
  }

  // Examples: https://github.com/yahoo/fluxible/tree/master/examples/todo
  constructor(props) {
    super(props);
    this.state = this.getStoreState();
  }

  componentDidMount() {
    console.log(ExperimentStore);
  	ExperimentStore.addChangeListener(this._updateExperiments);
  }

  componentWillUnmount() {
  	ExperimentStore.removeChangeListener(this._updateExperiments);
  }

  _updateExperiments() {
  	console.log('updating experiment state');
  	this.setState({ 
  		experiments: ExperimentStore.getExperiments() 
  	});
  }

  render() {
    return (
      <div className="container">

	      <div className="row">

	      	<CallToAction />

	      	<div className="col-md-6">
	      		<div className="row text-center">
	      			<img className="logo" src="http://placehold.it/100x100" alt=""/>
	      		</div>
	      		<div className="row text-center">
	      			<h2>Collect money from your group and make something happen</h2>
	      		</div>
	      		<div className="row text-center">
	      			<button type="button" className="btn btn-success">Get Started</button>
	      		</div>
	      	</div>

	      </div>

      </div>
    );
  }
}

export default App;
