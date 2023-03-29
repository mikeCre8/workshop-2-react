import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import CrudDemo from './CrudDemo';
import PersonDetails from './CrudDemo';

const RouterDemo = () => {
    return (
        <div className='container'>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/welcome" component={Welcome} />
                    <Route path="/home" component={Home} />
                    <Route path="/person" component={Person} />
                    <Route path="/about" component={About} />
                    <Route path="/crud" component={CrudDemo} />
                    <Route path="/details/:id" component={PersonDetails} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    );
};

const Header = () => {
    return(
        <div>
        <nav className='nav nav-pills bg-dark text-white align-items-center wrap-around'>
        <h4 className='ps-2'>React</h4>
        <div className='navbar'>
            <Link className="nav-link" to="/">Welcome</Link>
            <Link className="nav-link" to="/home">Home</Link>
            <Link className="nav-link" to="/person">Person</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/crud">Crud</Link>
        </div>
        </nav>
        </div>
    )
}

const Welcome = () => {
    return(
        <h3 className='pt-5'>Welcome Component!</h3>
    )
}
const About = () => {
    return(
        <h3 className='pt-5'>About Component!</h3>
    )
}
const Home = () => {
    return(
        <h3 className='pt-5'>Home Component!</h3>
    )
}
const Person = () => {
    return(
        <h3 className='pt-5'>Person Component!</h3>
    )
}
const NotFound = () => {
    return(
        <h3 className='pt-5'><b>Error Code: 404</b> - Page Not Found!</h3>
    )
}

export default RouterDemo;