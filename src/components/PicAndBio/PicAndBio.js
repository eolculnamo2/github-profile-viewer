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
    fetchRequest(props){
        fetch("https://api.github.com/users/"+props)
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
        this.fetchRequest(this.props.currentUser)
    }
    componentWillReceiveProps(nextProps){
        this.fetchRequest(nextProps.currentUser)
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