import React from 'react';
import './skill.css';
import { faPager, faCodeBranch, faDatabase} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Skill =()=>{
    return(
        <section id="skills">
            <span className='skillTitle'>What I do<br/></span>
            <span className='skillDescription'>I am a skilled and passionate web designer who brings designs to life by creating dynamic and responsive user interface. Additionally, I have experience with Firebase for implementing the real
             time databases and user authentication, as well as the basic knowledge of database management. My works involve:</span>
            <div className='skillBars'>

                <div className='skillItem'>
                    <FontAwesomeIcon icon={faPager} className='iconImg' />
                    <div className='skillBarText'>
                        <h2>Developing Web Application</h2>
                        <p>Using HTML, CSS, and ReactJS to build user-friendly and interactive applications</p>

                    </div>
                </div>

                <div className='skillItem'>
                    <FontAwesomeIcon icon={faCodeBranch} className='iconImg' />
                    <div className='skillBarText'>
                        <h2>Integrating APIs</h2>
                        <p>Connecting front end applications with back end services for seamless data interaction</p>

                    </div>
                </div>

                <div className='skillItem'>
                    <FontAwesomeIcon icon={faDatabase} className='iconImg' />
                    <div className='skillBarText'>
                        <h2>Utilizing Firebase</h2>
                        <p>Implementing real time databases, user authentication, and deploying web applications.</p>

                    </div>
                </div>
                
            </div>
        </section>
    )
}
export default Skill;