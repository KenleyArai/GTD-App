import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Inbox from 'containers/Inbox'
import Areas from 'containers/Areas'
import Today from 'containers/Today'
import Tools from 'components/Tools'
import Review from 'components/Review'

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
          <Route
            path="/today"
            render={() => <Today api_url={this.props.baseURL + "today"}/>}/>
          <Route path="/tools" component={Tools}/>
          <Route path="/review" component={Review}/>
        </div>
      </Router>
    )
  }
}
