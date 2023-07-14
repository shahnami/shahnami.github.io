import React from 'react';

import styled from 'styled-components';

import Skills from '../sections/export/skills';
import Education from '../sections/export/education';
import Experience from '../sections/export/experience';
import Certifications from '../sections/export/certifications';
import Profile from '../sections/export/profile';

const SDiv = styled.div`
	background-color: #fff;
	position: absolute !important;
	left: 0;
	top: 0;
	right: 0;
`;

const Export: React.FC<{}> = () => {
	return (
		<SDiv>
			<Profile isCV={true} />
			<Skills />
			<Experience />

			<Education />
			<Certifications />
		</SDiv>
	);
};

export default Export;
