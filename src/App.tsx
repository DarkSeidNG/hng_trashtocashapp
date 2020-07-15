import React from 'react';
import header from './assets/img/header.png';
import about from './assets/img/about.png';
import footer from './assets/img/footer.png';
import logo from './assets/img/logo.png';
import './assets/css/App.css';

function App() {
  return (
    <div className="app">
        <section className="section header" >
            <img alt="banner" className="banner-image" src={header} />
            <img className="logo" src={logo} alt="logo" />
            <div className="col-md-6 offset-md-6 content-right">
                <div className="copyright">
                    &copy; Trash Technology
                </div>
                <div className="title">
                    Make Your Trash Profitable.
                </div>
                <div className="content">
                    Don’t just dispose your trash, Make them profitable
                    with our sorphisticated AI. Simply take a picture of
                    your Trash items and convert to profitable finished
                    Products.
                </div>
                <div className="subscribe-container">
                    <div className="subscribe-title">
                        Get update notification
                    </div>
                    <div className="d-flex subscribe-form">
                        <div className="d-flex">
                            <input className="subscribe-input"/>
                            <button className="subscribe-button">Subscribe</button>
                        </div>
                        <button className="buy-button">Buy App</button>
                    </div>
                </div>
            </div>
        </section>
        <section className="section about">
            <img alt="banner" className="banner-image" src={about} />
            <div className="col-md-6 offset-md-6 content-right">
                <div className="copyright">
                </div>
                <div className="title">
                    About
                </div>
                <div className="content">
                    Trash2Cash is a mordern day technology
                    that helps you convert whatever trash
                    at your disposal into cash by simply taking
                    a picture of the said trash and getting loads
                    of options as to where and how to market
                    them.
                </div>
                <div className="subscribe-container">

                </div>
            </div>
        </section>
        <section className="section how-it-works">
            <div className="col-md-12 content-right">
                <div className="title text-center">
                    How this works
                </div>
                <div className="content row">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
            </div>
        </section>
        <section className="section footer">
            <img alt="banner" className="banner-image" src={footer} />
            <div className="col-md-12 content-right d-flex justify-content-between flex-column">
                <div className="title text-center">
                    Make Profit while encouraing a trash free Earth.
                    <br/>
                    <br/>
                    <br/>
                    Coming Soon!
                </div>
                <div className="subscribe-container d-flex justify-content-center align-content-center">
                    <div>
                        <div className="subscribe-title">
                            Contact Us
                        </div>
                        <div className="d-flex subscribe-form">
                            <div className="d-flex">
                                <input className="subscribe-input"/>
                                <button className="subscribe-button">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default App;
