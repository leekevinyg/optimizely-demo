import React, { Component } from 'react';
import CallToAction from './components/CallToAction';
import ExperimentStore from './store/ExperimentStore';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      experiments: ExperimentStore.getState()
    };
  }

  componentDidMount() {
  	ExperimentStore.listen(this.updateExperiments.bind(this));
  }

  componentWillUnmount() {
  	ExperimentStore.unlisten(this.updateExperiments.bind(this));
  }

  updateExperiments(state) {
     this.setState({
        experiments: state
     });
     debugger;
  }

  render() {
    if (this.state.experiments.id === 'homepage-feed') {
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
