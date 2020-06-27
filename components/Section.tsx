import React from 'react';

import styled, { ThemeProvider } from 'styled-components';

const SContainer = styled.div`
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	overflow: hidden !important;
	padding: 40px 0 !important;

	${({ theme }) => `
		padding: ${theme.padding}px 0 !important;
		min-height: ${theme.height};
    `};

	@media (max-width: 960px) {
		padding: 70px 5px !important;
	}

	@media (max-width: 575px) {
		padding: 60px 5px !important;
	}

	.zero-padding {
		padding: 0 !important;
	}
`;

type Props = {
	// height of section in `vh`
	height?: number;

	// top and bottom padding
	padding?: number;
};

const Section: React.FC<Props> = props => {
	const theme = {
		height: `${props.height || 0}vh`,
		padding: props.padding || 90
	};

	return (
		<ThemeProvider theme={theme}>
			<SContainer>{props.children}</SContainer>
		</ThemeProvider>
	);
};

export default Section;
