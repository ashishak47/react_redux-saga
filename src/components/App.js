import React from 'react';
import './App.css';
import {
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

import Home from './Home';
import NavBar from './NavBar';
import Post from './Post';
import PostList from './PostList';
import { User } from './User';

import { Provider } from 'react-redux';
import configureStore from '../store';

const store = configureStore();



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/yo" component={() => <div>yo!</div>} />
          <Route path="/posts" component={PostList} />
          <Route path="/post/:id" component={Post} />
          <Route path="/user/:id" component={User} />
        </div>
      </Router>


    </Provider>
  );
}

export default App;
