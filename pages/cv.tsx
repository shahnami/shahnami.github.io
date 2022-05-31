// import React, { useEffect } from 'react';
// import Router, { useRouter } from 'next/router';

// const CV: React.FC<{}> = () => {
// 	const router = useRouter();
// 	useEffect(() => {
// 		const { pathname } = Router;
// 		router.push('/static/cv.pdf');
// 	});
// 	return <></>;
// };

// export default CV;

import React from 'react';

import styled from 'styled-components';
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

const CV: React.FC<{}> = () => {
	return (
		<SContainer>
			<Profile isCV={true} />
			<Skills />
			<Experience />
			<Education />
			<Certifications />
		</SContainer>
	);
};

export default CV;
