import React from 'react'
import { CSSTransition } from 'react-transition-group'
import home from '../css/home.css'



const Home = () => {
    return (
        <section id="home">
            <div id="home-container">
                <CSSTransition
                    in={true}
                    timeout={3000}
                    classNames={"home-left-bar-"}
                    appear={true}
                >
                    <div className="bar home-left-bar"></div>

                </CSSTransition>
                <CSSTransition
                    in={true}
                    timeout={3000}
                    classNames={"home-left-content-"}
                    appear={true}>
                    <div className="home-left-content">WE购</div>
                </CSSTransition>

                <CSSTransition
                    in={true}
                    classNames={"home-middle-bar-"}
                    timeout={3000}
                    appear={true}
                >
                    <div className="bar home-middle-bar"></div>
                </CSSTransition>
                <CSSTransition
                    in={true}
                    timeout={3000}
                    classNames={"home-right-content-"}
                    appear={true}>
                    <div className="home-right-content">
                        <div className="home-right-top">HEYWEGO</div>
                        <div className="home-right-bottom">多伦多电商平台</div>
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={true}
                    timeout={3000}
                    classNames={"home-right-bar-"}
                    appear={true}>
                    <div className="bar home-right-bar"></div>
                </CSSTransition>
            </div>
            <div className="download">
                <div className="download-left">
                    <div>Download App</div>
                    <div>Supported both Andriod and IOS</div>
                </div>
                <div className="download-right">

                </div>
            </div>
        </section>
    )
}

export default Home;