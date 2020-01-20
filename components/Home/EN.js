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

const English = {
	Project: 'Project',
	Project_Comment: "These are the projects I've been working on so far.",
	Code: 'My Code Skil',
	Combination_Title: 'Combination of Parentheses',
	Combination_Date: 'Deployed Aug 12, 2019',
	Combination_Description: 'Algorithm for the number of cases in all pairs of parentheses',
	Calculate_Clock_Angle_Title: 'Calculate Clock Angle',
	Calculate_Clock_Angle_Date: 'Deployed Apr 8, 2019',
	Calculate_Clock_Angle_Description:
		'An algorithm that calculates the angle of the watch as you enter the time',
	Android_App_Project_Title: 'Android App Project',
	Android_App_Project_Date: 'Deployed Jan 9, 2018',
	Android_App_Project_Description: 'My First Android Project',
	DBKotlin_Title: 'Dictionary Random with Kotlin',
	DBKotlin_Date: 'Deployed Sep 17, 2019',
	DBKotlin_Description:
		'If the probability is specified in the array in advance, the algorithm extracts the result by the corresponding probability',
	DBNodeJS_Title: 'Dictionary Random with NodeJS',
	DBNodeJS_Date: 'Deployed Sep 17, 2019',
	DBNodeJS_Description:
		'If the probability is specified in the array in advance, the algorithm extracts the result by the corresponding probability',
	Division_Title: 'Division PC or Mobile',
	Division_Date: 'Deployed Aug 15, 2019',
	Division_Description: 'Project to identify by PC or mobile',
	Cnaplus_shop_Title: 'www.cnaplus.shop',
	Cnaplus_shop_Date: 'Deployed Jun 9, 2019',
	Cnaplus_shop_Description:
		'A project that creates a collection of problems by randomly mixing problems to develop self-study skills',
	AutoBench_Title: 'Auto Bench',
	AutoBench_Date: 'Deployed Apr 7, 2019',
	AutoBench_Description:
		'Project to extract cpu / gpu benchmark site data using web crawling technology',
	KoreaMockTestBot_Title: 'Results Collection Bot in Korea',
	KoreaMockTestBot_Date: 'Deployed Sep 12, 2019',
	KoreaMockTestBot_Description:
		'High school exams are important in Korea. Many Korean students like to compare their scores with their friends. This scraping robot responds quickly and conveniently to what you want.',
	Fibonacci_Title: 'Fibonacci',
	Fibonacci_Date: 'Deployed Apr 8, 2019',
	Fibonacci_Description: 'Fibonacci Algorithm',
	Noticend_Title: 'www.noticend.com',
	Noticend_Date: 'Deployed March 20, 2018',
	Noticend_Description: 'Social media project to achieve the right not to be connected.',
	Note_Title: 'Check Note',
	Note_Date: 'Deployed Jun 9, 2019',
	Note_Description:
		'A project that creates a collection of problems by randomly mixing problems to develop self-study skills',
	WareHouse_Title: 'WareHouse',
	WareHouse_Date: 'Deployed Nov 29, 2019',
	WareHouse_Description:
		'Pop & Push stream processing project to prevent user experience when the internet connection is lost during server & client communication'
};

const data_en = {
	labels: ['Syntax', 'Debugging', 'Architecture', 'Expansion', 'CodeReview'],
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

class HomeEN extends React.Component {
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
												{English.Combination_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.Combination_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.Combination_Description}
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
												{English.Calculate_Clock_Angle_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.Calculate_Clock_Angle_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.Calculate_Clock_Angle_Description}
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
												{English.Android_App_Project_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.Android_App_Project_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.Android_App_Project_Description}
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
												{English.DBKotlin_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.DBKotlin_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.DBKotlin_Description}
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
												{English.WareHouse_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.WareHouse_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.WareHouse_Description}
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
												{English.Note_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.Note_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.Note_Description}
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
												{English.Division_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.Division_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.Division_Description}
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
												{English.DBNodeJS_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.DBNodeJS_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.DBNodeJS_Description}
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
												{English.Cnaplus_shop_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.Cnaplus_shop_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.Cnaplus_shop_Description}
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
												{English.AutoBench_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.AutoBench_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.AutoBench_Description}
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
												{English.KoreaMockTestBot_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.KoreaMockTestBot_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.KoreaMockTestBot_Description}
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
												{English.Fibonacci_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.Fibonacci_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.Fibonacci_Description}
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
												{English.Combination_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.Combination_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.Combination_Description}
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
												{English.Calculate_Clock_Angle_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.Calculate_Clock_Angle_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.Calculate_Clock_Angle_Description}
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
												{English.Android_App_Project_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.Android_App_Project_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.Android_App_Project_Description}
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
												{English.DBKotlin_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.DBKotlin_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.DBKotlin_Description}
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
												{English.WareHouse_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.WareHouse_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.WareHouse_Description}
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
												{English.Note_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.Note_Data}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.Note_Description}
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
												{English.Division_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.Division_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.Division_Description}
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
												{English.DBNodeJS_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.DBNodeJS_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.DBNodeJS_Description}
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
												{English.Cnaplus_shop_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.Cnaplus_shop_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.Cnaplus_shop_Description}
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
												{English.AutoBench_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.AutoBench_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.AutoBench_Description}
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
												{English.KoreaMockTestBot_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.KoreaMockTestBot_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.KoreaMockTestBot_Description}
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
												{English.Fibonacci_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{English.Fibonacci_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{English.Fibonacci_Description}
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
								content={English.Project}
							/>
							<p id="default" className="description">
								{English.Project_Comment}
							</p>
							<Grid>
								<Grid.Row columns={4}>
									<Grid.Column>
										<Card href="https://noticend.com" id="card">
											<Image src="/static/imgs/icon_noticend.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{English.Noticend_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{English.Noticend_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{English.Noticend_Description}
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
													{English.Cnaplus_shop_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{English.Cnaplus_shop_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{English.Cnaplus_shop_Description}
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
													{English.Note_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{English.Note_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{English.Note_Description}
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
													{English.AutoBench_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{English.AutoBench_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{English.AutoBench_Description}
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
													{English.KoreaMockTestBot_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{English.KoreaMockTestBot_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{English.KoreaMockTestBot_Description}
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
								content={English.Code}
							/>
							<Grid>
								<Grid.Row>
									<Grid.Column>
										<Radar data={data_en} height={150} />
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
								content={English.Project}
							/>
							<p id="default" className="description">
								{English.Project_Comment}
							</p>
							<Grid>
								<Grid.Row>
									<Grid.Column>
										<Card href="https://noticend.com" id="card">
											<Image src="/static/imgs/icon_noticend.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{English.Noticend_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{English.Noticend_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{English.Noticend_Description}
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
													{English.Cnaplus_shop_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{English.Cnaplus_shop_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{English.Cnaplus_shop_Description}
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
													{English.Note_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{English.Note_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{English.Note_Description}
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
													{English.AutoBench_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{English.AutoBench_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{English.AutoBench_Description}
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
													{English.KoreaMockTestBot_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{English.KoreaMockTestBot_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{English.KoreaMockTestBot_Description}
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
								content={English.Code}
							/>
							<Grid>
								<Grid.Row>
									<Grid.Column>
										<Radar data={data_en} height={300} />
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
export default HomeEN;