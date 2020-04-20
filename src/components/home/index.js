import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import {connect} from 'react-redux';

class Home extends React.Component {

  render() {
    return (
      <div>
        home home home home home
        <button onClick={ () => this.props.auth.sessionStorage.signOut()}><h1>salir</h1></button>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Home);
