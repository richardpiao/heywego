import React from 'react'
import { CSSTransition } from 'react-transition-group'
import contact from '../css/contact.css'
const Contact = () => {
    return (
        <section>
            <div className="contact">
                <div className="contact-middle">
                    <div className="contact-middle-logo">LOGO</div>
                </div>
                <div className="contact-right">
                    <div className="download-top">
                        <div>Download App</div>
                        <div>Supported both Andriod and IOS</div>
                    </div>
                    <div className="download-bottom">
                    </div>
                    <div className="contact-details">
                        <div>
                            <div>地址：5336 Yonge St</div>
                            <div>North York, ON</div>
                            <div>M2N 6V1</div>
                        </div>
                        <div>电话:647-822-5788</div>
                        <div>邮箱：CONTACT@HEY-WEGO.COM</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact