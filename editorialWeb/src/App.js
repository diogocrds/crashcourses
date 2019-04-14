import React, { Component } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Generic from './components/pages/Generic';
import Homepage from './components/pages/Homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

/*
=> Index
- Wrapper
  - Main
    - Header
    - Banner
    - Section
    - Section
  - Sidebar
    - Search
    - Menu
    - Section
    - Section
    - Footer
    
=> Generic
- Wrapper
  - Main
    - Header
    - Content
  - Sidebar
    - Search
    - Menu
    - Section
    - Section
    - Footer
*/

class App extends Component {
  render() {
    return (
      <Router>
        <div id='wrapper'>
          <div id='main'>
            <div className='inner'>
              {/* ------- Header ------- */}
              <Header />
              <Route
                exact
                path='/'
                render={props => <Homepage props isAuthed={true} />}
              />
              <Route path='/generic' component={Generic} />
            </div>
          </div>
          {/* ------- Sidebar ------- */}
          <Sidebar />
        </div>
      </Router>
    );
  }
}

export default App;
