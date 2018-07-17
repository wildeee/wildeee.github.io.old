import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppBar from './AppBar';
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
    this.state = {};
    fetch('https://graph.facebook.com/745080472278255/picture?type=large').then(this.setPicture);
  }

  setPicture = (data) => {
    this.setState({ pictureUrl: data.url });
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  getHomeRoute = (props) => {
    return (<Home pictureUrl={this.state.pictureUrl}/>);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Router>
          <div>
            <Route path="/" component={AppBar} />
            <div className={classes.body}>
              <Route path="/" exact render={this.getHomeRoute}/>
              <Route path="/experiences" component={Expeciences}/>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);