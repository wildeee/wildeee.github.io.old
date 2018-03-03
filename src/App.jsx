import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Menu from './Menu/Menu.jsx';
import AppBar from './AppBar/AppBar.jsx';

const styles = {
  root: {
    width: '100%',
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
        <AppBar onOpenMenu={this.openMenu}/>
        <Menu open={this.state.menuOpen} onClose={this.closeMenu}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);