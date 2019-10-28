import React from 'react';
import HelloWorld from "./HelloWorld.jsx";
import ByeBye from "./ByeBye.jsx";
import Home from "./Home.jsx";
import {
    // BrowserRouter as Router,
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

// to experiment with routing we want to change the component that we display depending upon the routing.

class App extends React.Component {
   render() {
       return (
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/hello">Hello</Link>
                        </li>
                        <li>
                            <Link to="/bye">Bye</Link>
                        </li>
                    </ul>
                </nav>
                Experiment!
                 
                {/*
                    ** without using <Switch> need to use exact path, to prevent multiple sections being rendered **
                    <Route exact path="/"  component = {Home}/>
                    <Route path="/hello" component = {HelloWorld}/>
                    <Route path="/bye" component = {ByeBye}/>
                */}
                
                <Switch>
                    Switch
                    {/* Switch renders the FIRST match that it finds. */}
                    <Route path="/hello" component = {HelloWorld}/>
                    <Route path="/bye" component = {ByeBye}/>
                    <Route path="/" component = {Home}/>
                </Switch> 
            </Router>
       );
    }
}
export default App;