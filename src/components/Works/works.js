import React from "react";
import "./works.css";
import myClub from "../../assets/myClub.png";
import website from "../../assets/website.png";
import MoneyFlow from "../../assets/MoneyFlow.png";


const Works =()=>{
    return(
        <section id="works">
            <p className="worksTitle">
                My Portfolio
            </p>
            <p className="worksDes">
            As a UX/UI designer, I take pride in my attention to detail, ensuring that my work is pixel-perfect. 
            I am excited to bring my skills and experience to help businesses achieve their goals and establish a strong online presence.
            </p>

            <div className="worksImg">
                <img src={website}  className="img" alt="website"/>
                <img src={myClub}  className="img" alt="clubs"/>
                <img src={MoneyFlow}  className="img" alt="MoneyFlow"/>
            </div>
            <button className="workBtn">See More</button>
        </section>

    )
}

export default Works;