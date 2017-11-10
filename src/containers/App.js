import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Inbox from 'containers/Inbox'
import Area from 'containers/Area'

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => <Inbox api_url={this.props.baseURL + "inbox"}/>}/>
          <Route
            path="/areas"
            render={() => <Area api_url={this.props.baseURL + "areas/1"}/>}/>
        </div>
      </Router>
    )
  }
}
