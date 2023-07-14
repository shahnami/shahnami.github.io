import React from 'react';

import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

import Profile from '../sections/export/profile';

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
			<Profile isCV={false} />
		</SContainer>
	);
};

export default CV;
