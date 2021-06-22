import React from 'react'
import { CSSTransition } from 'react-transition-group'
import about from '../css/about.css'
const About = () => {

    return (
        <section id="about">
            <div id="about-container">
                <CSSTransition
                    in={true}
                    timeout={3000}
                    classNames={"about-left-bar-"}
                    appear={true}
                >
                    <div className="bar about-left-bar">
                        <CSSTransition
                            in={true}
                            classNames={"content-intro-"}
                            timeout={3000}
                            appear={true}>
                            <div className="content content-intro">
                                <div className="content-header">关于我们</div>
                                <div className="content-bottom">WE购（Heywego）成立于2020年，是一家总部位于多伦多，集返现配送团购的全方位电商平台。致力打造北美最大最全线上平台，其中涵盖美妆，母婴，零食，生鲜，日用，家电等十几个范围。</div>
                            </div>
                        </CSSTransition>

                    </div>
                </CSSTransition>
                <CSSTransition
                    in={true}
                    timeout={3000}
                    classNames={"about-left-content-"}
                    appear={true}>
                    <div className="about-left-content">WE购</div>
                </CSSTransition>

                <CSSTransition
                    in={true}
                    classNames={"about-middle-bar-"}
                    timeout={3000}
                    appear={true}
                >
                    <div className="bar about-middle-bar">
                        <CSSTransition
                            in={true}
                            classNames={"content-vision-"}
                            timeout={3000}
                            appear={true}>
                            <div className="content content-vision">
                                <div className="content-header">我们的宗旨</div>
                                <div className="content-bottom">我们不断发掘最优质的的商品，以最高品质、最优价回馈客人。作为优品研究站，现拥有上万种优选人气商品，由日韩知名厂商直接供货，稳定货源，正品保障。</div>
                            </div>
                        </CSSTransition>

                    </div>
                </CSSTransition>
                <CSSTransition
                    in={true}
                    timeout={3000}
                    classNames={"about-right-content-"}
                    appear={true}>
                    <div className="about-right-content">
                        <div className="about-right-top">HEYWEGO</div>
                        <div className="about-right-bottom">多伦多电商平台</div>
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={true}
                    timeout={3000}
                    classNames={"about-right-bar-"}
                    appear={true}>
                    <div className="bar about-right-bar">
                        <CSSTransition
                            in={true}
                            timeout={3000}
                            classNames={"content-commitment-"}
                            appear={true}>
                            <div className="content content-commitment">
                                <div className="content-header">我们的承诺</div>
                                <div className="content-bottom">
                                    <li>100%正品承诺</li>
                                    <li>支持官方验证</li>
                                    <li>配送服务24小时送达保障</li>
                                    <li>数万尺智能仓库现货配送</li>
                                    <li>支持原厂保修服务</li>
                                </div>
                            </div>
                        </CSSTransition>

                    </div>
                </CSSTransition>

            </div>
        </section>
    )
}

export default About