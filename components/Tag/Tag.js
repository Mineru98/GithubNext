import React, { createRef, useState, useEffect } from 'react';
import {
	Container,
	Responsive,
	Grid
} from 'semantic-ui-react';
import Router, {useRouter} from 'next/router'
import ReactMarkdown from 'react-markdown';
import queryString from 'query-string';
import axios from 'axios';
import './Tag.css';

function Tag(props) {
	const [source, setSource] = useState('');
	const {query: { id }} = useRouter();
	useEffect(() => {
    const url = `https://mineru98.github.io/static/posts/${id}.md`;
		axios.get(url).then(res => {
			setSource(res.data)
		});
  });
	return (
			<div>
				{/* PC 화면 */}
				<Responsive minWidth={769}>
					<div className="tag background">
						<Grid>
							<Grid.Row centered columns={3}>
								<Grid.Column>
									<h1>> Hello, World!</h1>
									<h1>> This is Mineru Coding Blog.</h1>
									<h1>> </h1>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</div>
					<div className="tag container">
						<div className="tag container2">
							<ReactMarkdown source={source} />
						</div>
					</div>
				</Responsive>
				{/* 모바일 화면 */}
				<Responsive minWidth={1} maxWidth={768}>
					<div className="tag background">
						<Grid>
							<Grid.Row centered columns={1}>
								<Grid.Column>
									<h1>> Hello, World!</h1>
									<h1>> This is Mineru Coding Blog.</h1>
									<h1>> </h1>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</div>
					<div className="tag container">
						<Container textAlign="left">
							<ReactMarkdown source={source} />
						</Container>
					</div>
				</Responsive>
			</div>
		);
}

export default Tag;