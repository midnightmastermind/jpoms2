import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Resume from './components/resume'
import Projects from './components/projects'
import Notfound from './components/notfound'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <header className="App-header">
                <div className="App-main-header">jpoms.com</div>
                <div className="App-sub-header">Home of Josh Pomerenke</div>
                <div className="App-link-header">
                    <Link class="App-link" to="/">Home</Link>
                    <Link class="App-link" to="/resume">Resume</Link>
                    <Link class="App-link" to="/projects">Projects</Link>
                </div>
            </header>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/resume" component={Resume} />
                <Route path="/projects" component={Projects} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
