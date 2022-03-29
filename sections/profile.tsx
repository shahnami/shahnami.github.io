import React from 'react';

import styled, { ThemeProvider } from 'styled-components';

import Section from 'amreact-ui';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import CVHeader from '../components/CVHeader';

const SRow = styled(Row)``;

const SCol = styled(Col)``;

const SColMeta = styled(Col)`
	border-left: 1px solid #e0e0e0;
	padding-left: 15px;
	@media (max-width: 990px) {
		border: none;
		text-align: center;
		padding-top: 8px;
	}
	/* overflow: hidden;
	text-overflow: ellipsis; */
`;

const SImage = styled(Image)`
	width: 150px;
	height: auto;
`;

const SSubtitle = styled.h4`
	color: #777;
	font-weight: 400;
	@media (max-width: 990px) {
		margin: 0 auto;
		font-size: 1.2em;
		padding-top: 8px;
		padding-bottom: 8px;
	}
`;

const STitle = styled.h1`
	color: #8d0c14;
	font-weight: 500;
	text-transform: uppercase;
	@media (max-width: 990px) {
		margin: 0 auto;
		padding-top: 8px;
	}
`;

const SDescription = styled.p`
	font-size: 14px;
	line-height: 1.5;
	color: #000;
	@media (max-width: 990px) {
		margin: 0 auto;
		text-align: center;
		padding-top: 8px;
	}
`;

const SContainer = styled.div``;

const Profile: React.FC<{}> = () => {
	return (
		<SContainer>
			<Section padding={22}>
				<CVHeader>
					<SRow>
						<SCol lg={2}>
							<SImage
								className={'mx-auto text-center d-block'}
								src={'/static/images/nami.jpg'}
								thumbnail={true}
							/>
						</SCol>
						<SCol lg={7}>
							<SRow>
								<STitle>Nami Shah</STitle>
							</SRow>
							<SRow>
								<SSubtitle>Full Stack Developer</SSubtitle>
							</SRow>
							<SRow>
								<SDescription>
									Developer, inspired by the vision of Web3
									technology. Dedicated to the cause of
									cultivating applications for
									decentralisation and a fair internet.
								</SDescription>
							</SRow>
						</SCol>
						<SCol lg={3}>
							<SRow>
								<SColMeta xs={12} sm={6} md={3} lg={12}>
									<a
										target={'_blank'}
										href="https://www.nami.sh"
									>
										www.nami.sh
									</a>
								</SColMeta>
								<SColMeta xs={12} sm={6} md={3} lg={12}>
									<a href="mailto:me@nami.sh">me@nami.sh</a>
								</SColMeta>
								<SColMeta xs={12} sm={6} md={3} lg={12}>
									<a
										target={'_blank'}
										href="https://linkedin.com/in/namis"
									>
										linkedin.com/in/namis
									</a>
								</SColMeta>
								<SColMeta xs={12} sm={6} md={3} lg={12}>
									<a
										target={'_blank'}
										href="https://keybase.io/namis/pgp_keys.asc"
									>
										keybase.io/namis
									</a>
								</SColMeta>
							</SRow>
						</SCol>
					</SRow>
				</CVHeader>
			</Section>
		</SContainer>
	);
};

export default Profile;
