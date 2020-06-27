import React from 'react';

import styled from 'styled-components';

import Link from 'next/link';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import Section from './Section';

const SFooter = styled.div`
	color: #fff;
	background: var(--dark);

	a {
		color: #fff !important;
	}

	h5 {
		margin-top: 0;
		font-size: 14px !important;
		line-height: 20px;
		text-transform: uppercase;
		display: inline-block;
		padding-bottom: 2px;
		font-weight: 600;
		letter-spacing: 2px;
		margin-bottom: 20px;
		padding-bottom: 10px;
		border-bottom: 3px solid var(--primary);
	}

	b {
		font-weight: 500 !important;
	}

	.contact-list1 {
		dd {
			display: inline-block !important;
			margin-right: 7px;

			img {
				border-radius: var(--border-radius);
			}
		}

		a {
			display: inline-block !important;
		}
	}

	@media (max-width: 575px) {
		padding: 3 0px 0;
	}
`;

const SLinks = styled.ul`
	list-style: none !important;
	text-indent: none !important;
	padding: 0 !important;
`;

const Footer: React.FC<{}> = props => {
	return (
		<SFooter>
			<Section padding={80}>
				<Container>
					<Row>
						<Col xs={12} md={4} xl={6}>
							<h5>About App Maven</h5>
							<p style={{ color: '' }}>
								No-nonsense software development agency, based
								in London, focused on bespoke design and
								implementation across all mediums.
							</p>
							<br />
							<p className="rights">
								<span>© </span>
								<b className="copyright-year"></b>{' '}
								<b>App Maven</b>
								<span>. </span>
								<b>All Rights Reserved.</b>
							</p>
						</Col>
						<Col md={4}>
							<h5>Links</h5>
							<SLinks className="nav-list">
								<dl className="contact-list">
									<dd>
										<Link href={'/services'}>
											Our Services
										</Link>
									</dd>
									<dd>
										<Link href={'/faqs'}>FAQs</Link>
									</dd>
								</dl>
							</SLinks>
						</Col>
						<Col>
							<h5>Contacts</h5>
							<dl className="contact-list">
								<dt>Email</dt>
								<dd>
									<a href="mailto:#">info@appmaven.io</a>
								</dd>
							</dl>
							<SLinks className="nav-list">
								<dl className="contact-list">
									<dt>Telephone</dt>
									<dd>
										<a href="tel:+447496953858">
											+447496953858
										</a>
									</dd>
								</dl>
							</SLinks>
							<SLinks className="nav-list">
								<dl className="contact-list1">
									<dt>Socials</dt>
									<dd>
										<a href="https://www.facebook.com/appmavenltd/">
											<Image
												src={
													'/static/images/socials/facebook.png'
												}
												width={25}
											/>
										</a>
									</dd>{' '}
									<dd>
										<a href="https://www.instagram.com/appmaven.io/">
											<Image
												src={
													'/static/images/socials/instagram.png'
												}
												width={25}
											/>
										</a>
									</dd>{' '}
									<dd>
										<a href="https://www.linkedin.com/company/31389167/admin/">
											<Image
												src={
													'/static/images/socials/linkedin.png'
												}
												width={25}
											/>
										</a>
									</dd>
								</dl>
							</SLinks>
						</Col>
					</Row>
				</Container>
			</Section>
		</SFooter>
	);
};

export default Footer;
