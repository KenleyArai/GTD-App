import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Inbox from 'containers/Inbox'

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Inbox baseURL={this.props.baseURL}/>}/>
        </div>
      </Router>
    )
  }
}