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

const SHighlight = styled.span`
	background-color: #fbd1d3;
	padding: 3px;
	color: #000;
`;

const Experience: React.FC<{}> = () => {
	return (
		<SContainer>
			<Section padding={11}>
				<CVSection title={'Experience'}>
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
								Led and conducted various security assessments
								on{' '}
								<SHighlight>
									infrastructure, web and mobile applications
								</SHighlight>
								. Shaped and supported the development of a
								brand new service around{' '}
								<SHighlight>
									open-source intelligence
								</SHighlight>
								. Developed and refined various tools and
								scripts to automate the process of external
								asset mapping and footprinting. Contributed to
								open-source tooling to support the development
								of internal services. Performed both{' '}
								<SHighlight>
									automated and manual vulnerability analysis
								</SHighlight>
								. Actively helped manage, estimate and scope out
								projects. Assisted in the organisation and
								management of the internship programme.
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
								. Manage finances, legal and client
								relationships.{' '}
								<SHighlight>Advise clients</SHighlight> the{' '}
								<SHighlight>
									appropriate technologies
								</SHighlight>{' '}
								for their use case, in order to improve their
								performance and create lasting value across
								their business. Actively persuing new
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
						</SCol>
						<SCol>
							<SDetailTitle>Penetration Tester</SDetailTitle>
							<SParagraph>
								Assigned to a large Belgian corporation. Worked
								with the security team and{' '}
								<SHighlight>
									reported directly to the CISO
								</SHighlight>
								. Expanded my technical capabilities in{' '}
								<SHighlight>penetration testing</SHighlight>,
								relevant tooling, techniques and methodologies.
								Performed both automated and manual security
								assessments. Developed various{' '}
								<SHighlight>
									Python scripts to automate repetitive tasks
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
								Undertook this role after graduation, where I
								gained an understanding of the various business
								aspects that come with security. Supported the
								security team in consolidating bills of
								materials and{' '}
								<SHighlight>
									hardware procurement for vast
									infrastructures
								</SHighlight>
								. Documented and reviewed Nagios configurations
								and contributed to presentations,{' '}
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
								Refined my technical and soft skills during a{' '}
								<SHighlight>semester internship</SHighlight> at
								the cyber fusion centre in Prague.
								<SHighlight>
									Shadowed security assessments
								</SHighlight>{' '}
								and supported in awareness campaigns for various
								fortune 500 companies.{' '}
								<SHighlight>Organised a CTF</SHighlight> and
								developed challenges for local universities.
							</SParagraph>
						</SCol>
					</SRow>
				</CVSection>
			</Section>
		</SContainer>
	);
};

export default Experience;
