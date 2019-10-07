import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'

class LandingPage extends Component {
	render() {
		return(
			<div style={{width:'100%',height:'100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img className="avatar-img" src="jitae.jpeg" alt="avatar"/>

					<div className="banner-test">
						<h1>
							Full Stack Developer
						</h1>
						<hr/><br/>
						<p>
							HTML/CSS | Java | Javascript | C | Python | PHP | Swift <br/>
							jQuery | Ajax | React | D3 | Node | Express <br/>
							Bootstrap | Laravel | Nginx | MySQL | MongoDB <br/>

						</p>

						<div className="social-links">

							<a href="https://www.linkedin.com/in/jitae-kim-b564ab125/" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-linkedin-square" aria-hidden="true" />
							</a>

							<a href="https://github.com/32101115" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-github-square" aria-hidden="true" />
							</a>

						</div>
					</div>

				

					</Cell>
				</Grid>
			</div>
		)
	}
}
export default LandingPage;