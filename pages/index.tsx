import React from 'react';

import styled, { ThemeProvider } from 'styled-components';
import Container from 'react-bootstrap/Container';

import Skills from '../sections/skills';
import Education from '../sections/education';
import Experience from '../sections/experience';
import Certifications from '../sections/certifications';
import Profile from '../sections/profile';

const SContainer = styled(Container)`
	padding: 50px;
	background-color: #fff;
	box-shadow: 2px 2px 1px #606060;
	max-width: 1000px;
	@media (max-width: 990px) {
		padding: 30px;
	}
`;

const Index: React.FC<{}> = () => {
	return (
		<SContainer>
			<Profile />
			<Skills />
			<Experience />
			<Education />
			<Certifications />
		</SContainer>
	);
};

export default Index;
