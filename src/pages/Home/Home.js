import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Reactstrap components
import { Container, Row, Col, Button } from 'reactstrap';

class Home extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col>
						<h1>Home</h1>
						<Button tag={Link} to="/register" color="primary">Cadastro</Button>
					</Col>
				</Row>
            </Container>
		)
	}
}

export default Home;