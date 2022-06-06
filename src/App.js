import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExampleComponent from './components/ExampleComponent';
import Message from './components/Message';
import Posts from './components/Posts';
import Create from './components/Create';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className='container mx-auto'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
            </Routes>
            <Message />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;














{/* <ExampleComponent className="App">
          <Posts/>
          <Message />
          <ExampleComponent name='Some property'/>
            <p>Child property</p>
          </ExampleComponent> */}
