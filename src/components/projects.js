import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {activeTab:0};
	}
	toggleCategories() {
		if(this.state.activeTab === 0) {
			return(
				<div className="projects-grid">
					<Grid className="demo-grid-1">
						<Cell col={4}>
							<Card shadow={10} style={{minWidth: '450', margin:'auto'}}>
								<CardTitle style={{height: '176px', background:"url(react.png) center / cover" }}>
								</CardTitle>
								<CardText>
									<h6 style={{color:'black', marginTop:'-5px', fontWeight:'bold'}}>React Scheduler</h6>
									Created perosnal scheduler using React, Node, Express, MongoDB.<br/>
									This scheduler reminds user events on that day at certain time by sending emails. 
									
								</CardText>
								<CardActions>
									<Button colored>Github</Button>
									<Button colored disabled>CodePen</Button>
									<Button colored>LiveDemo</Button>
								</CardActions>
								<CardMenu style={{color:"#fff"}}>
									<IconButton name="share"/>
								</CardMenu>
							</Card>
						</Cell>
						<Cell col={4}>
							<Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
								<CardTitle style={{height: '176px', background:"url(conference.png) center / cover" }}>
								</CardTitle>
								<CardText>
									<h6 style={{color:'black', marginTop:'-5px', fontWeight:'bold'}}>Georgia Tech Conference Webpage</h6>
									Created webpage for 2019 ASCE International Conference on Computing in Civil Engineering 
									using HTML/CSS/Bootstrap, Javascript, PHP, and MySQL on Plesk.
								</CardText>
								<CardActions>
									<Button colored disabled>Github</Button>
									<Button colored disabled>CodePen</Button>
									<Button>
										<a href="http://i3ce2019.ce.gatech.edu/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>Page Link</a>
									</Button>

								</CardActions>
								<CardMenu style={{color:"#fff"}}>
									<IconButton name="share"/>
								</CardMenu>
							</Card>
						</Cell>
						<Cell col={4}>
							<Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
								<CardTitle style={{height: '176px', background:"url(ble.png) center / cover" }}>
	
								</CardTitle>
								<CardText>
									<h6 style={{color:'black', marginTop:'-5px', fontWeight:'bold'}}>BLE Construction Tracking</h6>
									Developed a proximity detection and alert system using BLE for safety in construction sites by providing
									webpage tracking worker’s location in real-time.
								</CardText>
								<CardActions>
									<Button colored disabled>Github</Button>
									<Button colored disabled>CodePen</Button>
									<Button>
										<a href="https://youtube.com/watch?v=BB_ocvw9gQE" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>Demo</a>
									</Button>

								</CardActions>
								<CardMenu style={{color:"#fff"}}>
									<IconButton name="share"/>
								</CardMenu>
							</Card>
						</Cell>
						<Cell col={4}>
						<Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
							<CardTitle style={{height: '176px', background:"url(rical.png) center / cover" }}>
							</CardTitle>
							<CardText>
								<h6 style={{color:'black', marginTop:'-5px', fontWeight:'bold'}}>RICAL Website</h6>
								Created Robotics & Intelligent Construction Automation Lab(RICAL) Webpage using HTML/CSS/Bootstrap, Javascript.
							</CardText>
							<CardActions>
								<Button colored>
									<a href="https://github.com/32101115/RICAL/tree/master/rical" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>Github</a>
								</Button>
								<Button colored disabled>CodePen</Button>
								<Button>
									<a href="http://rical.ce.gatech.edu/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>Page Link</a>
								</Button>

							</CardActions>
							<CardMenu style={{color:"#fff"}}>
								<IconButton name="share"/>
							</CardMenu>
						</Card>
						</Cell>
						
					</Grid>
				</div>
			)
		} else if(this.state.activeTab === 1) {
			return(
				<div className="projects-grid">
					<Grid className="demo-grid-1">
						<Cell col={6}>
							<Card shadow={10} style={{minWidth: '450', margin:'auto'}}>
								<CardTitle style={{height: '176px', background:"url(https://i.ytimg.com/vi/vzsmN9UmVYI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCUBj-pHSMJOi-PCHW1G_uVPLIrHw) center / cover" }}>
								</CardTitle>
								<CardText>
									<h6 style={{color:'black', marginTop:'-5px', fontWeight:'bold'}}>Proximity detection and alert system using Bluetooth</h6>
									Developed IOS mobile application to give alert in hazardous proximity situations between pedestrian
									workers and construction equipment
									
								</CardText>
								<CardActions>
									<Button colored>
										<a href="https://github.com/32101115/RICAL" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>Github</a>
									</Button>
									<Button colored disabled>CodePen</Button>
									<Button colored>
										<a href="https://www.youtube.com/watch?v=vzsmN9UmVYI" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>Demo</a>
									</Button>
								</CardActions>
								<CardMenu style={{color:"#fff"}}>
									<IconButton name="share"/>
								</CardMenu>
							</Card>
						</Cell>
						<Cell col={6}>
							<Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
								<CardTitle style={{height: '176px', background:"url(https://i.ytimg.com/vi/xMsFq6Z1kHs/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD2iOhYoaq4rh2m5r0mqcSl-t3xLQ) center / cover" }}>
								</CardTitle>
								<CardText>
									<h6 style={{color:'black', marginTop:'-5px', fontWeight:'bold'}}>BLE real-time tracking</h6>
									Developed IOS mobile application for indoor tracking using BLE
								</CardText>
								<CardActions>
									<Button colored>
										<a href="https://github.com/32101115/RICAL" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>Github</a>
									</Button>
									<Button colored disabled>CodePen</Button>
									<Button>
										<a href="https://www.youtube.com/watch?v=xMsFq6Z1kHs" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>Demo</a>
									</Button>

								</CardActions>
								<CardMenu style={{color:"#fff"}}>
									<IconButton name="share"/>
								</CardMenu>
							</Card>
						</Cell>
						
					</Grid>
				</div>
			)
		} else if(this.state.activeTab === 2) {
			return(
				<div className="projects-grid">
					<Grid className="demo-grid-1">
						<Cell col={4}>
							<Card shadow={10} style={{minWidth: '450', margin:'auto'}}>
								<CardTitle style={{height: '176px', background:"url(https://i.ytimg.com/vi/IW0p3bxb_uo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDKL4qHNVN7_xfg54mRnnBcT-gAaw) center / cover" }}>
								</CardTitle>
								<CardText>
									<h6 style={{color:'black', marginTop:'-5px', fontWeight:'bold'}}>The Impact of Tissue Oxygenation on Mortality in Patients with Sepsis</h6>
									Aimed to determine the association between oxygen tissue extraction and mortality at 30 days among acohort of sepsis patients. 
									<br/>
									Used MIMIC-III Dataset and created prediction model through pre-processing data & critical features selected and visualized with D3.js
									
								</CardText>
								<CardActions>
									<Button colored>
										<a href="https://github.com/32101115/BigData" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>Github</a>
									</Button>
									<Button colored disabled>CodePen</Button>
									<Button colored>
										<a href="https://www.youtube.com/watch?v=IW0p3bxb_uo&feature=youtu.be" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>Demo</a>
									</Button>
								</CardActions>
								<CardMenu style={{color:"#fff"}}>
									<IconButton name="share"/>
								</CardMenu>
							</Card>
						</Cell>
						<Cell col={4}>
							<Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
								<CardTitle style={{height: '176px', background:"url(https://i.ytimg.com/vi/dSfnPKSFm0g/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCfKAQhqOrBbuHBDdprpNFKIBOC8A) center / cover" }}>
								</CardTitle>
								<CardText>
									<h6 style={{color:'black', marginTop:'-5px', fontWeight:'bold'}}>Robot Receptionist</h6>
									This project aims to replace human receptionist in College of Computing building with robots.
									<br/>
									Implemented a 3D avatar of the robotic receptionist, dialogue initiating backed by speech recognition,
									facial image recognition and verification, multi-thread agenda matching for the visitor and the visited person
								</CardText>
								<CardActions>
									<Button colored disabled>Github
									</Button>
									<Button colored disabled>CodePen</Button>
									<Button>
										<a href="https://www.youtube.com/watch?v=dSfnPKSFm0g" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>Demo</a>
									</Button>

								</CardActions>
								<CardMenu style={{color:"#fff"}}>
									<IconButton name="share"/>
								</CardMenu>
							</Card>
						</Cell>

						<Cell col={4}>
							<Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
								<CardTitle style={{height: '176px', background:"url(https://i.ytimg.com/vi/DosYZ10Wy0c/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBxC7q-IdltLc_ltrO1oaAVw1JK5Q) center / cover" }}>
								</CardTitle>
								<CardText>
									<h6 style={{color:'black', marginTop:'-5px', fontWeight:'bold'}}>Reinforcement Learning for Robot Navigation and Scan Planning on Unknown Environments</h6>
									This project aims to solve the problem where a laser-scanning robot is placed in an unknown
									environment and needs to decide how to navigate around its surroundings to completely scan the
									environment.
								</CardText>
								<CardActions>
									<Button colored disabled>Github
									</Button>
									<Button colored disabled>CodePen</Button>
									<Button>
										<a href="https://www.youtube.com/watch?v=DosYZ10Wy0c&t=1s" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>Demo</a>
									</Button>

								</CardActions>
								<CardMenu style={{color:"#fff"}}>
									<IconButton name="share"/>
								</CardMenu>
							</Card>
						</Cell>
						
					</Grid>
				</div>
			)
		}
	}


	render() {
		return(
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
					<Tab>Web App</Tab>
					<Tab>Mobile App</Tab>
					<Tab>ML/DL</Tab>
				</Tabs>

				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>

			</div>
		)
	}
}
export default Projects;