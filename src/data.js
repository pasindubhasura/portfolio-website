import react from "./images/react.png";
import node from './images/node.png';
import express from './images/express.png';
import mongodb from './images/mongodb.png';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import redux from './images/redux.png';
import abc from './images/ABC.png';
import abc1 from './images/ABC1.png';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import fb from './images/facebook.png';
import project1 from './images/project1.png'
import project2 from './images/project2.png'
import project3 from './images/project3.png'
import project4 from './images/project4.png'
import project5 from './images/project5.png'

const technologies = [
  {
    "name": "ReactJs",
    "image": react
  },
  {
    "name": "NodeJs",
    "image": node
  },
  {
    "name": "ExpressJs",
    "image": express
  },
  {
    "name": "MongoDB",
    "image": mongodb
  }, {
    "name": "HTML",
    "image": html
  },
  {
    "name": "CSS",
    "image": css
  },
  {
    "name": "JavaScript",
    "image": js
  },
  {
    "name": "Redux",
    "image": redux
  }
];

const projects = [
  {
    "id": 1,
    "projectName": "CookMore - Android Recipe App (Published)",
    "technologies": ["React Native", "Redux", "NodeJs", "MongoDB"],
    "image": project1,
    "description": "This is an Android application built with React Native. It also used a REST API to fetch data which is also created by me using NodeJs and ExpressJs. Further, Redux is also used with MongoDB as the database. This application is published on Google Play Store."
  },
  {
    "id": 2,
    "projectName": "Research Projects Management System",
    "technologies": ["ReactJs", "NodeJs", "ExpressJs", "MongoDB"],
    "image": project2,
    "description": "This is a group project that was developed by my colleagues for a university project at SLIIT. In this project I've developed Login/Registration, a chat system for students to chat with their supervisors and more components. MERN stack was used to developed this system along with Firebase and WebSocket libraries."
  },
  {

    "id": 3,
    "projectName": "StudentBuddy - Android App",
    "technologies": ["Java", "Firebase"],
    "image": project3,
    "description": "This is a group project built with Java and Firebase. In this application, I've developed a Q&A section where students of a campus can ask their academic questions and others can provide answers for them."
  },
  {
    "id": 4,
    "projectName": "Movie Ticket System",
    "technologies": ["ReactJs", "NodeJs", "ExpressJs", "MongoDB"],
    "image": project4,
    "description": "This is a group project that is created with MERN stack. In this system can create user accounts, add movies to cart and buy QR based tickets. In this system, I've developed user login/registration, add to cart and ticket purchasing functionality. When a user buys a ticket they will redirected to Stripe payment gateway and when they make the payment they will receive an confirmation email with order details with the QR code that they can use to check order details."
  },
  {
    "id": 5,
    "projectName": "Portfolio Website",
    "technologies": ["ReactJs", "HTML", "CSS", "JavaScript"],
    "image": project5,
    "description": "This is the portfolio website that I've created to showcase my projects and other personal details. This is created with ReactJs and hosted on Heroku."
  }
];

const profiles = [
  {
    "name": "LinkedIn",
    "image": linkedin,
    "url": "https://www.linkedin.com/in/pasindubhasura/"
  },
  {
    "name": "GitHub",
    "image": github,
    "url": "https://github.com/pasindubhasura"
  },
  {
    "name": "Facebook",
    "image": fb,
    "url": "https://web.facebook.com/pasindubh"
  }
];

export { technologies, projects, profiles };
