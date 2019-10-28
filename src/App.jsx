import React from 'react';
import HelloWorld from "./HelloWorld.jsx";
import ByeBye from "./ByeBye.jsx";
import Home from "./Home.jsx";
import {
    BrowserRouter as Router,
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
                {/* <Switch> */}
                    {/* Switch  */}
                    <Route exact path="/"  component = {Home}/>
                    <Route path="/hello" component = {HelloWorld}/>
                    <Route path="/bye" component = {ByeBye}/>
                {/* </Switch> */}
            </Router>
       );
    }
}
export default App;