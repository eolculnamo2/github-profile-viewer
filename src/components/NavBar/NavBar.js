import React from 'react';
import './NavBar.css';

class NavBar extends React.Component{
    render(){
        return(
            <div className="nav-bar">
                <p className="nav-title" onClick ={this.props.returnToSearch}>Git Profile Viewer</p>
                </div>
        )
    }
}

export default NavBar;