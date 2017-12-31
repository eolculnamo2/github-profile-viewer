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
      currentUser: "eolculnamo2",
      viewProfile: false
    }
    this.changeUser = this.changeUser.bind(this);
  }
  changeUser(username){
    this.setState({currentUser: username})
  }
  profileView(){
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
  searchView(){
    return(
      <div>
        <NavBar/>
        <Footer/>
        </div>
    )
  }
  render() {
    if(this.state.viewProfile){
      return this.searchView();
    }
    else{
      return this.profileView();
    }
  }
}
//c6ff96a3fe7ba37a289b07c58f6ed96f87e19045
export default App;
