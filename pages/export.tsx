import React from 'react';

import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

import Skills from '../sections/skills';
import Education from '../sections/education';
import Experience from '../sections/experience';
import Certifications from '../sections/certifications';
import Profile from '../sections/profile';

const SContainer = styled(Container)`
	background-color: #fff;
	position: absolute !important;
	left: 0;
	top: 0;
	right: 0;
`;

const Export: React.FC<{}> = () => {
	return (
		<SContainer>
			<Profile isCV={true} />
			<Skills />
			<Education />
			<Experience />
			<Certifications />
		</SContainer>
	);
};

export default Export;
