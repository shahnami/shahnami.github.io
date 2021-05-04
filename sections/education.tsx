import React from 'react';

import styled, { ThemeProvider } from 'styled-components';
import Section from 'amreact-ui';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import CVSection from '../components/CVSection';

const SRow = styled(Row)``;

const SCol = styled(Col)``;

const SParagraph = styled.p`
	font-size: 14px;
	line-height: 1.5;
	color: #000;
	text-align: justify;
`;

const SContainer = styled.div``;

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
			<Section padding={11}>
				<CVSection title={'Education'}>
					<SRow>
						<SCol xs={12} md={3}>
							<SDetailLabel>University of Warwick</SDetailLabel>
							<SMetaLabel>
								Sept. 2017 • Sept. 2018
								<br />
								<a
									target={'_blank'}
									href={'https://warwick.ac.uk'}
								>
									warwick.ac.uk
								</a>
							</SMetaLabel>
						</SCol>
						<SCol>
							<SDetailTitle>
								MSc. Cybersecurity and Management (Distinction)
							</SDetailTitle>
							<SParagraph>
								Applied for the GCHQ certified postgraduate
								course in cybersecurity and management at the
								University of Warwick. The course was primarily
								focused on self-development. Studied various
								modules such as cryptosystems and data
								protection, digital forensics, cyber
								intelligence and operations, security
								architecture and network defence. Developed a
								real-time machine learning model for ransomware
								detection as part of my dissertation.
							</SParagraph>
						</SCol>
					</SRow>
					<SRow>
						<SCol xs={12} md={3}>
							<SDetailLabel>
								University College Howest
							</SDetailLabel>
							<SMetaLabel>
								Sept. 2013 • Jun. 2016
								<br />
								<a
									target={'_blank'}
									href={'https://www.howest.be'}
								>
									howest.be
								</a>
							</SMetaLabel>
						</SCol>
						<SCol>
							<SDetailTitle>
								BSc. Applied Computer Science, Cybercrime (First
								Class)
							</SDetailTitle>
							<SParagraph>
								Enrolled in the Computer and Cybercrime
								Professional program at University College
								Howest in Bruges, Belgium. Studied the
								essentials of information security policies,
								network hardening and security standards in web
								applications. Reverse-engineered malicious
								binaries for analysis and forensics. Expanded my
								interest in cryptography, access control and
								social engineering.
							</SParagraph>
						</SCol>
					</SRow>
				</CVSection>
			</Section>
		</SContainer>
	);
};

export default Education;
