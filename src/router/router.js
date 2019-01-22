import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Summary from '../pages/Summary/Summary';
import Success from '../pages/Success/Success';

class Router extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/summary" component={Summary} />
				<Route exact path="/success" component={Success} />
			</Switch>
		)
	}
}

export default Router;