import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css';
import {signIn} from '../firebaseAuth/actions';
import FirebaseAuth from '../firebaseAuth';


import {connect} from 'react-redux';

class Login extends React.Component {

  render() {
    return (
      <form className="container">
        <Card className="card">
          <div className="login-header">
            <span >Pokemon Stadium</span>
            <img className="icon" src={process.env.PUBLIC_URL + '/images/pokeball.svg'} alt="pokeball" style={{marginLeft: "4px"}} />
          </div>
          <CardContent>
            <div>
              <TextField

                fullWidth
                type="email"
                label="Email"
                placeholder="email"
                margin="normal"
              />
              <TextField

                fullWidth
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
              />
              <Button variant="contained" color="primary"  fullWidth>
                Login
              </Button>
              <Button onClick={() => this.props.auth.sessionStorage.signIn()} >Sign in with google</Button>

            </div>
          </CardContent>
        </Card>

      </form>
    )
  }
}

const mapStateToProps = state =>{
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Login);
