import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import FacebookButton from './SocialMediaButtons/FacebookButton.jsx';
import LinkedInButton from './SocialMediaButtons/LinkedInButton.jsx';
import GitHubButton from './SocialMediaButtons/GitHubButton.jsx';

class Contacts extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            <FacebookButton/>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <LinkedInButton/>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <GitHubButton/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Contacts;