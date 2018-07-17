import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import AppBar from './AppBar';
import Home from './Home/Home.jsx';
import Expeciences from './Expeciences/Expeciences.jsx';

const styles = {
  body: {
    padding: 10,
  },
};

const FACEBOOK_PICTURE_URL = 'https://graph.facebook.com/745080472278255/picture?type=large';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    fetch(FACEBOOK_PICTURE_URL).then(this.setPicture);
  }

  setPicture = (data) => {
    this.setState({ pictureUrl: data.url });
  };

  getHomeRoute = (props) => {
    return (<Home pictureUrl={this.state.pictureUrl}/>);
  };

  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div>
          <Route path="/" component={AppBar} />
          <Grid container className={classes.body} spacing={0} justify="center">
            <Grid item xs={12} lg={8} xl={7}>
              <Route path="/" exact render={this.getHomeRoute}/>
              <Route path="/experiences" component={Expeciences}/>
            </Grid>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);