import React from 'react';
import { NextSeo } from 'next-seo';
import Blog from '../components/Blog/Blog';

export default function blog(props) {
	return (
		<div>
			<NextSeo
					title="Mineru Code Blog - Blog"
					description="Mineru Blog Page"
					openGraph={{
						rl: 'https://mineru98.github.io/',
						title: 'Mineru Code Blog - Blog',
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
			<Blog/>
		</div>
	);
}