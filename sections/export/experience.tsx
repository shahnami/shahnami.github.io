import React from 'react';

import styled from 'styled-components';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Section from './section';

const SContainer = styled(Container)`
	padding: 16px;
	padding-bottom: 32px;
`;

const SParagraph = styled.p`
	font-size: 14px;
	line-height: 1.5;
	color: #000;
	text-align: justify;
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

const Experience: React.FC<{}> = () => {
	return (
		<SContainer>
			<Section title="Experience">
				<Row>
					<Col md={3}>
						<SDetailLabel>OpenZeppelin</SDetailLabel>
						<SMetaLabel>
							Jul. 2021 • current
							<br />
							<a
								target={'_blank'}
								href={'https://openzeppelin.com'}
							>
								openzeppelin.com
							</a>
						</SMetaLabel>
					</Col>
					<Col>
						<SDetailTitle>
							Full Stack Ethereum Developer
						</SDetailTitle>
						<SParagraph>
							Demonstrated comprehensive expertise in{' '}
							<SHighlight>full stack development</SHighlight>,
							leveraging TypeScript, Node.js, Svelte, and the AWS
							serverless stack. Led project development efforts,
							including seamless migrations. Conducted{' '}
							<SHighlight>engaging webinars</SHighlight> and
							promptly addressed support requests, providing
							valuable assistance
						</SParagraph>
					</Col>
				</Row>
				<Row>
					<Col md={3}>
						<SDetailLabel>App Maven</SDetailLabel>
						<SMetaLabel>
							Jul. 2019 • Jul. 2023
							<br />
							<a target={'_blank'} href={'https://appmaven.io'}>
								appmaven.io
							</a>
						</SMetaLabel>
					</Col>
					<Col>
						<SDetailTitle>
							Co-Founder and Managing Director
						</SDetailTitle>
						<SParagraph>
							Developed{' '}
							<SHighlight>web and mobile applications</SHighlight>{' '}
							for startup companies using React (Native) and
							Swift. Managed finances, legal matters, and client
							relationships.{' '}
							<SHighlight>Provided strategic guidance</SHighlight>{' '}
							to clients on adopting appropriate technologies to
							enhance performance and generate long-term value for
							their businesses. Actively pursued new opportunities
							to expand{' '}
							<SHighlight>transactional work</SHighlight>.
						</SParagraph>
					</Col>
				</Row>
				<Row>
					<Col md={3}>
						<SDetailLabel>MWR InfoSecurity</SDetailLabel>
						<SMetaLabel>
							Mar. 2019 • Jun. 2021
							<br />
							<a target={'_blank'} href={'https://f-secure.com'}>
								f-secure.com
							</a>
						</SMetaLabel>
					</Col>
					<Col>
						<SDetailTitle>Security Consultant</SDetailTitle>
						<SParagraph>
							Led and conducted diverse security assessments on{' '}
							<SHighlight>
								infrastructure, web, and mobile applications
							</SHighlight>
							. Played a key role in shaping and supporting the
							development of a new{' '}
							<SHighlight>open-source intelligence</SHighlight>.
							service. Developed and refined tools and scripts for
							automating external asset mapping and footprinting.
							Contributed to open-source tooling, aiding internal
							service development. Conducted{' '}
							<SHighlight>
								automated and manual vulnerability analysis
							</SHighlight>
							. Actively assisted in project management,
							estimation, and scoping. Supported the organization
							and management of the internship program.
						</SParagraph>
					</Col>
				</Row>
				<Row>
					<Col md={3}>
						<SDetailLabel>The Security Factory</SDetailLabel>
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
					</Col>
					<Col>
						<SDetailTitle>Penetration Tester</SDetailTitle>
						<SParagraph>
							Appointed to a leading Belgian corporation,
							collaborated with the security team, and{' '}
							<SHighlight>reported to the CISO</SHighlight>.
							Expanded expertise in{' '}
							<SHighlight>penetration testing</SHighlight>,
							tooling, techniques, and methodologies. Conducted
							comprehensive security assessments and developed
							Python scripts for{' '}
							<SHighlight>task automation</SHighlight> and
							strengthening security.
						</SParagraph>
					</Col>
				</Row>
				<Row>
					<Col md={3}>
						<SDetailLabel>Accenture</SDetailLabel>
						<SMetaLabel>
							Oct. 2016 • May 2017
							<br />
							<a target={'_blank'} href={'https://accenture.com'}>
								accenture.com
							</a>
						</SMetaLabel>
					</Col>
					<Col>
						<SDetailTitle>
							Security Implementation Services Associate
						</SDetailTitle>

						<SParagraph>
							Assumed this role post-graduation, acquiring
							comprehensive insights into the multifaceted
							business aspects associated with security. Provided
							invaluable assistance to the security team in{' '}
							<SHighlight>
								streamlining bills of materials
							</SHighlight>{' '}
							and procuring hardware for extensive
							infrastructures. Thoroughly documented and reviewed
							Nagios configurations while actively contributing to
							presentations,{' '}
							<SHighlight>
								elucidating business roadmaps
							</SHighlight>
							.
						</SParagraph>
					</Col>
				</Row>
				<Row>
					<Col md={3}>
						<SDetailLabel>Accenture</SDetailLabel>
						<SMetaLabel>
							Feb. 2016 • May 2016
							<br />
							<a target={'_blank'} href={'https://accenture.com'}>
								accenture.com
							</a>
						</SMetaLabel>
					</Col>
					<Col>
						<SDetailTitle>Penetration Tester (Intern)</SDetailTitle>
						<SParagraph>
							Enhanced technical and soft skills through a{' '}
							<SHighlight>semester internship</SHighlight> at the
							Cyber Fusion Centre in Prague. Assisted in{' '}
							<SHighlight>security assessments</SHighlight> and
							contributed to awareness campaigns for Fortune 500
							companies. Orchestrated a{' '}
							<SHighlight>
								Capture the Flag (CTF) event
							</SHighlight>{' '}
							and created challenges for local universities.
						</SParagraph>
					</Col>
				</Row>
			</Section>
		</SContainer>
	);
};

export default Experience;
