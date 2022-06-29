import React from "react"

export default function About(){
    return(
        <div className="aboutsection">
        <h1 className="info--name">Deepan Murugesan</h1>
        <h2 className="info--designation">Front end developer</h2>
        <h3 className="info--email">deepan.slm@gmail.com</h3>
        
        <button className="num1">
        <img src ="./images/Icon.png" className="button1" /> Email </button>
        
        <button className="num2">
        <img src ="./images/Vector.png" className="button2" /> LinkedIn </button>
        
        <h2 className="about">About</h2>
        <p className="about--para">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        
        <h2 className="interest--head">Interests</h2>
        <p className="interest--para">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        
        </div>
    )
}