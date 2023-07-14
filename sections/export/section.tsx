import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import styled from 'styled-components';

const SSectionTitle = styled.h5`
	color: #8d0c14;
	font-weight: 300;
	text-transform: uppercase;
	margin-bottom: 16px;
`;

type props = {
	title: string;
};

const Section: React.FC<props> = (props) => {
	return (
		<Row>
			<Col md={{ span: 9, offset: 3 }}>
				<Row>
					<SSectionTitle>{props.title}</SSectionTitle>
				</Row>
				{props.children}
			</Col>
		</Row>
	);
};

export default Section;
