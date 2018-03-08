import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import ProfilePicture from './ProfilePicture.jsx';
import Welcome from './Welcome.jsx';
import Contacts from './Contacts.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12} sm={5} md={4} lg={3} xl={2}>
            <ProfilePicture/>
          </Grid>
          <Grid item xs={12} sm={7} md={8} lg={9} xl={10}>
            <Contacts/>
          </Grid>
        </Grid>
        <Welcome/>
      </div>
    );
  }
}

export default Home;