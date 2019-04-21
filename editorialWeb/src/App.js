import React, { Component } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Page from './components/pages/Page';
import Homepage from './components/pages/Homepage';
import ScrollToTop from './ScrollToTop';
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
      <Provider store={store}>
        <Router>
          <ScrollToTop />
          <div id='wrapper'>
            <div id='main'>
              <div className='inner'>
                {/* ------- Header ------- */}
                <Header />
                <Route
                  exact
                  path='/'
                  render={props => <Homepage {...props} isAuthed={true} />}
                />
                <Route
                  exact
                  path='/pg/:id?'
                  render={props => <Page {...props} isAuthed={true} />}
                />
              </div>
            </div>
            {/* ------- Sidebar ------- */}
            <Sidebar />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
