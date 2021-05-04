import React from 'react';

import styled, { ThemeProvider } from 'styled-components';

import Section from 'amreact-ui';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import CVSection from '../components/CVSection';

const SRow = styled(Row)``;

const SCol = styled(Col)``;

const SContainer = styled.div``;

const SList = styled.ul`
	font-size: 14px;
	line-height: 1.5;
	color: #000;
`;

const Skills: React.FC<{}> = () => {
	return (
		<SContainer>
			<Section padding={11}>
				<CVSection title={'Skills'}>
					<SRow>
						<SList>
							<li>
								Hands-on experience in leading and conducting
								security assessments for both small businesses
								and large corporations;
							</li>
							<li>
								Proficient in front and back-end coding
								languages, such as Python, React.JS, TypeScript,
								Swift, Java, and more;
							</li>
							<li>
								In-depth understanding of application and
								infrastructure penetration testing
								methodologies, relevant tooling and techniques.
							</li>
							<li style={{ display: 'none' }}>
								Making headway in cloud security, mobile
								pentesting, configuration reviews and purple
								teaming.
							</li>
						</SList>
					</SRow>
				</CVSection>
			</Section>
		</SContainer>
	);
};

export default Skills;
