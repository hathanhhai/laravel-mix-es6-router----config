import React, { Component } from 'react';
import Header from './components/layouts/header'
import Nav from './components/layouts/nav'
import routes from './routers';
import UserList from './pages/users/UserLists'
import { Switch, Route, BrowserRouter as Router,Link } from 'react-router-dom'
class Main extends Component {


    render() {
        return (
        <Router>
            <div>
            <header>
              <Header />
              <Nav />
             </header> 
              <main>
                  {this.showContentMenus(routes)}
              </main>
            </div>
          </Router>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((item, index) => {
                return (
                    <Route
                        key={index} path={item.path} exact={item.exact} component={item.main} />
                )
            });
        }

        return <Switch>{result}</Switch>;
    }

}


export default Main;