import React from 'react';
import './Footer.css';

class Footer extends React.Component{
    render(){
        return(
        <div className="footer">
            <h4 className="footer-text">
                App by Rob Bertram
                </h4>
                <a className="link" href = "https://www.github.com/eolculnamo2">
                <h4>
                    GitHub
                    </h4>
                    </a>
            </div>
        )
    }
}

export default Footer;