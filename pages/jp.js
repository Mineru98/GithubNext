import React from 'react';
import { NextSeo } from 'next-seo';
import HomeJp from '../components/Home/JP';

export default function jp(props) {
	return (
		<div>
			<NextSeo
					title="Mineru Code Blog - 日本語"
					description="Mineru Blog Page"
					openGraph={{
						rl: 'https://mineru98.github.io/',
						title: 'Mineru Code Blog - 日本語',
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
			<HomeJp/>
		</div>
	);
}