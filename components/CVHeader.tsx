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

type props = {};

const CVHeader: React.FC<props> = (props) => {
	return <SContainer>{props.children}</SContainer>;
};

export default CVHeader;
