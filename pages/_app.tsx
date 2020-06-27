import React from 'react';

import App from 'next/app';

import Layout from '../components/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../../public/static/css/animation.css';
import '../../public/static/css/bootstrap.css';
import '../../public/static/css/global.css';
import '../../public/static/css/index.css';

class MyApp extends App {
	public render() {
		const { Component, pageProps } = this.props;

		return (
			<Layout>
				<Component {...pageProps} />
			</Layout>
		);
	}
}

export default MyApp;
