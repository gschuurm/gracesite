import React, { Component } from 'react';
import me from './grace.jpeg';
import beaconapp from './imgs/prevbeacons.png'
import personas from './imgs/personas.png';
import interactions from './imgs/interactions.png';
import beaconflow from './imgs/beaconflow.png';
import longwf from './imgs/Bitmap.png';
import profile1 from './imgs/profile1.png';
import beacon3 from './imgs/beacon3.png';
import beaconfeed from './imgs/BeaconFeed.png';
import updates from './imgs/updates.png';
import wfprevbeacons from './imgs/wfPrevBeacons.png';
import wfnotifications from './imgs/wfNotifications.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <img src={me} alt="Grace" />
          <h1>Grace Schuurmans</h1>
          <h2 className="primary-color">UX Designer and Developer</h2>
        </header>
        <h3>About me:</h3>
        <p className="intro-text">
          Hi, I'm Grace, and I'm a designer and developer living in Grand Rapids, MI. I have over three years of experience working in the software industry as a developer, QA analyst, and UI/UX designer. I'm passionate about different people and cultures, and this drives my interest in UX, using my empathy and creative skills in combination with my analytical mind to design intuitive interfaces.
        </p>
        <h3>See an example of my recent work here:</h3>
        <a href="/"><img src={beaconapp} alt="beacon event app project" /></a>
        <p className="intro-text">Want to chat about a UX project, role, or something else? <a href="mailto:gschuurm@gmail.com">Get in touch</a> and I'll get back to you soon.</p>


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
