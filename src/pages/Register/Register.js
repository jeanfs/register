import React, { Component } from 'react';

// Reactstrap components
import { Container, Row, Col, Button, Card, CardImg, CardBody, CardText } from 'reactstrap';

class Register extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col xs="12">
						<Card>
							<CardImg 
								top 
								width="100%" 
								src="https://placeholdit.imgix.net/?w=318&h=180" alt="Enviar foto" />
							<CardBody>
								<CardText></CardText>
							</CardBody>
						</Card>
                		<Button color="primary">Enviar foto</Button>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Register;