import React, { Component } from 'react';
import photo from './grace.jpeg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <img src={photo} alt="Grace" />
          <h1>Grace Schuurmans</h1>
          <h2 className="primary-color">UX Designer and Developer</h2>
        </header>
        <h3>About me:</h3>
        <p className="intro-text">
          Hi, I'm Grace, and I'm a designer and developer living in Grand Rapids, MI. I have four years of experience working in the software industry as a developer, QA analyst, and UI/UX designer. I'm passionate about different people and cultures, and this drives my interest in UX, using my empathy and creative skills in combination with my analytical mind to design intuitive interfaces.
        </p>
        <p className="intro-text">Want to chat about a UX project, role, or something else? <a href="mailto:gschuurm@gmail.com">Get in touch</a> and I'll get back to you ASAP.</p>
        <hr/>
        <div className="center small-text">
          <p>Grace Schuurmans, User Experience Designer (UX)</p>
          <p><a href="mailto:gschuurm@gmail.com">Email me</a>   |   <a href="https://www.linkedin.com/in/grace-schuurmans/">LinkedIn</a></p>
        </div>
      </div>
    );
  }
}

export default App;
