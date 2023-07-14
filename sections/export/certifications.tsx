import React from 'react';

import styled from 'styled-components';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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

const Certifications: React.FC<{}> = () => {
	return (
		<SContainer>
			<Section title="Certifications and Courses">
				<Row>
					<Col>
						<SList>
							<li>CREST Registered Penetration Tester (CRT)</li>
							<li>CREST Practitioner Security Analyst (CPSA)</li>
							<li>Penetration Testing with Kali (PWK)</li>
							<li>
								CyberArk Privileged Account Security
								Fundamentals
							</li>
							<li>CCNA Security</li>
						</SList>
					</Col>
				</Row>
			</Section>
		</SContainer>
	);
};

export default Certifications;
