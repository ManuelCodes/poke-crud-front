import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../history';

import Login from './login';
import Header from './header';
import Page404 from './page404';
import Home from './home';

import PokemonForm from './pokemons/PokemonForm';
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
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/pokemon/new" exact component={PokemonForm} />
                <Route path="/404" exact component={Page404} />
                <Redirect from='*' to='/404' />
              </Switch>
            </Router>

          </React.Fragment>
        );
    }
    else {
      return (
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Login} />
            <Redirect from='*' to='/' />
          </Switch>
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
