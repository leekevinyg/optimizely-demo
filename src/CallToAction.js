import React, { Component } from 'react';

class CallToAction extends Component {
  render() {
    return (
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
    );
  }
}

export default CallToAction;