import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Reactstrap components
import { Jumbotron, Row, Col, Button } from 'reactstrap';

class Home extends Component {
	render() {
		return (
			<Jumbotron>
				<Row>
					<Col md={{size: 8, offset: 2}}>
						<h1>Home</h1>
						<p>Clique no botão abaixo para fazer o seu cadastro.</p>
						<Button tag={Link} to="/register" color="primary" aria-label="Faça seu cadastro.">Cadastro</Button>
					</Col>
				</Row>
			</Jumbotron>
		)
	}
}

export default Home;