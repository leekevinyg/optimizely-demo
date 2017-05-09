import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">

	      <div className="row">

	      	<div className="col-md-6">
	      		<div className="row text-center">
	      			<img class="logo" src="http://placehold.it/100x100" alt=""/>
	      		</div>
	      		<div className="row text-center">
	      			<h2>Collect money from your group and make something happen</h2>
	      		</div>
	      		<div className="row text-center">
	      			<button type="button" className="btn btn-success">Get Started</button>
	      		</div>
	      	</div>



	      	<div className="col-md-6">
	      		<div className="row text-center">
	      			<img class="logo" src="http://placehold.it/100x100" alt=""/>
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
