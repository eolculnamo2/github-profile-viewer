import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar.js';
import PicAndBio from './components/PicAndBio/PicAndBio.js';
import RepoBox from './components/RepoBox/RepoBox.js';
import Following from './components/Following/Following.js';
import Followers from './components/Followers/Followers.js';
import Footer from './components/Footer/Footer.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: "eolculnamo2"
    }
    this.changeUser = this.changeUser.bind(this);
  }
  changeUser(username){
    this.setState({currentUser: username})
  }
  render() {
    return (
      <div>
        <NavBar/>
        <PicAndBio currentUser={this.state.currentUser}/>
        <RepoBox currentUser={this.state.currentUser}/>
        <center>
        <Following changeUser={this.changeUser} currentUser={this.state.currentUser}/>
        <Followers changeUser={this.changeUser} currentUser={this.state.currentUser}/>
        </center>
        <Footer/>
      </div>
    );
  }
}

export default App;
