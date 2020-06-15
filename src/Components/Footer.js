import React, { Component } from "react";
import './Footer.css';
import FBLogo from '../images/fb.png';
import TWLogo from '../images/twitter.png';
import EmailLogo from '../images/email.png';

export default class Footer extends Component {
    
    render(){    
        return(
        <div className="footer">
            <footer className="footer-distributed">
                <div className="footer-right">
                    <a  href="http://www.facebook.com/sharer/sharer.php?u=&lt;URL&gt;"><i className="fa fa-facebook"><img className="fblogo" src={FBLogo} alt=""></img></i></a>

                    <a href="http://twitter.com/share?url=&lt;URL&gt;&amp;text=&lt;TEXT&gt;&amp;via=&lt;VIA&gt;"><i className="fa fa-twitter"><img className="twitterlogo" src={TWLogo} alt=""></img></i></a>
                    <a href="mailto:?subject=&lt;SUBJECT&amp;body=&lt;BODY&gt;"><i className="fa fa-mail-forward"><img className="emaillogo" src={EmailLogo} alt=""></img></i></a>
                    </div>
                <div className="footer-left">
                    <p className="footer-links"><a href="#">Back to Top</a></p>
                    <p className="coyp-right">Game Player Zone © 2020</p>
                    <p className="footer-content">All right reserved.</p>
                </div>
            </footer>
        </div>
        );
    }
}