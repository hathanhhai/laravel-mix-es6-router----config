import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router,Link } from 'react-router-dom'
class Home  extends Component {
    render() {
        return (
            <div>
            <h1>Home</h1>
            <Link to="/administrator/users-list" className="btn btn-primary mt-b">User_list</Link>
            </div>
        );
    }
}


export default Home;