import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import Home from '../pages/Home/Home';
import SignUp from '../pages/SignUp/SignUp';
import Summary from '../pages/Summary/Summary';
import Success from '../pages/Success/Success';

class AppRouter extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/sign-up" component={SignUp} />
				<Route exact path="/summary" component={Summary} />
				<Route exact path="/success" component={Success} />
			</Switch>
		)
	}
}

export default AppRouter;