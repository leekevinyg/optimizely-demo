import React, { Component } from 'react';
import CallToAction from './components/CallToAction';
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

    if (experiments.has('homepage-feed')) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
             Splash Page Feed Activiated!
            </div>
            <CallToAction />
          </div>
        </div>
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

export default HomePage;
