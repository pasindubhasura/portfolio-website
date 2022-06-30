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
    "projectName": "ABC System",
    "technologies": ["HTML", "CSS", "JavaScript"],
    "image": abc
  },
  {
    "projectName": "ABC System",
    "technologies": ["HTML", "CSS", "JavaScript"],
    "image": abc1
  },
  {
    "projectName": "ABC System",
    "technologies": ["HTML", "CSS", "JavaScript"],
    "image": abc1
  },
  {
    "projectName": "ABC System",
    "technologies": ["HTML", "CSS", "JavaScript"],
    "image": abc
  },
  {
    "projectName": "ABC System",
    "technologies": ["HTML", "CSS", "JavaScript"],
    "image": abc
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
