import React from 'react';

import styled from 'styled-components';

import { FaLinkedin, FaTwitter, FaEnvelope, FaGithub } from 'react-icons/fa';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const SColMeta = styled(Col)`
	padding: 0;
	margin: 0;
`;

const SImage = styled(Image)`
	width: 150px;
	height: auto;
`;

const SSubtitle = styled.h4`
	color: #777;
	font-weight: 400;
`;

const STitle = styled.h1`
	color: #8d0c14;
	font-weight: 500;
	text-transform: uppercase;
`;

const SDescription = styled.p`
	font-size: 14px;
	line-height: 1.5;
	color: #000;
`;

const SContainer = styled(Container)`
	padding: 16px;
`;

interface Props {
	isCV: boolean;
}

const Profile: React.FC<Props> = (props) => {
	return (
		<SContainer>
			<Row>
				<Col md={3}>
					<SImage
						className="mx-auto d-block"
						src={
							props.isCV
								? '/static/images/nami.png'
								: '/static/images/profile.jpeg'
						}
						thumbnail={true}
					/>
				</Col>
				<Col md={9} className="text-center text-md-left">
					<Row className="justify-content-center justify-content-md-start">
						<STitle>Nami Shah</STitle>
					</Row>
					<Row className="justify-content-center justify-content-md-start">
						<SSubtitle>Full Stack Developer</SSubtitle>
					</Row>
					<Row>
						<SDescription>
							Developer, inspired by the vision of Web3
							technology. Dedicated to the cause of cultivating
							applications for decentralisation and a fair
							internet.
						</SDescription>
					</Row>
				</Col>
			</Row>
			<Row className="text-center text-md-left">
				<SColMeta xs={0} md={3} />
				<SColMeta xs={6} md={2}>
					<FaEnvelope />{' '}
					<a href="javascript:window.location.href=atob('bWFpbHRvOmN2QG5hbWkuc2g=');">
						cv@na
						<span style={{ display: 'none' }}>
							CHARACTER SEQUENCE
						</span>
						mi.sh
					</a>
				</SColMeta>
				<SColMeta xs={6} md={2}>
					<FaGithub />{' '}
					<a target={'_blank'} href="https://github.com/shahnami">
						shahnami
					</a>
				</SColMeta>
				<SColMeta xs={6} md={2}>
					<FaLinkedin />{' '}
					<a target={'_blank'} href="https://linkedin.com/in/namis">
						in/namis
					</a>
				</SColMeta>
				<SColMeta xs={6} md={2}>
					<FaTwitter />{' '}
					<a target={'_blank'} href="https://twitter.com/nami_sh">
						@nami_sh
					</a>
				</SColMeta>
				<SColMeta xs={0} md={1} />
			</Row>
		</SContainer>
	);
};

export default Profile;
