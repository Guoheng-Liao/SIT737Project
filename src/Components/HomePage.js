import React, { Component } from 'react';
import './Footer.css';
import './HomePage.css';

export default class HomePage extends Component {
    render(){
        return(
            <React.Fragment>
                <div>
                    <h1 style={headStyle}>Welcome to Game Player Zone</h1><br />
                    <div className="image1">
                        < img src={require('../images/image1.jpg')} alt='' />
                    </div>


                    <h2 style={headStyle}>Introduction</h2><br />

                    <div style={{ position: 'relative' }}>
                        <div style={divStyle}>
                            <p style={{ fontFamily: 'Sans-serif', fontSize: '20px', color: 'black' }}>
                                This website is a platform for gamers to communicate with each other.
                                There is the latest game information here, but also a social platform
                                for players to interact and share. You can also buy the latest, most
                                popular, and hottest games through the platform. We have many categories
                                of games, including strategy games, action games, sports games, fighting
                                games, music games, racing games, and role-playing games, but there are
                                also a few online single-player games.
                            </p>
                        </div>
                    </div>

                    <div className="image2">
                        < img src={require('../images/image2.jpg')} height='300px' width='100%' alt='' />
                    </div>

                    <h2 style={headStyle}>Game News</h2><br />

                    <div style={{ position: 'relative' }}>
                        <div style={divStyle}>
                            <p style={{ fontFamily: 'Sans-serif', fontSize: '20px', color: 'black' }}>
                            The legal channels switch was officially released on December 10, announcing
                            the cooperation between Tencent and nintendo. Since then, the world's three 
                            major consoles ps, xbox and switch have all been listed in the legal channels 
                            version in China, and console games are expected to become the next growth point
                            in the industry in the future. Combined with the rapid growth of stand-alone 
                            games, the console as its main publishing platform will also enjoy the dividend 
                            of market growth. Moreover, console games have a high unit price and strong user 
                            stickiness. The global market has reached $47.9 billion, accounting for 32% of the 
                            total game market, which is attractive to domestic manufacturers.
                            </p>
                        </div>
                    </div>
                    <div className="image3">
                        < img src={require('../images/image3.jpg')} height='300px' width='100%' alt="" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const headStyle = {
    textAlign: 'center',
    fontFamily: '&quot,Paramountain&quot',
    fontSize: '50px',
    textTransform: 'capitalize'

}
const divStyle = {
    color: '#777',
    backgroundColor: 'white',
    textAlign: 'center',
    padding: '50px 80px',
    textAlign: 'justify'
}