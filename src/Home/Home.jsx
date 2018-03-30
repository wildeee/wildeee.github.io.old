import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import ProfilePicture from './ProfilePicture.jsx';
import Welcome from './Welcome.jsx';
import Contacts from './Contacts.jsx';

const styles = theme => ({
  separator: {
    marginTop: theme.spacing.unit,
  },
});

class Home extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <ProfilePicture pictureUrl={this.props.pictureUrl}/>
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={9} xl={10}>
            <Contacts/>
          </Grid>
        </Grid>
        <div className={classes.separator}>
          <Welcome/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);