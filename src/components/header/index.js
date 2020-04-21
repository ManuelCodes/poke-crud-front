import React from 'react';

import {connect} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Header extends React.Component {

  render() {
    return (

      <div>
        <AppBar position="static" style={{flexGrow: '1'}}>
          <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{flexGrow: '1'}} >
              
            </Typography>
            <Button  color="inherit"  onClick={this.props.auth.sessionStorage.signOut}>Sign out</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Header);
