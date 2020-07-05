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
	@media (max-width: 990px) {
		border: none;
		text-align: center;
		padding-top: 8px;
	}
	/* overflow: hidden;
	text-overflow: ellipsis; */
`;

const SImage = styled(Image)`
	width: 150px;
	height: auto;
`;

const SSubtitle = styled.h4`
	color: #777;
	font-weight: 400;
	@media (max-width: 990px) {
		margin: 0 auto;
		font-size: 1.2em;
		padding-top: 8px;
		padding-bottom: 8px;
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
	background-color: #fff;
	box-shadow: 2px 2px 1px #606060;
	max-width: 1000px;
	@media (max-width: 990px) {
		padding: 30px;
	}
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

const SHighlight = styled.span`
	background-color: #fbd1d3;
	padding: 3px;
	color: #000;
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
					<SCol lg={7}>
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
								Ambition to learn and looking for growth.
							</SDescription>
						</SRow>
					</SCol>
					<SCol lg={3}>
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
									Hands-on experience in leading and
									conducting security assessments for both
									small businesses and large corporations;
								</li>
								<li>
									Proficient in front and back-end coding
									languages, such as Python, React.JS,
									TypeScript, Swift, Java, and more;
								</li>
								<li>
									In-depth understanding of application and
									infrastructure penetration testing
									methodologies, relevant tooling and
									techniques;
								</li>
								<li style={{ display: 'none' }}>
									Making headway in cloud security, mobile
									pentesting, configuration reviews and purple
									teaming.
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
									Mar. 2019 • current
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
									Led and conducted various security
									assessments on{' '}
									<SHighlight>
										infrastructure, web and mobile
										applications
									</SHighlight>
									. Shaped and supported the development of a
									brand new service around{' '}
									<SHighlight>
										open-source intelligence
									</SHighlight>
									. Developed and refined various tools and
									scripts to automate the process of external
									asset mapping and footprinting. Contributed
									to open-source tooling to support the
									development of internal services. Performed
									both{' '}
									<SHighlight>
										automated and manual vulnerability
										analysis
									</SHighlight>
									. Actively helped manage, estimate and scope
									out projects. Assisted in the organisation
									and management of the internship programme.
								</SParagraph>
							</SCol>
						</SRow>
						<SRow>
							<SCol xs={12} md={3}>
								<SDetailLabel>App Maven</SDetailLabel>
								<SMetaLabel>
									Jul. 2019 • current
									<br />
									<a
										target={'_blank'}
										href={'https://appmaven.io'}
									>
										appmaven.io
									</a>
								</SMetaLabel>
							</SCol>
							<SCol>
								<SDetailTitle>
									Co-Founder and Managing Director
								</SDetailTitle>
								<SParagraph>
									Developed web and mobile applications for
									startup companies in{' '}
									<SHighlight>
										React (Native) and Swift
									</SHighlight>
									. Managed finances, legal and client
									relationships.{' '}
									<SHighlight>Advised clients</SHighlight> the{' '}
									<SHighlight>
										appropriate technologies
									</SHighlight>{' '}
									for their use case, in order to improve
									their performance and create lasting value
									across their business. Actively persued new
									opportunities to{' '}
									<SHighlight>
										increase transactional work
									</SHighlight>
									.
								</SParagraph>
							</SCol>
						</SRow>
						<SRow>
							<SCol xs={12} md={3}>
								<SDetailLabel>
									The Security Factory
								</SDetailLabel>
								<SMetaLabel>
									May 2017 • Aug. 2017
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
									Assigned to a large Belgian corporation.
									Worked with the security team and{' '}
									<SHighlight>
										reported directly to the CISO
									</SHighlight>
									. Expanded my technical capabilities in{' '}
									<SHighlight>penetration testing</SHighlight>
									, relevant tooling, techniques and
									methodologies. Performed both automated and
									manual security assessments. Developed
									various{' '}
									<SHighlight>
										Python scripts to automate repetitive
										tasks
									</SHighlight>{' '}
									and security checks.
								</SParagraph>
							</SCol>
						</SRow>
						<SRow>
							<SCol xs={12} md={3}>
								<SDetailLabel>Accenture</SDetailLabel>
								<SMetaLabel>
									Oct. 2016 • May 2017
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
									Undertook this role after graduation, where
									I gained an understanding of the various
									business aspects that come with security. I
									supported the security team in consolidating
									bills of materials and{' '}
									<SHighlight>
										hardware procurement for vast
										infrastructures
									</SHighlight>
									. Documented and reviewed Nagios
									configurations and contributed to
									presentations{' '}
									<SHighlight>
										clarifying business roadmaps
									</SHighlight>
									.
								</SParagraph>
							</SCol>
						</SRow>
						<SRow>
							<SCol xs={12} md={3}>
								<SDetailLabel>Accenture</SDetailLabel>
								<SMetaLabel>
									Feb. 2016 • May 2016
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
									Penetration Tester (Intern)
								</SDetailTitle>
								<SParagraph>
									Refined my technical and soft skills at a{' '}
									<SHighlight>semester internship</SHighlight>{' '}
									at the cyber fusion centre in Prague.
									<SHighlight>
										Shadowed security assessments
									</SHighlight>{' '}
									and supported in awareness campaigns for
									various fortune 500 companies.{' '}
									<SHighlight>Organised a CTF</SHighlight> and
									developed challenges for local universities.
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
									MSc. Cybersecurity and Management
									(Distinction)
								</SDetailTitle>
								<SParagraph>
									Applied for the GCHQ certified postgraduate
									course in cybersecurity and management at
									the University of Warwick. The course was
									primarily focused on self-development.
									Studied various modules such as
									cryptosystems and data protection, digital
									forensics, cyber intelligence and
									operations, security architecture and
									network defence. Developed a real-time
									machine learning model for ransomware
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
									BSc. Applied Computer Science, Cybercrime
									(First Class)
								</SDetailTitle>
								<SParagraph>
									Enrolled in the Computer and Cybercrime
									Professional program at University College
									Howest in Bruges, Belgium. Studied the
									essentials of information security policies,
									network hardening and security standards in
									web applications. Reverse-engineered
									malicious binaries for analysis and
									forensics. Expanded my interest in
									cryptography, access control and social
									engineering.
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
							<SSectionTitle>
								Certifications and Courses
							</SSectionTitle>
						</SRow>

						<SRow>
							<SList>
								<li>
									CREST Registered Penetration Tester (CRT)
								</li>
								<li>
									CREST Practitioner Security Analyst (CPSA)
								</li>
								<li>Penetration Testing with Kali (PWK)</li>
								<li>
									CyberArk Privileged Account Security
									Fundamentals
								</li>
								<li>CCNA Security</li>
							</SList>
						</SRow>
					</SCol>
				</SRow>
			</SSection>
		</SContainer>
	);
};

export default MyCV;
