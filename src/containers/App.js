import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Inbox from 'containers/Inbox'
import Areas from 'containers/Areas'
import Tools from 'components/Tools'

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
            render={() => <Areas api_url={this.props.baseURL + "areas"}/>}/>
          <Route path="/tools" component={Tools}/>
        </div>
      </Router>
    )
  }
}
