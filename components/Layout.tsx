import React from 'react';
import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';

const Layout: React.FC<{}> = (props) => {
	return (
		<>
			<Head>
				<title>Nami Shah</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			{/* <Header /> */}
			<div>{props.children}</div>
			{/* <Footer /> */}
		</>
	);
};

export default Layout;
