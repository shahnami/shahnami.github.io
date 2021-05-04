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

const Certifications: React.FC<{}> = () => {
	return (
		<SContainer>
			<Section padding={11}>
				<CVSection title={'Certifications and Courses'}>
					<SRow>
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
					</SRow>
				</CVSection>
			</Section>
		</SContainer>
	);
};

export default Certifications;
