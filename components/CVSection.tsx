import React, { useEffect, useState } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import styled, { ThemeProvider } from 'styled-components';

const SRow = styled(Row)``;

const SCol = styled(Col)``;

const SSectionTitle = styled.h5`
	color: #8d0c14;
	font-weight: 300;
	text-transform: uppercase;
	margin-bottom: 15px;
`;

const SContainer = styled(Container)``;

type props = {
	title: string;
};

const CVSection: React.FC<props> = (props) => {
	return (
		<SContainer>
			<SRow>
				<SCol lg={{ span: 8, offset: 2 }}>
					<SRow>
						<SSectionTitle>{props.title}</SSectionTitle>
					</SRow>

					<SRow>{props.children}</SRow>
				</SCol>
			</SRow>
		</SContainer>
	);
};

export default CVSection;
