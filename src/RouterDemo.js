import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useHistory, useParams, useLocation, Redirect} from 'react-router-dom';

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
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    );
};

const Header = () => {
    return(
        <div className='container-fluid'>
        <nav className='nav nav-pills bg-dark text-white align-items-center wrap-around'>
        <h4 className='ps-2'>React</h4>
        <div className='navbar'>
            <Link className="nav-link">Welcome</Link>
            <Link className="nav-link">Home</Link>
            <Link className="nav-link">Person</Link>
            <Link className="nav-link">About</Link>
        </div>
        <Link>
            <button type='button' className='btn btn-primary pe-2'>Sign Up</button>
        </Link>
        </nav>
        </div>
    )
}

const Welcome = () => {
    return(
        <h3>Welcome component!</h3>
    )
}
const About = () => {
    return(
        <h3>About component!</h3>
    )
}
const Home = () => {
    return(
        <h3>Home component!</h3>
    )
}
const Person = () => {
    return(
        <h3>Person component!</h3>
    )
}
const NotFound = () => {
    return(
        <h3>NotFound component!</h3>
    )
}

export default RouterDemo;