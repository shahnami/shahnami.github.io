import React from 'react';

import styled from 'styled-components';

import Section from 'amreact-ui';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import CVHeader from '../components/CVHeader';

const SRow = styled(Row)``;

const SCol = styled(Col)``;

const SColMeta = styled(Col)`
	padding: 0;
	margin: 0;
	@media (max-width: 990px) {
		margin: 0 auto;
		text-align: center;
		padding-top: 8px;
	}
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

const SContainer = styled.div`
	padding-bottom: 16px;
`;

interface Props {
	isCV: boolean;
}

const Profile: React.FC<Props> = (props) => {
	return (
		<SContainer>
			<Section padding={22}>
				<CVHeader>
					<SRow>
						<SCol lg={2}>
							<SImage
								className={'mx-auto text-center d-block'}
								src={
									props.isCV
										? '/static/images/nami.jpg'
										: '/static/images/profile.jpeg'
								}
								thumbnail={true}
							/>
						</SCol>
						<SCol lg={8}>
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
						<SCol lg={2}></SCol>
					</SRow>
					<SRow
						style={{
							justifyContent: 'start'
						}}
					>
						<SColMeta xs={12} sm={0} md={0} lg={2} />
						<SColMeta xs={12} sm={6} md={3} lg={2}>
							<a href="mailto:cv@nami.sh">Email</a>
						</SColMeta>
						<SColMeta xs={12} sm={6} md={3} lg={2}>
							<a
								target={'_blank'}
								href="https://linkedin.com/in/namis"
							>
								LinkedIn
							</a>
						</SColMeta>
						{/* <SColMeta
							xs={12}
							sm={6}
							md={3}
							lg={2}
						>
							<a
								target={'_blank'}
								href="https://keybase.io/namis/pgp_keys.asc"
							>
								Keybase
							</a>
						</SColMeta> */}
						<SColMeta xs={12} sm={6} md={3} lg={2}>
							<a
								target={'_blank'}
								href="https://github.com/shahnami"
							>
								Github
							</a>
						</SColMeta>
						<SColMeta xs={12} sm={6} md={3} lg={2}>
							<a
								target={'_blank'}
								href="https://twitter.com/nami_sh"
							>
								Twitter
							</a>
						</SColMeta>

						<SColMeta xs={12} sm={0} md={0} lg={2} />
					</SRow>
				</CVHeader>
			</Section>
		</SContainer>
	);
};

export default Profile;
