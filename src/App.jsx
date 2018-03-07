import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Headroom from 'react-headroom';
import Menu from './Menu/Menu.jsx';
import AppBar from './AppBar/AppBar.jsx';
import Home from './Home/Home.jsx';

const styles = {
  root: {
    width: '100%',
  },
  body: {
    padding: 10,
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
        <Headroom>
          <AppBar onOpenMenu={this.openMenu}/>
        </Headroom>
        <Menu open={this.state.menuOpen} onClose={this.closeMenu}/>
        <div className={classes.body}>
          <Home/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);