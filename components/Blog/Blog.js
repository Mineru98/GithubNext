import React, { createRef } from 'react';
import {
	Grid,
	Rail,
	Ref,
	Segment,
	Sticky,
	Menu,
	Responsive,
	List,
	Header
} from 'semantic-ui-react';
import Link from 'next/link';
import './Blog.css';

let contextRef;

class Blog extends React.Component {
	render() {
		contextRef = createRef();
		return (
			<div>
				{/* PC 화면 */}
				<Responsive minWidth={769}>
					<div className="blog background">
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
					<div className="blog container">
						<Grid centered columns={2}>
							<Grid.Column>
								<Ref innerRef={this.contextRef}>
									<Segment>
										<Header id="blog_tab" image="/static/imgs/project.svg" content="최근 게시물" />
										<List divided>
											<List.Item>
												<Link href={{ pathname: '/tag', query: { id: '2020-01-19-Plan' } }}>
													<List.Content>
														<List.Header id="blog_list_header">너의 휴가, 나의 휴가</List.Header>
														<List.Description id="blog_list_content">
															2박3일간 휴가를 다녀왔다.
															항상 휴가를 나갈때면 듣는 소리이지만 군인이 무슨 휴가를 나와서 일을 하러 나오냐라는 소리를 거의 100이면 100 듣는다
														</List.Description>
													</List.Content>
												</Link>
											</List.Item>
											<List.Item>
												<Link href={{ pathname: '/tag', query: { id: '2020-01-15-BoilerPlate' } }}>
													<List.Content>
														<List.Header id="blog_list_header">드러난 나의 민낯</List.Header>
														<List.Description id="blog_list_content">
															React를 처음부터 제대로 공부하면서 서비스를 만들진 않았지만 야매로 React를 공부한지 이제 어느덧 1년이 지나면서 슬슬
															나의 민낯이 들어나기 시작하는 기분이다.
														</List.Description>
													</List.Content>
												</Link>
											</List.Item>
											<List.Item>
												<Link href={{ pathname: '/tag', query: { id: '2019-02-14-06-Algorithm02-post' } }}>
													<List.Content>
														<List.Header id="blog_list_header">자료구조란?</List.Header>
														<List.Description id="blog_list_content">
															대학 강의를 들으면서 알고리즘과 자료구조라는 수업을 따로 나눠있지만 수업을 듣다보면 이 둘은 왜 따로 배우는 것일까 의문이
															들었다.
														</List.Description>
													</List.Content>
												</Link>
											</List.Item>
											<List.Item>
												<Link href={{ pathname: '/tag', query: { id: '2019-01-10-05-Plan' } }}>
													<List.Content>
														<List.Header id="blog_list_header">군대에서 프로그래밍을...</List.Header>
														<List.Description id="blog_list_content">
															군대에서 프로그래밍을 하고 싶다면 어떻게 해야할까? 우선 나에게 필요한 것들을 정리해보았다.
														</List.Description>
													</List.Content>
												</Link>
											</List.Item>
											<List.Item>
												<Link href={{ pathname: '/tag', query: { id: '2019-01-07-04-CnA-Project' } }}>
													<List.Content>
														<List.Header id="blog_list_header">CnA+ 프로젝트</List.Header>
														<List.Description id="blog_list_content">준비중입니다...</List.Description>
													</List.Content>
												</Link>
											</List.Item>
											<List.Item>
												<Link href={{ pathname: '/tag', query: { id: '2019-01-07-03-coding-education-post' } }}>
													<List.Content>
														<List.Header id="blog_list_header">코딩교육</List.Header>
														<List.Description id="blog_list_content">
															2018년부터 대한민국 공교육에서 코딩 교육 의무화를 하면서 많은 학부모들이 자신들의 자녀들에게 어려운 코딩 교육을 학원을
															보내면서라도 시켜야하는지 걱정을 하기 시작했다.
														</List.Description>
													</List.Content>
												</Link>
											</List.Item>
											<List.Item>
												<Link href={{ pathname: '/tag', query: { id: '2019-01-07-02-Algorithm01-post' } }}>
													<List.Content>
														<List.Header id="blog_list_header">알고리즘이란?</List.Header>
														<List.Description id="blog_list_content">
															컴공(컴퓨터공학과) 관련 된 학과를 나왔다면 다들 한번씩 들어봤던 과목이다. 설령 컴공을 나오지 않더라도 다양한 매체를 통해서
															알고리즘이란 말을 자주 언급되어서 다들 알고 있는 키워드이다.
														</List.Description>
													</List.Content>
												</Link>
											</List.Item>
											<List.Item>
												<Link href={{ pathname: '/tag', query: { id: '2019-01-07-01-First-post' } }}>
													<List.Content>
														<List.Header id="blog_list_header">처음 써보는 Github 블로그 포스트</List.Header>
														<List.Description id="blog_list_content">
															개발자라면 한번쯤은 만들어 보고 싶은 github 블로그를 드디어 만들어서 첫 포스팅을 작성하게 되었다.
														</List.Description>
													</List.Content>
												</Link>
											</List.Item>
										</List>
										<Rail position="right">
											<Sticky context={this.contextRef}>
												<Menu vertical>
													<Menu.Item>
														<Menu.Header id="blog_header">Production</Menu.Header>
														<Menu.Menu>
															<Menu.Item as="a">
																<Link href="/list/experience">Experience (0)</Link>
															</Menu.Item>
															<Menu.Item as="a">
																<Link href="/list/tool">Tool (0)</Link>
															</Menu.Item>
														</Menu.Menu>
													</Menu.Item>
													<Menu.Item>
														<Menu.Header id="blog_header">Language</Menu.Header>
														<Menu.Menu>
															<Menu.Item as="a">
																<Link href="/list/java">Java (0)</Link>
															</Menu.Item>
															<Menu.Item as="a">
																<Link href="/list/kotlin">Kotlin (0)</Link>
															</Menu.Item>
															<Menu.Item as="a">
																<Link href="/list/python">Python (0)</Link>
															</Menu.Item>
															<Menu.Item as="a">
																<Link href="/list/nodejs">NodeJS (0)</Link>
															</Menu.Item>
														</Menu.Menu>
													</Menu.Item>
												</Menu>
											</Sticky>
										</Rail>
									</Segment>
								</Ref>
							</Grid.Column>
						</Grid>
					</div>
				</Responsive>
				{/* 모바일 화면 */}
				<Responsive minWidth={1} maxWidth={768}>
					<div className="blog background">
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
					<div className="blog container">
						<Header id="blog_tab" image="/static/imgs/project.svg" content="최근 게시물" />
						<List divided>
							<List.Item>
								<Link href="/blog/2019-02-14-06-Algorithm02-post">
									<List.Content>
										<List.Header id="blog_list_header">자료구조란?</List.Header>
										<List.Description id="blog_list_content">
											대학 강의를 들으면서 알고리즘과 자료구조라는 수업을 따로 나눠있지만 수업을 듣다보면 이 둘은 왜 따로 배우는 것일까 의문이 들었다.
										</List.Description>
									</List.Content>
								</Link>
							</List.Item>
							<List.Item>
								<Link href="/blog/2019-01-10-05-Plan">
									<List.Content>
										<List.Header id="blog_list_header">군대에서 프로그래밍을...</List.Header>
										<List.Description id="blog_list_content">
											군대에서 프로그래밍을 하고 싶다면 어떻게 해야할까? 우선 나에게 필요한 것들을 정리해보았다.
										</List.Description>
									</List.Content>
								</Link>
							</List.Item>
							<List.Item>
								<Link href="/blog/2019-01-07-04-CnA-Project">
									<List.Content>
										<List.Header id="blog_list_header">CnA+ 프로젝트</List.Header>
										<List.Description id="blog_list_content">준비중입니다...</List.Description>
									</List.Content>
								</Link>
							</List.Item>
							<List.Item>
								<Link href="/blog/2019-01-07-03-coding-education-post">
									<List.Content>
										<List.Header id="blog_list_header">코딩교육</List.Header>
										<List.Description id="blog_list_content">
											2018년부터 대한민국 공교육에서 코딩 교육 의무화를 하면서 많은 학부모들이 자신들의 자녀들에게 어려운 코딩 교육을 학원을 보내면서라도
											시켜야하는지 걱정을 하기 시작했다.
										</List.Description>
									</List.Content>
								</Link>
							</List.Item>
							<List.Item>
								<Link href="/blog/2019-01-07-02-Algorithm01-post">
									<List.Content>
										<List.Header id="blog_list_header">알고리즘이란?</List.Header>
										<List.Description id="blog_list_content">
											컴공(컴퓨터공학과) 관련 된 학과를 나왔다면 다들 한번씩 들어봤던 과목이다. 설령 컴공을 나오지 않더라도 다양한 매체를 통해서 알고리즘이란
											말을 자주 언급되어서 다들 알고 있는 키워드이다.
										</List.Description>
									</List.Content>
								</Link>
							</List.Item>
							<List.Item>
								<Link href="/blog/2019-01-07-01-First-post">
									<List.Content>
										<List.Header id="blog_list_header">처음 써보는 Github 블로그 포스트</List.Header>
										<List.Description id="blog_list_content">
											개발자라면 한번쯤은 만들어 보고 싶은 github 블로그를 드디어 만들어서 첫 포스팅을 작성하게 되었다.
										</List.Description>
									</List.Content>
								</Link>
							</List.Item>
						</List>
					</div>
				</Responsive>
			</div>
		);
	}
}
export default Blog;