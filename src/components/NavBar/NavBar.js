import React from 'react';
import './NavBar.css';

class NavBar extends React.Component{
    render(){
        return(
            <div className="nav-bar">
                <span onClick ={this.props.returnToSearch}>Git Profile Viewer</span>
                </div>
        )
    }
}

export default NavBar;