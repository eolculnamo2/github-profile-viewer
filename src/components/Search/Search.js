import React from 'react';
import './Search.css';

class Search extends React.Component{
    handleClick(){
        this.props.changeUser(this.refs.username.value);
    }
    render(){
        return(
            <div className="search">
                <h1 className="search-text">
                    Welcome to Git Profiles
                    </h1>
                    <h3 className="search-text">
                        Search By Username
                        </h3>
                <input className="search-input" placeholder="GitHub Username" ref="username"/>
                <button onClick={this.handleClick.bind(this)} className="search-button">
                    Search User
                    </button>
                </div>
        )
    }
}

export default Search;