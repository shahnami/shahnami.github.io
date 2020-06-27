import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import styled, { ThemeProvider } from 'styled-components';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const SNavbar = styled(Navbar)`
	z-index: 10000000;
	width: 100%;
	transition: background 0.3 cubic-bezier(1, 1, 1, 1);
	background: var(--primary);
	border-bottom: 1px solid rgba(0, 0, 0, 0.05);

	${props =>
		props.theme.enableHeader &&
		`
	background: rgba(255, 255, 255, 0.95);
		`}

	.logo-icon {
		transition: all 0.6s !important;
		margin-right: 15px !important;
		cursor: pointer;
		width: 65px;
	}
`;

const SNav = styled(Nav)``;

const SBrand = styled.span``;

const Header: React.FC<{}> = () => {
	const enableHeight = 100;
	const [enableHeader, setEnableHeader] = useState(false);

	const theme = {
		enableHeader
	};

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY >= enableHeight) {
				setEnableHeader(true);
			}

			if (window.scrollY < enableHeight) {
				setEnableHeader(false);
			}
		});

		return window.removeEventListener('scroll', () => {
			// pass
		});
	});

	return (
		<ThemeProvider theme={theme}>
			<SNavbar expand="lg" bg={'dark'} variant={'dark'}>
				<Container>
					<Navbar.Brand>
						<SBrand>
							<span>Next.js Starter</span>
						</SBrand>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse
						id="basic-navbar-nav"
						className="justify-content-end"
					>
						<SNav className="justity-content-end" activeKey="/">
							<Nav.Item>
								<Link href={'/'}>
									<Nav.Link as="div">Services</Nav.Link>
								</Link>
							</Nav.Item>
							<Nav.Item>
								<Link href={'/'}>
									<Nav.Link as="div">About</Nav.Link>
								</Link>
							</Nav.Item>
							<Nav.Item>
								<Link href={'/'}>
									<Nav.Link as="div">Jobs</Nav.Link>
								</Link>
							</Nav.Item>
						</SNav>
					</Navbar.Collapse>
					<Button
						className="ml-3 "
						variant={
							enableHeader ? 'outline-dark' : 'outline-light'
						}
					>
						Enquire Now
					</Button>
				</Container>
			</SNavbar>
		</ThemeProvider>
	);
};

export default Header;
