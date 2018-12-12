import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header/Header';
import User from './containers/Profile/Profile';
import MainPage from './components/MainPage/MainPage';
import Users from './containers/Users/Users';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/profile' exact component={User} />
        <Route path='/users' exact component={Users} />
        <Route path='/user/:id' exact render={(props) => <User {...props}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
