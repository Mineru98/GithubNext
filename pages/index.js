import React from 'react';
import { Container } from 'next/app';
const isServer = typeof window === 'undefined';
import HomeKR from '../components/Home/KR';
import './index.css';

export default function Index() {
	return (
		<Container>
			<div className="wrapper">
				<HomeKR/>
			</div>
		</Container>
	);
}