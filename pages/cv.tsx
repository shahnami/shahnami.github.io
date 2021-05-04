import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';

const CV: React.FC<{}> = () => {
	const router = useRouter();
	useEffect(() => {
		const { pathname } = Router;
		router.push('/static/cv.pdf');
	});
	return <></>;
};

export default CV;
