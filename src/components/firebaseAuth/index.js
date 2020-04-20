import React from 'react';
import  { connect } from 'react-redux';
import { signIn, signOut } from './actions';

import firebaseConfig from '../../firebase/firebaseConfig';

class FirebaseAuth extends React.Component {

  componentDidMount() {
    this.firebase = window.firebase;
    this.firebase.initializeApp(firebaseConfig);
    this.provider = new this.firebase.auth.GoogleAuthProvider();
    this.firebase.auth().onAuthStateChanged(this.onAuthChange);
  }

  onAuthChange = user => {

    if(user) {
      const sessionData = { user: user, signOut: this.onSignOutClick };
      this.props.signIn(sessionData);
    }else {
      this.props.signOut(this.onSignInClick);
    }
  }

  onSignInClick = () => {
    const provider = this.provider;
    /******************
      POR TERMINAR
    *******************/
    this.firebase.auth().signInWithPopup(this.provider).then(function(result) {

      //por terminar
      var token = result.credential.accessToken;

      var user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });

  }

  onSignOutClick = () => {
    this.firebase.auth().signOut();
  }

  renderAuthButton() {
    if(this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} >
          sign out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} >
          sign in
        </button>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    sessionStorage: state.auth.sessionStorage
  }
}

export default connect(mapStateToProps, {
  signIn,
  signOut
})(FirebaseAuth);
