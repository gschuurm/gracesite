import React, { Component } from 'react';
import photo from './grace.jpeg';
import personas from './imgs/personas.png';
import interactions from './imgs/interactions.png';
import beaconflow from './imgs/beaconflow.png';
import longwf from './imgs/Bitmap.png';
import profile1 from './imgs/profile1.png';

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


        <div className="">
          <h2>Beacon Event App</h2>
          <p>As a UX Designer at Kyros Digital, I designed an app for a client that allows people to organize events happening today that others can join, such as meeting for coffee at a specific coffeeshop.
The user creates an event, named a “beacon”, which posts to an area where other users can view details and ask to join. The client also wanted a chat messaging component.
The app would be pitched to investors, so my boss asked for nine wireframes and final mockups for the app.
In order for me to create successful wireframes and mockups, I needed to step into our users’ shoes with discovering user goals and interactions via personas.</p>
<p>With minimal bandwidth for user research, personas, characters used to personify user types, were essential for understanding potential users.
I first asked questions such as, Who are the users? and What are their behaviors and expectations? Personas for two demographics resulted: one milennial female professional and one experienced male salesman. I then outlined some basic traits about them, such as their work background, experience with technology, and motivations for using the app.
These personas guided the design process for discovering user goals, touchpoints, and channels of using the app (where and how it is used within the app and real life environments), and lead to wireframing.
</p>
<img src={personas} alt="Persona Descriptions"/>
<p>Following persona creation, I started mapping out a core user story through my female persona, Amy’s, eyes: creating a “beacon” event:
Touchpoints:

After discovering various possible outcomes from each step in this journey, I wrote down a rough flow chart of different interactions relating to the user creating a beacon event.
These steps enabled me to design the information architecture, including app navigation and layout, in a more informed and empathetic way.
</p>
<img src={beaconflow} alt="Beacon Creation Flow"/>
<img src={interactions} alt="Beacon Interactions Examples"/>

<p>At this point, I started some basic guerilla testing, discussing my findings and intial sketches with my coworkers at Kyros Digital and others I asked to look at my work. Then I started sketching out wireframes on paper.
</p>
<img src={longwf} alt="Sketched beacon creation wireframe"/>
<img src={profile1} alt="Sketched profile wireframe"/>
<img src={profile1} alt="Sketched profile wireframe"/>

<p>After sketching and reiterated many times on paper, I created digital wireframes in Sketch. These were then presented to the client, and she gave the go-ahead for creating the final UI mockups.
</p>
<img src={profile1} alt="Sketched profile wireframe"/>
<img src={profile1} alt="Sketched profile wireframe"/>

<p>The client has said she wanted the color green incorporated, and due to not having a branding style guide, logo, or even name decided on for the app, I designed it to be as versatile as possible. The app needed a friendly and social feel while staying clean and minimal. The mockups went over very well with the client, and she is in the process of preparing to pitch her app idea to investors.
</p>
        </div>
      </div>
    );
  }
}

export default App;
