import React, { Component } from 'react';

class CallToAction extends Component {
  render() {
    return (
	    <div className="col-md-6">
	      	<div className="row text-center">
	      		<img className="logo" src="http://placekitten.com/g/408/287" alt=""/>
	      	</div>
	      	<div className="row text-center">
	      		<h2>You know you want to adopt me.</h2>
	      	</div>
	      	<div className="row text-center">
	      		<button type="button" className="btn btn-success">Adopt Me</button>
	      	</div>
	    </div>
    );
  }
}

export default CallToAction;