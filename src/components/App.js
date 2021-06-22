import React from 'react'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import { Router, Route, Switch } from "react-router-dom"
import history from '../history'

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/products" component={Products}></Route>
                    <Route path="/contact" component={Contact}></Route>
                </Switch>
            </Router>
        </div>

    )
}

export default App