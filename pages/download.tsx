import React, { useEffect } from 'react';
import Router from 'next/router';

const Download: React.FC<{}> = () => {
	useEffect(() => {
		const { pathname } = Router;
		if (pathname == '/download') {
			Router.push('/static/cv.pdf');
		}
	});
	return <></>;
};

export default Download;
