import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../history';

import Login from './login';
import Header from './header';
import Home from './home';
import FirebaseAuth from './firebaseAuth';


class App extends React.Component {


  renderRoutes() {
    if(this.props.auth.isSignedIn === null) {
      return (
        <div>loading</div>
      );
    }
    else if (this.props.auth.isSignedIn) {
      return (
          <React.Fragment>
            <Header />
            <Router history={history}>
              <Route path="/" exact component={Home} />
            </Router>
          </React.Fragment>
        );
    }
    else {
      return (
        <Router history={history}>
          <Route path="/" exact component={Login} />
        </Router>
      )
    }

  }

  render() {
    return (
      <div>
        <FirebaseAuth />
        {this.renderRoutes()}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return { auth: state.auth};
}

export default connect(mapStateToProps)(App);
