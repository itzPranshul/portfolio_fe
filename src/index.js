import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FrontPage from './components/frontpage'
import Skills from './components/skills'
import Project from './components/projects'
import Connect from './components/connect'
import About from './components/about'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FrontPage/>
    <Project/>
    <Skills/>
    {/* <App /> */}
    <Connect/>
    {/* <About/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
