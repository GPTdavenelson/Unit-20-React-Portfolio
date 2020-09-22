import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';

import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Nav from 'components/Nav';
import Footer from 'components/Footer';
import HomePage from 'components/HomePage';
import Portfolio from 'components/Portfolio';

const App = (props) => {
    const history = createBrowserHistory();

    return (
        <React.Fragment>
            <Router history={history}>
                <Nav />
                <Switch>
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </Router>
            <Footer />
        </React.Fragment>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
