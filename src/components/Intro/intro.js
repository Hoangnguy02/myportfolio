import React from 'react';
import './intro.css';
import ann from '../../assets/Ann.png';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Intro =()=>{
    return (
        <section id="intro">
            <div className="IntroContent">
                <span className='hello'>Hello,</span>

                <span className='intro'>My name is <span className='introName'>Ann Nguyen</span><br/>Frontend Developer</span>
                <p className='introParagraph'>
                    with a passion for creating dynamic and responsive UX/UI interface. I<br/> specialize in utilizing modern web technologies such as
                    HTML, CSS,<br/> React JS, etc. to build engaging and user-friendly applications.
                </p>
                
                
                <div>
                    <button className='btn'>
                        <FontAwesomeIcon icon={faSuitcase} className='btnIcon' />
                        Hire me
                    </button>
                </div>
                    
                

            </div>

            <img src={ann} alt="" className="bg"/>

        </section>
    )
};
export default Intro;