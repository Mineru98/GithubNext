import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { NextSeo } from 'next-seo';
import { Responsive } from 'semantic-ui-react';
import App from 'next/app';

import Header from '../components/Header/Header';

class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<div>
				<NextSeo
					title="Mineru Code Blog"
					description="Mineru Blog Page"
					openGraph={{
						url: 'https://mineru98.github.io/',
						title: 'Mineru Code Blog',
						description: 'Mineru Blog Page',
						type: 'website',
						images: [
							{
								url: 'https://source.unsplash.com/82TpEld0_e4/800x600',
								width: 800,
								height: 600,
								alt: 'Note Alt'
							}
						],
						site_name: 'Mineru Code Blog'
					}}
					facebook={{
						appId: '2123338114642272'
					}}
				/>
				<div>
					{/*
					<Responsive minWidth={769}>
						<Header/>
						<main>
							<Component {...pageProps} />
						</main>
						<Footer />
					</Responsive>
					<Responsive minWidth={1} maxWidth={768}>
						<main>
							<Component {...pageProps} />
						</main>
					</Responsive>
					*/}
					<Header/>
					<main>
						<Component {...pageProps} />
					</main>
				</div>
			</div>
		);
	}
}

export default MyApp;