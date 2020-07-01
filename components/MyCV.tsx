import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import styled, { ThemeProvider } from 'styled-components';

const SRow = styled(Row)`
	/* border: 1px solid red; */
	/* justify-content: center; */
`;

const SCol = styled(Col)`
	/* border: 1px solid blue; */
`;

const SColMeta = styled(Col)`
	border-left: 1px solid #e0e0e0;
	padding-left: 15px;
	align-items: flex-end;
	align-content: flex-end;
	@media (max-width: 990px) {
		border: none;
		text-align: center;
		padding-top: 8px;
	}
`;

const SImage = styled(Image)`
	width: 150px;
	height: auto;
`;

const SSubtitle = styled.h4`
	color: #777;
	font-weight: 300;
	@media (max-width: 990px) {
		margin: 0 auto;
		font-size: 1.4em;
		padding-top: 8px;
	}
`;

const STitle = styled.h1`
	color: #8d0c14;
	font-weight: 500;
	text-transform: uppercase;
	@media (max-width: 990px) {
		margin: 0 auto;
		padding-top: 8px;
	}
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
	text-align: justify;
`;

const SDescription = styled.p`
	font-size: 14px;
	line-height: 1.5;
	color: #000;
	@media (max-width: 990px) {
		margin: 0 auto;
		text-align: center;
		padding-top: 8px;
	}
`;

const SContainer = styled(Container)`
	padding: 50px;
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

const MyCV: React.FC<{}> = () => {
	return (
		<SContainer>
			<SSection>
				<SRow>
					<SCol lg={2}>
						<SImage
							className={'mx-auto text-center d-block'}
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
							<SDescription>
								Background in <b>development</b>. Experience in{' '}
								<b>security</b>
								<br />
								Ambition to learn. Looking for growth.
							</SDescription>
						</SRow>
					</SCol>
					<SCol lg={2}>
						<SRow>
							<SColMeta xs={12} sm={6} md={3} lg={12}>
								<a target={'_blank'} href="https://www.nami.sh">
									www.nami.sh
								</a>
							</SColMeta>
							<SColMeta xs={12} sm={6} md={3} lg={12}>
								<a href="mailto:me@nami.sh">me@nami.sh</a>
							</SColMeta>
							<SColMeta xs={12} sm={6} md={3} lg={12}>
								<a
									target={'_blank'}
									href="https://linkedin.com/in/namis"
								>
									linkedin.com/in/namis
								</a>
							</SColMeta>
							<SColMeta xs={12} sm={6} md={3} lg={12}>
								<a
									target={'_blank'}
									href="https://keybase.io/namis/pgp_keys.asc"
								>
									keybase.io/namis
								</a>
							</SColMeta>
						</SRow>
					</SCol>
				</SRow>
			</SSection>
			<SSection>
				<SRow>
					<SCol lg={{ span: 8, offset: 2 }}>
						<SRow>
							<SSectionTitle>Skills</SSectionTitle>
						</SRow>

						<SRow>
							<SList>
								<li>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiuxsod tempor
									incididunt ut labore et dolore magna aliqua.
								</li>
								<li>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiuxsod tempor
									incididunt ut labore et dolore magna aliqua.
								</li>
								<li>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiuxsod tempor
									incididunt ut labore et dolore magna aliqua.
								</li>
								<li>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiuxsod tempor
									incididunt ut labore et dolore magna aliqua.
								</li>
							</SList>
						</SRow>
					</SCol>
				</SRow>
			</SSection>
			<SSection>
				<SRow>
					<SCol lg={{ span: 8, offset: 2 }}>
						<SRow>
							<SSectionTitle>Experience</SSectionTitle>
						</SRow>
						<SRow>
							<SCol xs={12} md={3}>
								<SDetailLabel>MWR InfoSecurity</SDetailLabel>
								<SMetaLabel>
									Mar. 2019 - current
									<br />
									<a
										target={'_blank'}
										href={'https://f-secure.com'}
									>
										f-secure.com
									</a>
								</SMetaLabel>
							</SCol>
							<SCol>
								<SDetailTitle>Security Consultant</SDetailTitle>
								<SParagraph>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiuxsod tempor
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
							<SCol xs={12} md={3}>
								<SDetailLabel>
									The Security Factory
								</SDetailLabel>
								<SMetaLabel>
									May 2017 - Aug. 2017
									<br />
									<a
										target={'_blank'}
										href={'https://thesecurityfactory.be'}
									>
										thesecurityfactory.be
									</a>
								</SMetaLabel>
							</SCol>
							<SCol>
								<SDetailTitle>Penetration Tester</SDetailTitle>
								<SParagraph>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiuxsod tempor
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
							<SCol xs={12} md={3}>
								<SDetailLabel>Accenture</SDetailLabel>
								<SMetaLabel>
									Oct. 2016 - May 2017
									<br />
									<a
										target={'_blank'}
										href={'https://accenture.com'}
									>
										accenture.com
									</a>
								</SMetaLabel>
							</SCol>
							<SCol>
								<SDetailTitle>
									Security Implementation Services Associate
								</SDetailTitle>
								<SParagraph>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiuxsod tempor
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
					<SCol lg={{ span: 8, offset: 2 }}>
						<SRow>
							<SSectionTitle>Education</SSectionTitle>
						</SRow>
						<SRow>
							<SCol xs={12} md={3}>
								<SDetailLabel>
									University of Warwick
								</SDetailLabel>
								<SMetaLabel>
									Sept. 2017 - Sept. 2018
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
									MSc. Cybersecurity and Management
									(Distinction)
								</SDetailTitle>
								<SParagraph>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiuxsod tempor
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
							<SCol xs={12} md={3}>
								<SDetailLabel>
									University College Howest
								</SDetailLabel>
								<SMetaLabel>
									Sept. 2013 - Jun. 2016
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
									BSc. Applied Computer Science, Cybercrime
									(First Class)
								</SDetailTitle>
								<SParagraph>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiuxsod tempor
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
		</SContainer>
	);
};

export default MyCV;
