import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar.js';
import PicAndBio from './components/PicAndBio/PicAndBio.js';
import RepoBox from './components/RepoBox/RepoBox.js';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser: "eolculnamo2"
    }
  }
  render() {
    return (
      <div>
        <NavBar/>
        <PicAndBio currentUser={this.state.currentUser}/>
        <RepoBox currentUser={this.state.currentUser}/>
      </div>
    );
  }
}

export default App;
