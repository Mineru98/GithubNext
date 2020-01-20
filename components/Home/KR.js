import React from 'react';
import {
	Grid,
	Header,
	Image,
	Card,
	Label,
	Container,
	Accordion,
	Responsive
} from 'semantic-ui-react';
import { Radar } from 'react-chartjs-2';
import './Home.css';

const Korean = {
	Project: '프로젝트',
	Project_Comment: '지금까지 제가 해왔던 작업물들입니다.',
	Code: '코드 스택',
	Combination_Title: '괄호 쌍의 조합Combination of Parentheses',
	Combination_Date: '2019년 8월 12일 배포',
	Combination_Description: '모든 괄호 쌍의 경우 개수에 대한 알고리즘',
	Calculate_Clock_Angle_Title: '시계 각도 계산',
	Calculate_Clock_Angle_Date: '2019년 4월 8일 배포',
	Calculate_Clock_Angle_Description: '시간을 입력 할 때 시계의 각도를 계산하는 알고리즘',
	Android_App_Project_Title: '안드로이드 앱 프로젝트',
	Android_App_Project_Date: '2018년 1월 9일 배포',
	Android_App_Project_Description: '나의 안드로이드 앱 프로젝트',
	DBKotlin_Title: '무작위 추출 with Kotlin',
	DBKotlin_Date: '2019년 11월 17일 배포',
	DBKotlin_Description: '확률이 배열에 미리 지정되어 있으면 알고리즘은 해당 확률로 결과를 추출합니다.',
	DBNodeJS_Title: '무작위 추출 with NodeJS',
	DBNodeJS_Date: '2019년 11월 17일 배포',
	DBNodeJS_Description: '확률이 배열에 미리 지정되어 있으면 알고리즘은 해당 확률로 결과를 추출합니다.',
	Division_Title: 'PC, Mobile 구분',
	Division_Date: '2019년 8월 15일 배포',
	Division_Description: 'PC 또는 모바일로 식별하는 프로젝트',
	Cnaplus_shop_Title: 'www.cnaplus.shop',
	Cnaplus_shop_Date: '2019년 6월 9일 배포',
	Cnaplus_shop_Description: '자가 학습 기술을 개발하기 위해 무작위로 문제를 혼합하여 문제 모음을 만드는 프로젝트',
	AutoBench_Title: 'Auto Bench',
	AutoBench_Date: '2019년 4월 7일 배포',
	AutoBench_Description: '웹 크롤링 기술을 사용하여 CPU / GPU 벤치 마크 사이트 데이터를 추출하는 프로젝트',
	KoreaMockTestBot_Title: '한국 모의고사 결과 수집 봇',
	KoreaMockTestBot_Date: '2019년 11월 12일 배포',
	KoreaMockTestBot_Description:
		'한국에서는 모의고사 시험이 중요합니다. 그리고 많은 한국 학생들은 점수를 친구들과 비교하는 것을 좋아합니다. 이 웹 크롤링 봇은 원하는 시험 횟차를 정하면 빠르고 편리하게 반응합니다.',
	Fibonacci_Title: '피보나치 수열',
	Fibonacci_Date: '2019년 4월 8일',
	Fibonacci_Description: '피보나치 수열 알고리즘',
	Noticend_Title: 'www.noticend.com',
	Noticend_Date: '2018년 3월 20일 배포',
	Noticend_Description: '연결되지 않을 권리를 달성하기위한 소셜 미디어 프로젝트.',
	Note_Title: '오답노트',
	Note_Date: '2019년 6월 9일 배포',
	Note_Description: '자가 학습 기술을 개발하기 위해 무작위로 문제를 혼합하여 문제 모음을 만드는 프로젝트',
	WareHouse_Title: '웨어하우스',
	WareHouse_Date: '2019년 11월 29일 배포',
	WareHouse_Description:
		'서버 & 클라이언트 통신을 하는 중에 인터넷 연결이 끊겨있을 때, 사용자 경험을 떨어뜨리지 않기 위한 Pop & Push 형태의 스트림처리 프로젝트'
};

