import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

class Experiences extends Component {
  render() {
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12} md={9} lg={8} xl={6}>
          <h2>Em desenvolvimento, aguarde!!!</h2>
        </Grid>
      </Grid>
    );
  }
}

export default Experiences;