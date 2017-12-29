import React from 'react';
import './RepoBox.css';

class RepoBox extends React.Component{
    constructor(){
        super()
        this.state = {
            repos: []
        }
    }
    componentDidMount(){
        fetch("https://api.github.com/users/"+this.props.currentUser+"/repos")
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            var repoData = [];
            data.forEach((x)=>{
                repoData.push(x);
            });
            this.setState({repos: repoData});
        });
    }

    render(){
        return(<div className="inline">
        <h2 className="heading">Repos</h2>
        <div className="repo-box">
            {this.state.repos.map((x,i)=>{
                
                return (<div key ={"repos"+i.toString()}>
                    <a target="_blank" href = {"https://github.com/"+x.full_name}><h3 className="text">{x.name}</h3></a>
                </div>)
            })}
            </div>
            </div>)
    }
}

export default RepoBox;