const data = {
	labels: ['문법', '디버깅', '아키택쳐', '확장성', '코드 리뷰'],
	datasets: [
		{
			label: 'C / C#',
			backgroundColor: 'rgba(20,148,255,0.2)',
			borderColor: 'rgba(20,148,255,1)',
			pointBackgroundColor: 'rgba(20,148,255,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(20,148,255,1)',
			data: [82, 81, 51, 58, 63]
		},
		{
			label: 'Java / Kotlin',
			backgroundColor: 'rgba(255,169,20,0.2)',
			borderColor: 'rgba(255,169,20,1)',
			pointBackgroundColor: 'rgba(1255,169,20,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(255,169,20,1)',
			data: [88, 90, 91, 95, 92]
		},
		{
			label: 'JS / NodeJS / ReactJS',
			backgroundColor: 'rgba(255,99,132,0.2)',
			borderColor: 'rgba(255,99,132,1)',
			pointBackgroundColor: 'rgba(255,99,132,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(255,99,132,1)',
			data: [86, 72, 72, 97, 88]
		},
		{
			label: 'Python',
			backgroundColor: 'rgba(239,220,5,0.2)',
			borderColor: 'rgba(239,220,5,1)',
			pointBackgroundColor: 'rgba(239,220,5,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(239,220,5,1)',
			data: [85, 77, 67, 84, 81]
		}
	]
};

