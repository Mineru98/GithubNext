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

const Japanese = {
	Project: 'プロジェクト',
	Project_Comment: '今まで私がしてきた作業彩ります。',
	Code: 'コードスキル',
	Combination_Title: 'かっこの組み合わせ',
	Combination_Date: '2019年8月12日から配布',
	Combination_Description: 'すべてのかっこの場合数のアルゴリズム',
	Calculate_Clock_Angle_Title: '時計の角度を計算',
	Calculate_Clock_Angle_Date: '2019年4月8日から配布',
	Calculate_Clock_Angle_Description: '時間を入力すると、時計の角度を計算するアルゴリズム',
	Android_App_Project_Title: 'Androidアプリプロジェクト',
	Android_App_Project_Date: '2018年1月9日から配布',
	Android_App_Project_Description: '私のAndroidアプリプロジェクト',
	DBKotlin_Title: 'Kotlinによる辞書ランダム',
	DBKotlin_Date: '2019年11月17日から配布',
	DBKotlin_Description: '確率が配列にあらかじめ指定されているアルゴリズムは、その確率で結果を抽出します。',
	DBNodeJS_Title: 'NodeJSによる辞書ランダム',
	DBNodeJS_Date: '2019年11月17日から配布',
	DBNodeJS_Description: '確率が配列にあらかじめ指定されているアルゴリズムは、その確率で結果を抽出します。',
	Division_Title: 'PCまたはモバイル区分',
	Division_Date: '2019年8月15日から配布',
	Division_Description: 'PCまたは携帯電話で識別するプロジェクト',
	Cnaplus_shop_Title: 'www.cnaplus.shop',
	Cnaplus_shop_Date: '2019年6月9日から配布',
	Cnaplus_shop_Description: '自律学習技術を開発するためにランダムに問題を混合して、問題のコレクションを作成するプロジェクト',
	AutoBench_Title: 'Auto Bench',
	AutoBench_Date: '2019年4月7日から配布',
	AutoBench_Description: 'ウェブクロール技術を使用して、CPU/ GPUのベンチマークサイトのデータを抽出するプロジェクト',
	KoreaMockTestBot_Title: '韓国の模擬試験の結果を収集ボット',
	KoreaMockTestBot_Date: '2019年11月12日から配布',
	KoreaMockTestBot_Description:
		'韓国では模擬試験の試験が重要です。そして、多くの韓国の学生はスコアを友達と比較することを好みます。このウェブクロールボットは、所望の試験フェトチャを決めればすばやく簡単に反応します。',
	Fibonacci_Title: 'フィボナッチ',
	Fibonacci_Date: '2019年4月8日から配布',
	Fibonacci_Description: 'フィボナッチアルゴリズム',
	Noticend_Title: 'www.noticend.com',
	Noticend_Date: '2018年3月20日から配布',
	Noticend_Description: '接続されない権利を達成するためのソーシャルメディアのプロジェクト。',
	Note_Title: '誤答ノート',
	Note_Date: '2019年6月9日から配布',
	Note_Description: '自律学習技術を開発するためにランダムに問題を混合して、問題のコレクションを作成するプロジェクト',
	WareHouse_Title: '倉庫',
	WareHouse_Date: '2019年11月29日から配布',
	WareHouse_Description:
		'サーバー＆クライアントの通信をする際に、インターネット接続が切れているときに、ユーザーの経験を落とさないためのPop＆Push形態のストリーム処理プロジェクト'
};

