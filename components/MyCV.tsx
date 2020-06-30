import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import styled, { ThemeProvider } from 'styled-components';
import Section from 'amreact-ui';

const SRow = styled(Row)`
	/* border: 1px solid red; */
	/* justify-content: center; */
`;

const SCol = styled(Col)`
	/* border: 1px solid blue; */
`;

const SRowMeta = styled(Row)`
	border-left: 1px solid #e0e0e0;
	padding-left: 15px;
	align-items: flex-end;
	align-content: flex-end;
`;

const SImage = styled(Image)`
	min-width: 150px;
	max-width: 150px;
	height: auto;
`;

const SSubtitle = styled.h4`
	color: #777;
	font-weight: 300;
`;

const STitle = styled.h1`
	color: #8d0c14;
	font-weight: 500;
	text-transform: uppercase;
`;

const SSectionTitle = styled.h5`
	color: #8d0c14;
	font-weight: 300;
	text-transform: uppercase;
	margin-bottom: 15px;
`;

const SParagraph = styled.p`
	font-size: 14px;
	line-height: 1.5;
	color: #000;
`;

const SSection = styled.div`
	margin-top: 1.5em;
`;

const SList = styled.ul`
	font-size: 14px;
	line-height: 1.5;
	color: #000;
`;

const SDetailLabel = styled.p`
	background-color: #eee;
	color: #777;
	padding: 3px 7px;
	margin-bottom: 5px;
	border-radius: 2px;
	text-transform: uppercase;
	font-size: 13px;
	text-align: right;
`;

const SDetailTitle = styled.h6`
	color: #333;
	font-weight: 400;
	font-size: 18px;
	line-height: 1.3;
`;

const MyCV: React.FC<{}> = () => {
	return (
		<Container>
			<SSection>
				<SRow>
					<SCol lg={2}>
						<SImage
							src={'/static/images/profile.jpeg'}
							thumbnail={true}
						/>
					</SCol>
					<SCol lg={8}>
						<SRow>
							<STitle>Nami Shah</STitle>
						</SRow>
						<SRow>
							<SSubtitle>Cybersecurity Consultant</SSubtitle>
						</SRow>
						<SRow>
							<SParagraph>
								Background in <b>development</b>. Experience in{' '}
								<b>security</b>
								<br />
								Ambition to learn. Looking for growth.
							</SParagraph>
						</SRow>
					</SCol>
					<SCol lg={2}>
						<SRowMeta>
							<a target={'_blank'} href="https://www.nami.sh">
								www.nami.sh
							</a>
						</SRowMeta>
						<SRowMeta>
							<a href="mailto:me@nami.sh">me@nami.sh</a>
						</SRowMeta>
						<SRowMeta style={{}}>
							<a
								target={'_blank'}
								href="https://linkedin.com/in/namis"
							>
								linkedin.com/in/namis
							</a>
						</SRowMeta>
					</SCol>
				</SRow>
			</SSection>
			<SSection>
				<SRow>
					<SCol lg={2}></SCol>
					<SCol lg={8}>
						<SRow>
							<SSectionTitle>Skills</SSectionTitle>
						</SRow>

						<SRow>
							<SList>
								<li>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</li>
								<li>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</li>
								<li>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</li>
								<li>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</li>
							</SList>
						</SRow>
					</SCol>
				</SRow>
			</SSection>
			<SSection>
				<SRow>
					<SCol lg={2}></SCol>
					<SCol lg={8}>
						<SRow>
							<SSectionTitle>Experience</SSectionTitle>
						</SRow>
						<SRow>
							<SCol xs={4} md={3} lg={3}>
								<SDetailLabel>MWR InfoSecurity</SDetailLabel>
								<SParagraph style={{ textAlign: 'right' }}>
									Mar 2019 - current
									<br />
									<a
										target={'_blank'}
										href={'http://f-secure.com'}
									>
										f-secure.com
									</a>
								</SParagraph>
							</SCol>
							<SCol>
								<SDetailTitle>Security Consultant</SDetailTitle>
								<SParagraph>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</SParagraph>
							</SCol>
						</SRow>
						<SRow>
							<SCol xs={4} md={3} lg={3}>
								<SDetailLabel>
									The Security Factory
								</SDetailLabel>
								<SParagraph style={{ textAlign: 'right' }}>
									May 2017 - Aug 2017
									<br />
									<a
										target={'_blank'}
										href={'http://thesecurityfactory.be'}
									>
										thesecurityfactory.be
									</a>
								</SParagraph>
							</SCol>
							<SCol>
								<SDetailTitle>Penetration Tester</SDetailTitle>
								<SParagraph>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</SParagraph>
							</SCol>
						</SRow>
						<SRow>
							<SCol xs={4} md={3} lg={3}>
								<SDetailLabel>Accenture</SDetailLabel>
								<SParagraph style={{ textAlign: 'right' }}>
									Oct 2016 - May 2017
									<br />
									<a
										target={'_blank'}
										href={'http://accenture.com'}
									>
										accenture.com
									</a>
								</SParagraph>
							</SCol>
							<SCol>
								<SDetailTitle>
									Security Implementation Services Associate
								</SDetailTitle>
								<SParagraph>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</SParagraph>
							</SCol>
						</SRow>
					</SCol>
				</SRow>
			</SSection>
			<SSection>
				<SRow>
					<SCol lg={2}></SCol>
					<SCol lg={8}>
						<SRow>
							<SSectionTitle>Education</SSectionTitle>
						</SRow>
						<SRow>
							<SCol xs={4} md={3} lg={3}>
								<SDetailLabel>
									University of Warwick
								</SDetailLabel>
								<SParagraph style={{ textAlign: 'right' }}>
									Sept 2017 - Sept 2018
									<br />
									<a
										target={'_blank'}
										href={'https://warwick.ac.uk'}
									>
										warwick.ac.uk
									</a>
								</SParagraph>
							</SCol>
							<SCol>
								<SDetailTitle>
									MSc. Cybersecurity and Management
									(Distinction)
								</SDetailTitle>
								<SParagraph>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</SParagraph>
							</SCol>
						</SRow>
						<SRow>
							<SCol xs={4} md={3} lg={3}>
								<SDetailLabel>
									University College Howest
								</SDetailLabel>
								<SParagraph style={{ textAlign: 'right' }}>
									Sept 2013 - June 2016
									<br />
									<a
										target={'_blank'}
										href={'https://www.howest.be'}
									>
										howest.be
									</a>
								</SParagraph>
							</SCol>
							<SCol>
								<SDetailTitle>
									BSc. Applied Computer Science, Cybercrime
									(First Class)
								</SDetailTitle>
								<SParagraph>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat. Duis aute irure
									dolor in reprehenderit in voluptate velit
									esse cillum dolore eu fugiat nulla pariatur.
									Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</SParagraph>
							</SCol>
						</SRow>
					</SCol>
				</SRow>
			</SSection>
		</Container>
	);
};

export default MyCV;
