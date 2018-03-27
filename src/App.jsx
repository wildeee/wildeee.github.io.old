import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Headroom from 'react-headroom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './Menu/Menu.jsx';
import AppBar from './AppBar/AppBar.jsx';
import Home from './Home/Home.jsx';
import Expeciences from './Expeciences/Expeciences.jsx';

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
        <Router>
          <div>
            <Route path="/" render={props => (
              <div>
                <Headroom>
                  <AppBar onOpenMenu={this.openMenu}/>
                </Headroom>
                <Menu open={this.state.menuOpen} onClose={this.closeMenu}/>
                <div className={classes.body}>
                  <Route path="/" exact component={Home}/>
                  <Route path="/experiences" exact component={Expeciences}/>
                </div>
              </div>
            )}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);