import React, { Component } from 'react';

class Cat extends Component {
  render() {
  	let cls = this.props.inDoubleCatExperiment ? 'col-md-6' : 'col-md-6 col-md-offset-3';

    return (
	    <div className={cls}>
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

export default Cat;