class HomeKR extends React.Component {
	render() {
		const PC = [
			{
				key: 0,
				title: 'C / C#',
				content: {
					content: (
						<Grid>
							<Grid.Row columns={4}>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/Combination_of_Parentheses" id="card">
										<Image src="/static/imgs/icon_parentheses.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.Combination_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.Combination_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.Combination_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_cplusplus.png" /> C
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/CShap_Clock_Angle" id="card">
										<Image src="/static/imgs/icon_clock.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.Calculate_Clock_Angle_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.Calculate_Clock_Angle_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.Calculate_Clock_Angle_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_csharp.png" /> C#
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					)
				}
			},
			{
				key: 1,
				title: 'Java / Kotlin',
				content: {
					content: (
						<Grid>
							<Grid.Row columns={4}>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/HopsAndroid" id="card">
										<Image src="/static/imgs/icon_android.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.Android_App_Project_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.Android_App_Project_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.Android_App_Project_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_java.png" /> Java
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card
										href="https://github.com/Mineru98/DictionaryRandom/tree/master/kotlin"
										id="card"
									>
										<Image src="/static/imgs/icon_random.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.DBKotlin_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.DBKotlin_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.DBKotlin_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_kotlin.png" /> Kotlin
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/Warehouse" id="card">
										<Image src="/static/imgs/icon_warehouse.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.WareHouse_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.WareHouse_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.WareHouse_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_kotlin.png" /> Kotlin
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card
										href="https://play.google.com/store/apps/details?id=com.cna.mineru.cna&hl=ko"
										id="card"
									>
										<Image src="/static/imgs/icon_cnaplus.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.Note_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.Note_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.Note_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_java.png" /> Java
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					)
				}
			},
			{
				key: 2,
				title: 'JavaScript / NodeJS / ReactJS',
				content: {
					content: (
						<Grid>
							<Grid.Row columns={4}>
								<Grid.Column>
									<Card href="https://mineru98.github.io/Division_PC_Mobile/" id="card">
										<Image src="/static/imgs/icon_division.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.Division_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.Division_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.Division_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_js.png" /> JavaScript
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card
										href="https://github.com/Mineru98/DictionaryRandom/tree/master/nodejs"
										id="card"
									>
										<Image src="/static/imgs/icon_random.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.DBNodeJS_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.DBNodeJS_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.DBNodeJS_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_nodejs.png" /> NodeJS
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card href="http://www.cnaplus.shop" id="card">
										<Image src="/static/imgs/icon_cnaplus.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.Cnaplus_shop_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.Cnaplus_shop_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.Cnaplus_shop_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_reactjs.png" /> ReactJS
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					)
				}
			},
			{
				key: 3,
				title: 'Python',
				content: {
					content: (
						<Grid>
							<Grid.Row columns={4}>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/AutoBench" id="card">
										<Image src="/static/imgs/icon_autobench.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.AutoBench_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.AutoBench_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.AutoBench_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_python.png" /> Python
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/KoreaMockTestBot" id="card">
										<Image src="/static/imgs/icon_webbot.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.KoreaMockTestBot_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.KoreaMockTestBot_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.KoreaMockTestBot_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_python.png" /> Python
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/Fibonacci-Even-Sum" id="card">
										<Image src="/static/imgs/icon_fibonacci.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.Fibonacci_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.Fibonacci_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.Fibonacci_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_python.png" /> Python
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					)
				}
			}
		];

		const Mobile = [
			{
				key: 0,
				title: 'C / C#',
				content: {
					content: (
						<Grid>
							<Grid.Row>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/Combination_of_Parentheses" id="card">
										<Image src="/static/imgs/icon_parentheses.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.Combination_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.Combination_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.Combination_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_cplusplus.png" /> C
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/CShap_Clock_Angle" id="card">
										<Image src="/static/imgs/icon_clock.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.Calculate_Clock_Angle_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.Calculate_Clock_Angle_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.Calculate_Clock_Angle_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_csharp.png" /> C#
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					)
				}
			},
			{
				key: 1,
				title: 'Java / Kotlin',
				content: {
					content: (
						<Grid>
							<Grid.Row>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/HopsAndroid" id="card">
										<Image src="/static/imgs/icon_android.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.Android_App_Project_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.Android_App_Project_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.Android_App_Project_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_java.png" /> Java
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Card
										href="https://github.com/Mineru98/DictionaryRandom/tree/master/kotlin"
										id="card"
									>
										<Image src="/static/imgs/icon_random.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.DBKotlin_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.DBKotlin_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.DBKotlin_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_kotlin.png" /> Kotlin
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/Warehouse" id="card">
										<Image src="/static/imgs/icon_warehouse.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.WareHouse_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.WareHouse_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.WareHouse_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_kotlin.png" /> Kotlin
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Card
										href="https://play.google.com/store/apps/details?id=com.cna.mineru.cna&hl=ko"
										id="card"
									>
										<Image src="/static/imgs/icon_cnaplus.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.Note_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.Note_Data}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.Note_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_java.png" /> Java
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					)
				}
			},
			{
				key: 2,
				title: 'JavaScript / NodeJS / ReactJS',
				content: {
					content: (
						<Grid>
							<Grid.Row>
								<Grid.Column>
									<Card href="https://mineru98.github.io/Division_PC_Mobile/" id="card">
										<Image src="/static/imgs/icon_division.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.Division_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.Division_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.Division_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_js.png" /> JavaScript
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Card
										href="https://github.com/Mineru98/DictionaryRandom/tree/master/nodejs"
										id="card"
									>
										<Image src="/static/imgs/icon_random.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.DBNodeJS_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.DBNodeJS_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.DBNodeJS_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_nodejs.png" /> NodeJS
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Card href="http://www.cnaplus.shop" id="card">
										<Image src="/static/imgs/icon_cnaplus.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.Cnaplus_shop_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.Cnaplus_shop_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.Cnaplus_shop_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_reactjs.png" /> ReactJS
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					)
				}
			},
			{
				key: 3,
				title: 'Python',
				content: {
					content: (
						<Grid>
							<Grid.Row>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/AutoBench" id="card">
										<Image src="/static/imgs/icon_autobench.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.AutoBench_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.AutoBench_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.AutoBench_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_python.png" /> Python
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/KoreaMockTestBot" id="card">
										<Image src="/static/imgs/icon_webbot.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.KoreaMockTestBot_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.KoreaMockTestBot_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.KoreaMockTestBot_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_python.png" /> Python
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
							<Grid.Row>
								<Grid.Column>
									<Card href="https://github.com/Mineru98/Fibonacci-Even-Sum" id="card">
										<Image src="/static/imgs/icon_fibonacci.png" wrapped ui={false} />
										<Card.Content>
											<Card.Header id="default">
												{Korean.Fibonacci_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Korean.Fibonacci_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Korean.Fibonacci_Description}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Label as="a" image>
												<Image src="/static/imgs/icon_python.png" /> Python
											</Label>
										</Card.Content>
									</Card>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					)
				}
			}
		];

		return (
			<div>
				{/* PC 화면 */}
				<Responsive minWidth={769}>
					<div className="home_background">
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
					<div className="home_container">
						<Container textAlign="left">
							<Header
								id="default"
								as="h2"
								image="/static/imgs/project.svg"
								content={Korean.Project}
							/>
							<p id="default" className="description">
								{Korean.Project_Comment}
							</p>
							<Grid>
								<Grid.Row columns={4}>
									<Grid.Column>
										<Card href="https://noticend.com" id="card">
											<Image src="/static/imgs/icon_noticend.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{Korean.Noticend_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{Korean.Noticend_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{Korean.Noticend_Description}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
												<Label as="a" image>
													<Image src="/static/imgs/icon_xamarin.png" /> Xamarin.forms
												</Label>
											</Card.Content>
										</Card>
									</Grid.Column>
									<Grid.Column>
										<Card href="http://www.cnaplus.shop" id="card">
											<Image src="/static/imgs/icon_cnaplus.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{Korean.Cnaplus_shop_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{Korean.Cnaplus_shop_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{Korean.Cnaplus_shop_Description}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
												<Label as="a" image>
													<Image src="/static/imgs/icon_reactjs.png" /> ReactJS
												</Label>
											</Card.Content>
										</Card>
									</Grid.Column>
									<Grid.Column>
										<Card
											href="https://play.google.com/store/apps/details?id=com.cna.mineru.cna&hl=ko"
											id="card"
										>
											<Image src="/static/imgs/icon_cnaplus.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{Korean.Note_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{Korean.Note_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{Korean.Note_Description}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
												<Label as="a" image>
													<Image src="/static/imgs/icon_java.png" /> Java
												</Label>
											</Card.Content>
										</Card>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row columns={4}>
									<Grid.Column>
										<Card href="https://github.com/Mineru98/AutoBench" id="card">
											<Image src="/static/imgs/icon_autobench.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{Korean.AutoBench_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{Korean.AutoBench_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{Korean.AutoBench_Description}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
												<Label as="a" image>
													<Image src="/static/imgs/icon_python.png" /> Python
												</Label>
											</Card.Content>
										</Card>
									</Grid.Column>
									<Grid.Column>
										<Card href="https://github.com/Mineru98/KoreaMockTestBot" id="card">
											<Image src="/static/imgs/icon_webbot.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{Korean.KoreaMockTestBot_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{Korean.KoreaMockTestBot_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{Korean.KoreaMockTestBot_Description}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
												<Label as="a" image>
													<Image src="/static/imgs/icon_python.png" /> Python
												</Label>
											</Card.Content>
										</Card>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Container>
						<Container textAlign="left">
							<Header
								id="default"
								as="h2"
								image="/static/imgs/language.svg"
								content={Korean.Code}
							/>
							<Grid>
								<Grid.Row>
									<Grid.Column>
										<Radar data={data} height={150} />
									</Grid.Column>
								</Grid.Row>
								<Grid.Row columns={1}>
									<Grid.Column>
										<Accordion defaultActiveIndex={[]} panels={PC} exclusive={false} />
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Container>
					</div>
				</Responsive>
				{/* 모바일 화면 */}
				<Responsive minWidth={1} maxWidth={768}>
					<div className="home_background">
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
					<div className="home_container">
						<Container textAlign="left">
							<Header
								id="default"
								as="h2"
								image="/static/imgs/project.svg"
								content={Korean.Project}
							/>
							<p id="default" className="description">
								{Korean.Project_Comment}
							</p>
							<Grid>
								<Grid.Row>
									<Grid.Column>
										<Card href="https://noticend.com" id="card">
											<Image src="/static/imgs/icon_noticend.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{Korean.Noticend_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{Korean.Noticend_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{Korean.Noticend_Description}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
												<Label as="a" image>
													<Image src="/static/imgs/icon_xamarin.png" /> Xamarin.forms
												</Label>
											</Card.Content>
										</Card>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column>
										<Card href="http://www.cnaplus.shop" id="card">
											<Image src="/static/imgs/icon_cnaplus.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{Korean.Cnaplus_shop_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{Korean.Cnaplus_shop_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{Korean.Cnaplus_shop_Description}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
												<Label as="a" image>
													<Image src="/static/imgs/icon_reactjs.png" /> ReactJS
												</Label>
											</Card.Content>
										</Card>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column>
										<Card
											href="https://play.google.com/store/apps/details?id=com.cna.mineru.cna&hl=ko"
											id="card"
										>
											<Image src="/static/imgs/icon_cnaplus.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{Korean.Note_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{Korean.Note_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{Korean.Note_Description}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
												<Label as="a" image>
													<Image src="/static/imgs/icon_java.png" /> Java
												</Label>
											</Card.Content>
										</Card>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column>
										<Card href="https://github.com/Mineru98/AutoBench" id="card">
											<Image src="/static/imgs/icon_autobench.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{Korean.AutoBench_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{Korean.AutoBench_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{Korean.AutoBench_Description}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
												<Label as="a" image>
													<Image src="/static/imgs/icon_python.png" /> Python
												</Label>
											</Card.Content>
										</Card>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column>
										<Card href="https://github.com/Mineru98/KoreaMockTestBot" id="card">
											<Image src="/static/imgs/icon_webbot.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{Korean.KoreaMockTestBot_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{Korean.KoreaMockTestBot_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{Korean.KoreaMockTestBot_Description}
												</Card.Description>
											</Card.Content>
											<Card.Content extra>
												<Label as="a" image>
													<Image src="/static/imgs/icon_python.png" /> Python
												</Label>
											</Card.Content>
										</Card>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Container>
						<Container textAlign="left">
							<Header
								id="default"
								as="h2"
								image="/static/imgs/language.svg"
								content={Korean.Code}
							/>
							<Grid>
								<Grid.Row>
									<Grid.Column>
										<Radar data={data} height={300} />
									</Grid.Column>
								</Grid.Row>
								<Grid.Row columns={1}>
									<Grid.Column>
										<Accordion defaultActiveIndex={[]} panels={Mobile} exclusive={false} />
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Container>
					</div>
				</Responsive>
			</div>
		);
	}
}
export default HomeKR;