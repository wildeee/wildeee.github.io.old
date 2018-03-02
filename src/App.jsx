import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu from './Menu/Menu.jsx';

const styles = {
  root: {
    width: '100%',
  },
  menuName: {
    margin: '0 auto',
  },
  header: {
    marginBottom: '15px',
  },
  menuButton: {
    position: 'absolute',
    left: 10,
  },
  toolbar: {
    position: 'relative',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.header}>
          <Toolbar className={classes.toolbar}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.openMenu}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.menuName}>
              Bem vindo!
            </Typography>
          </Toolbar>
        </AppBar>
        <Menu open={this.state.menuOpen} onClose={this.closeMenu}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);