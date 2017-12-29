import React from 'react';
import './PicAndBio.css';

class PicAndBio extends React.Component{
    constructor(){
        super();
        this.state = {
            username: "",
            bio: "",
            imgUrl: ""
        }
    }
    fetchRequest(){
        fetch("https://api.github.com/users/"+this.props.currentUser)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            this.setState({
                username: data.login,
                bio: data.bio,
                imgUrl: data.avatar_url
            });
        });
    }
    componentDidMount(){
        this.fetchRequest()
    }
    componentWillReceiveProps(){
        this.fetchRequest()
    }   
    render(){
        return(
            <div className="bio-box">
                    <h2 className = "text username">{this.state.username}</h2>
                    <img className="image" src = {this.state.imgUrl}/>
                    <h4 className="text">{this.state.bio}</h4>
                </div>
        )
    }
}

export default PicAndBio;