const data_jp = {
	labels: ['構文', 'デバッグ', '建築', '拡張性', 'コードレビュー'],
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

class HomeJP extends React.Component {
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
												{Japanese.Combination_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.Combination_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.Combination_Description}
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
												{Japanese.Calculate_Clock_Angle_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.Calculate_Clock_Angle_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.Calculate_Clock_Angle_Description}
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
												{Japanese.Android_App_Project_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.Android_App_Project_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.Android_App_Project_Description}
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
												{Japanese.DBKotlin_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.DBKotlin_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.DBKotlin_Description}
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
												{Japanese.WareHouse_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.WareHouse_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.WareHouse_Description}
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
												{Japanese.Note_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.Note_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.Note_Description}
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
												{Japanese.Division_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.Division_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.Division_Description}
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
												{Japanese.DBNodeJS_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.DBNodeJS_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.DBNodeJS_Description}
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
												{Japanese.Cnaplus_shop_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.Cnaplus_shop_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.Cnaplus_shop_Description}
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
												{Japanese.AutoBench_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.AutoBench_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.AutoBench_Description}
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
												{Japanese.KoreaMockTestBot_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.KoreaMockTestBot_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.KoreaMockTestBot_Description}
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
												{Japanese.Fibonacci_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.Fibonacci_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.Fibonacci_Description}
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
												{Japanese.Combination_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.Combination_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.Combination_Description}
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
												{Japanese.Calculate_Clock_Angle_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.Calculate_Clock_Angle_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.Calculate_Clock_Angle_Description}
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
												{Japanese.Android_App_Project_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.Android_App_Project_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.Android_App_Project_Description}
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
												{Japanese.DBKotlin_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.DBKotlin_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.DBKotlin_Description}
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
												{Japanese.WareHouse_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.WareHouse_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.WareHouse_Description}
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
												{Japanese.Note_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.Note_Data}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.Note_Description}
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
												{Japanese.Division_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.Division_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.Division_Description}
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
												{Japanese.DBNodeJS_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.DBNodeJS_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.DBNodeJS_Description}
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
												{Japanese.Cnaplus_shop_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.Cnaplus_shop_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.Cnaplus_shop_Description}
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
												{Japanese.AutoBench_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.AutoBench_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.AutoBench_Description}
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
												{Japanese.KoreaMockTestBot_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.KoreaMockTestBot_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.KoreaMockTestBot_Description}
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
												{Japanese.Fibonacci_Title}
											</Card.Header>
											<Card.Meta>
												<span className="date">
													{Japanese.Fibonacci_Date}
												</span>
											</Card.Meta>
											<Card.Description id="default">
												{Japanese.Fibonacci_Description}
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
								content={Japanese.Project}
							/>
							<p id="default" className="description">
								{Japanese.Project_Comment}
							</p>
							<Grid>
								<Grid.Row columns={4}>
									<Grid.Column>
										<Card href="https://noticend.com" id="card">
											<Image src="/static/imgs/icon_noticend.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{Japanese.Noticend_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{Japanese.Noticend_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{Japanese.Noticend_Description}
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
													{Japanese.Cnaplus_shop_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{Japanese.Cnaplus_shop_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{Japanese.Cnaplus_shop_Description}
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
													{Japanese.Note_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{Japanese.Note_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{Japanese.Note_Description}
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
													{Japanese.AutoBench_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{Japanese.AutoBench_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{Japanese.AutoBench_Description}
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
													{Japanese.KoreaMockTestBot_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{Japanese.KoreaMockTestBot_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{Japanese.KoreaMockTestBot_Description}
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
								content={Japanese.Code}
							/>
							<Grid>
								<Grid.Row>
									<Grid.Column>
										<Radar data={data_jp} height={150} />
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
								content={Japanese.Project}
							/>
							<p id="default" className="description">
								{Japanese.Project_Comment}
							</p>
							<Grid>
								<Grid.Row>
									<Grid.Column>
										<Card href="https://noticend.com" id="card">
											<Image src="/static/imgs/icon_noticend.png" wrapped ui={false} />
											<Card.Content>
												<Card.Header id="default">
													{Japanese.Noticend_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{Japanese.Noticend_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{Japanese.Noticend_Description}
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
													{Japanese.Cnaplus_shop_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{Japanese.Cnaplus_shop_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{Japanese.Cnaplus_shop_Description}
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
													{Japanese.Note_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{Japanese.Note_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{Japanese.Note_Description}
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
													{Japanese.AutoBench_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{Japanese.AutoBench_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{Japanese.AutoBench_Description}
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
													{Japanese.KoreaMockTestBot_Title}
												</Card.Header>
												<Card.Meta>
													<span className="date">
														{Japanese.KoreaMockTestBot_Date}
													</span>
												</Card.Meta>
												<Card.Description id="default">
													{Japanese.KoreaMockTestBot_Description}
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
								content={Japanese.Code}
							/>
							<Grid>
								<Grid.Row>
									<Grid.Column>
										<Radar data={data_jp} height={300} />
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
export default HomeJP;