import React, { Component } from 'react';
import CallToAction from './components/CallToAction';
import ExperimentStore from './store/ExperimentStore';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = ExperimentStore.getState();
  }

  componentDidMount() {
  	ExperimentStore.listen(this.updateExperiments.bind(this));
  }

  componentWillUnmount() {
  	ExperimentStore.unlisten(this.updateExperiments.bind(this));
  }

  updateExperiments(experiments) {
    console.log('setting experiment state in our main component');
    this.setState(experiments);
  }

  render() {
    let experiments = this.state.experiments;

    if (experiments.has('homepage-feed')) {
      return (
        <div>Splash Page Feed Activiated!</div>
      );
    }

    return (
      <div className="container">
	      <div className="row">
	      	<CallToAction />
	      </div>
      </div>
    );
  }
}

export default App;
