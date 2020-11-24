import React, { Component } from 'react';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Navbar from './navbar/Navbar';
import Portfolio from './pages/Portfolio';
import Profile from './pages/Profile';
import Skills from './pages/Skills';

export default class Home extends Component {
    render() {
        return (
            <section>
             <Navbar />
              <div className='container'>
               <div className='row'>
                <div className='col s12 m4 l3'>
                    <Profile />
                </div>
                <div className='col s12 m8 l9'>
                    <About />
                    <Skills />
                    <Experience />
                    <Education />
                    <Portfolio />    
                </div>    
               </div>   
              </div>
            </section>
        );
    }
}
