import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router,Link } from 'react-router-dom'
class UserList  extends Component {
 
    render() {
        return (
            <div>
            <h1>User_List</h1>
            <Link to="/administrator/" className="btn btn-primary mt-b">Home</Link>
            </div>
        );
    }
}


export default UserList;