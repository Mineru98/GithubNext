import React, { createRef } from 'react';
import {
	Container,
	Responsive
} from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import queryString from 'query-string';
import axios from 'axios';
import './Tag.css';

class Tag extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			source: ''
		};
	}
	
	UNSAFE_componentWillMount() {
		const tag = this.props.match.params.tag;
		const query = queryString.parse(this.props.location.search);
		const url = `https://mineru98.github.io/static/posts/${query.id}.md`;
		axios.get(url).then(res => {
			this.setState({
				source: res.data
			});
		});
	}

	render() {
		const { source } = this.state;
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
}
export default Tag;