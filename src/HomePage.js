import React, { Component } from 'react';
import Cat from './components/Cat';
import ExperimentStore from './store/ExperimentStore';
import './HomePage.css';

class HomePage extends Component {

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
    console.log('setting experiment state in our main component (homepage)');
    this.setState(experiments);
  }

  render() {
    let experiments = this.state.experiments;

    if (experiments.has('double-cat')) {
      return (
        <div>
          <Cat inDoubleCatExperiment={true} />
          <Cat inDoubleCatExperiment={true} />
        </div>
      );
    }

    return (
	<Cat inDoubleCatExperiment={false} />
    );
  }
}

export default HomePage;
