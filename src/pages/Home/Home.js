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
						<p>Olá, clique no botão abaixo para iniciar o seu processo de registro.</p>
						<Button tag={Link} to="/register" color="primary">Cadastro</Button>
					</Col>
				</Row>
            </Container>
		)
	}
}

export default Home;