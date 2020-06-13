import React, { Component } from 'react';

export default class Shopping extends Component {
    render(){
        return(
            <React.Fragment>
            <div>
                <p>This page is Game Shopping page.</p>
            </div>
            <div class="footer">
            <footer class="footer-distributed">
                <div class="footer-right">
                    <a href="http://www.facebook.com/sharer/sharer.php?u=&lt;URL&gt;"><i class="fa fa-facebook"></i></a>

                    <a href="http://twitter.com/share?url=&lt;URL&gt;&amp;text=&lt;TEXT&gt;&amp;via=&lt;VIA&gt;"><i class="fa fa-twitter"></i></a>
                    <a href="mailto:?subject=&lt;SUBJECT&amp;body=&lt;BODY&gt;"><i class="fa fa-mail-forward"></i></a></div>
                <div class="footer-left">
                    <p class="footer-links"><a href="#">Back to Top</a></p>
                    <p>Game Player Zone © 2020</p>
                </div>
            </footer>
        </div>
             </React.Fragment>
        );
    }
}