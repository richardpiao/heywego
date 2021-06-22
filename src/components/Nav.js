import React from 'react'

import nav from '../css/nav.css'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isOpen: false };
    }
    open = (e) => {
        this.setState({ isOpen: !this.state.isOpen })

    }
    render() {
        return (
            <nav className={this.state.isOpen ? "nav nav-open" : "nav"}>
                <div className="logo">LOGO</div>
                <div onClick={e => this.open(e)} className={this.state.isOpen ? "hamburger hamburger-open" : "hamburger"} >
                    <div ></div>
                    <div ></div>
                    <div ></div>
                </div>
                <div className={this.state.isOpen ? "links links-open" : "links"}>
                    <a href="/">首页</a>
                    <a href="/about">关于我们</a>
                    <a href="/products">合作伙伴</a>
                    <a href="/contact">联系我们</a>
                </div>

            </ nav>
        )
    }

}

export default Nav