import React from 'react';
import { NextSeo } from 'next-seo';
import NotFound from '../components/NotFound/NotFound';

export default function Error(props) {
	return (
		<div>
			<NextSeo
					title="404 Not Found"
					description="Mineru Blog Page"
					openGraph={{
						url: 'https://mineru98.github.io/',
						title: '404 Not Found',
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
			<NotFound/>
		</div>
	);
}