import React from 'react';
import './Followers.css';

class Following extends React.Component{
    constructor(){
        super()
        this.state = {
            followers: []
        }
    }
    fetchRequest(props){
        fetch("https://api.github.com/users/"+props+"/followers")
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            var followerArray=[];
            data.forEach((x)=>{
                followerArray.push(x);
            });
            this.setState({followers: followerArray});
        });
    }
    componentDidMount(){
     this.fetchRequest(this.props.currentUser);   
    }
    componentWillReceiveProps(nextProps){
     this.fetchRequest(nextProps.currentUser);
    }
    handleClick(e){
        //calls back to function in props in App.js
        this.props.changeUser(e);
    }
    render(){
        return(
            <div className="follower">
                <h2 className="follower-title">Followers</h2>
            <div className="follower-box">
                {this.state.followers.map((x,i)=>{
                    return(
                        <div className="inline-block">
                            <img onClick = {()=>{this.handleClick(x.login)}} className="follower-img" src={x.avatar_url} />
                            <input type = "hidden" />
                            </div>
                    )
                })}
                </div>
                </div>
        )
    }
}

export default Following;