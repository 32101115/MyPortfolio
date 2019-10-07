import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
	render() {
		return(
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{textAlign: 'center'}}>
			              <img
						  		className = "avatar-img1"
								src="jitae1.jpeg"
								alt="avatar"
                 			/>
			            </div>

			            <h2 style={{paddingTop: '1em'}}>Jitae Kim</h2>
			            <h4 style={{color: 'grey'}}>Programmer</h4>
			            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
			            <p>
							I'm an honest, self-motivated and hard working person with positive attitude 
							towards my career and my life. I'm very enthusiastic about learning new technologies/skills
							and enjoy working in a challenging environment.

							<br/>
							I can do hard work for my organization. I will put all my efforts for the good
							progress of the organization. I will try to fulfill all the needs of the company
							and also complete the work given to me on time.
				        </p>
			            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
			            <h5>Address</h5>
			            <p>Lawrenceville, GA</p>
			            <h5>Phone</h5>
			            <p>404-834-5882</p>
			            <h5>Email</h5>
			            <p>kimjt1226@gmail.com</p>
			            <h5>Web</h5>
			            <p>mywebsite.com</p>
			            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
					</Cell>

					<Cell className='resume-right-col' col={8}>

						<h2>Education</h2>

						<Education 
							startYear={"Aug 2012"}
							endYear={"May 2015"}
                 			schoolName="Georgia Perimeter College, Atlanta, GA"
                 			schoolDescription="Majored Mathematics/ 4.0 GPA / Tutored Pre-Calculus, Calculus I, II, and III" />

						<Education 
							startYear={"Aug 2015"}
							endYear={"Dec 2017"}
                 			schoolName="Georgia Institute of Technology, Atlanta, GA"
                 			schoolDescription="Graduated B.S. in Computer Science / 3.7 GPA / Highest Honor" />
						
						<Education 
							startYear={"Jun 2018"}
							endYear={"Current"}
                 			schoolName="Georgia Institute of Technology, Atlanta, GA"
                 			schoolDescription="M.S in Computer Science/ 3.7 current GPA / Specialized in Machine Learning" />

                 		<hr style={{borderTop: '3px solid #e22947'}} />

                 		<h2>Experience</h2>
                 		<Experience
                 			startYear={"May 2017"}
							endYear={"Aug 2019"}
                 			schoolName="Georgia Tech Robotics & Intelligent Construction Automation Lab Research Assistant"
							 schoolDescription="Worked as full-stack developer and Mobile application developer"/>

                 		<Experience
                 			startYear={"May 2019"}
							endYear={"Aug 2019"}
                 			schoolName="Senegal Software (Full stack PFP developer summer Intern)"
                 			schoolDescription="Worked with Laravel to add functionality to CRUD web application and learned effective debugging
							 techniques for a live production environment."/>

						<Experience
                 			startYear={"Jan 2018"}
							endYear={"Current"}
                 			schoolName="Senegal Software (Full stack PFP developer summer Intern)"
                 			schoolDescription="Had responsibilities include grading and assisting students on various Computational Photography assignments related to
							 Image Processing, Feature Detection, Image Blending, Video Textures & Video Synthesis and etc."/>

					
                 		<hr style={{borderTop: '3px solid #e22947'}} />

                 		<h2>Skills</h2>
			              	<Skills skill="HTML/CSS/Bootstrap" progress={100}/>
							<Skills skill="Python" progress={100}/>
							<Skills skill="javascript" progress={80}/>
							<Skills skill="PHP/Laravel" progress={60}/>

							<Skills skill="Java" progress={60}/>
		                	<Skills skill="C" progress={40}/>
							<Skills skill="Swift" progress={40}/>

		                	<Skills skill="MySQL/MongoDB" progress={60}/>
			                <Skills skill="jQuery/Ajax" progress={60}/>
							<Skills skill="Node/Express" progress={40}/>
	                    	<Skills skill="React" progress={40}/>
							<Skills skill="D3" progress={40}/>

					</Cell>
				</Grid>
			</div>
		)
	}
}
export default Resume;