import React from 'react';
import './Following.css';

class Following extends React.Component{
    constructor(){
        super()
        this.state = {
            following: []
        }
    }
    fetchRequest(){
        fetch("https://api.github.com/users/"+this.props.currentUser+"/following")
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            var followingArray=[];
            data.forEach((x)=>{
                followingArray.push(x);
            });
            this.setState({following: followingArray});
        });
    }
    componentDidMount(){
        this.fetchRequest();
    }
    componentWillReceiveProps(){
        this.fetchRequest();
    }
    handleClick(e){
        //calls back to function in props in App.js
        this.props.changeUser(e);
    }
    render(){
        return(
            <div className="following">
                <h2 className="following-title">Following</h2>
            <div className="following-box">
                {this.state.following.map((x,i)=>{
                    return(
                        <div className="inline-block">
                            <img onClick = {()=>{this.handleClick(x.login)}} className="following-img" src={x.avatar_url} />
                            </div>
                    )
                })}
                </div>
                </div>
        )
    }
}

export default Following;