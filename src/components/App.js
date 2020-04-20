import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../history';



import Login from './login';
import Home from './home';
import FirebaseAuth from './firebaseAuth';


class App extends React.Component {


  renderRoutes() {
    if(this.props.auth.isSignedIn === null) {
      return (
        <div>loading</div>
      );
    }else if (this.props.auth.isSignedIn) {
      return (
        <Router history={history}>
          <Route path="/" exact component={Home} />
        </Router>
      );
    } else {
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

/*
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);

*/
//export default App;

/*
<div>
{
  user
    ? <p>Hello, {user.displayName}</p>
    : <p>Please sign in.</p>
}

{
  user ? <button onClick={signOut}>Sign out</button> : <button onClick={signInWithGoogle}>Sign in with google</button>
}
</div>
*/
