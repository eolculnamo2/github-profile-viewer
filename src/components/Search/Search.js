import React from 'react';
import './Search.css';

class Search extends React.Component{
    componentDidMount(){
        //componentDidMount houses event listener
      document.getElementById("searchInput")
      .addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
          document.getElementById("submitButton").click();
      }
  });
      }
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
            <form>
                <input className="search-input" placeholder="GitHub Username" ref="username"/>
                <button type="submit" onClick={this.handleClick.bind(this)} className="search-button">
                    Search User
                    </button>
                </form>
                </div>
        )
    }
}

export default Search;