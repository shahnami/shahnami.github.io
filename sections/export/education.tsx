import React from 'react';

import styled from 'styled-components';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Section from './section';

const SParagraph = styled.p`
	font-size: 14px;
	line-height: 1.5;
	color: #000;
	text-align: justify;
`;

const SContainer = styled(Container)`
	padding: 16px;
`;

const SDetailLabel = styled.p`
	background-color: #eee;
	color: #777;
	padding: 3px 7px;
	margin-bottom: 5px;
	border-radius: 2px;
	text-transform: uppercase;
	font-size: 12px;
	text-align: right;
`;

const SMetaLabel = styled.p`
	text-align: right;
	font-size: 12px;
	line-height: 1.5;
	color: #000;
`;

const SDetailTitle = styled.h6`
	color: #333;
	font-weight: 400;
	font-size: 18px;
	line-height: 1.3;
`;

const Education: React.FC<{}> = () => {
	return (
		<SContainer>
			<Section title="Education">
				<Row>
					<Col xs={12} md={3}>
						<SDetailLabel>University of Warwick</SDetailLabel>
						<SMetaLabel>
							Sept. 2017 • Sept. 2018
							<br />
							<a target={'_blank'} href={'https://warwick.ac.uk'}>
								warwick.ac.uk
							</a>
						</SMetaLabel>
					</Col>
					<Col>
						<SDetailTitle>
							MSc. Cybersecurity and Management (Distinction)
						</SDetailTitle>
						<SParagraph>
							Enrolled in the GCHQ certified postgraduate course
							in cybersecurity and management at the University of
							Warwick, with a strong emphasis on self-development.
							Studied comprehensive modules covering areas such as
							cryptosystems, data protection, digital forensics,
							cyber intelligence and operations, security
							architecture, and network defense. Completed a
							dissertation project centered around the development
							of a real-time machine learning model for ransomware
							detection.
						</SParagraph>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={3}>
						<SDetailLabel>University College Howest</SDetailLabel>
						<SMetaLabel>
							Sept. 2013 • Jun. 2016
							<br />
							<a target={'_blank'} href={'https://www.howest.be'}>
								howest.be
							</a>
						</SMetaLabel>
					</Col>
					<Col>
						<SDetailTitle>
							BSc. Applied Computer Science, Cybercrime (First
							Class)
						</SDetailTitle>
						<SParagraph>
							Enrolled in the Computer and Cybercrime Professional
							program at University College Howest in Bruges,
							Belgium. Acquired comprehensive knowledge of
							information security policies, network hardening,
							and security standards for web applications. Engaged
							in reverse-engineering of malicious binaries for
							analysis and forensic purposes. Further developed a
							keen interest in cryptography, access control, and
							social engineering.
						</SParagraph>
					</Col>
				</Row>
			</Section>
		</SContainer>
	);
};

export default Education;
