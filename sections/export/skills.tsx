import React from 'react';

import styled from 'styled-components';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Section from './section';

const SContainer = styled(Container)`
	padding: 16px;
`;

const SList = styled.ul`
	font-size: 14px;
	line-height: 1.5;
	color: #000;
`;

const Skills: React.FC<{}> = () => {
	return (
		<SContainer>
			<Section title={'Skills'}>
				<Row>
					<Col>
						<SList>
							<li>
								Experienced in a diverse range of full stack
								coding languages, including Python, React,
								NodeJS, TypeScript, Swift, React-Native, Java,
								and more;
							</li>
							<li>
								Experienced in AWS serverless architecture,
								including Lambda, API Gateway, DynamoDB, and S3,
								with a track record of designing scalable
								solutions and seamless integration with AWS
								services.
							</li>
							<li>
								In-depth understanding of application and
								infrastructure penetration testing
								methodologies, relevant tooling and techniques.
							</li>
						</SList>
					</Col>
				</Row>
			</Section>
		</SContainer>
	);
};

export default Skills;
