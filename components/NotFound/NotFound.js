import React, { useState, useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import './NotFound.css';
const isServer = typeof window === 'undefined';

export default function NotFound(props) {
	const [width, setWidth] = useState(!isServer ? window.innerWidth : null);

	useEffect(() => {
		const handleResize = () => {
			setWidth(!isServer ? window.innerWidth : null);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div>
			<section style={{ width }} className="notfound banner">
				<Header id="notfound-coment" as="h2">
					{'죄송합니다'}
					<br />
					{'요청하신 페이지를 찾을 수 없습니다.'}
				</Header>
			</section>
		</div>
	);
}