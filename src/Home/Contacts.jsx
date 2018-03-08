import React, { Component } from 'react';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGithubAlt from 'react-icons/lib/fa/github-alt';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class Contacts extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            <Button color="primary" variant="raised" size="small" fullWidth href="https://www.facebook.com/wilde.augusto">
              <FaFacebook className={classNames(classes.leftIcon, classes.iconSmall)}/>
              Facebook
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Button variant="raised" size="small" fullWidth href="https://www.linkedin.com/in/wilde-rossi-18b371a1/">
              <FaLinkedinSquare className={classNames(classes.leftIcon, classes.iconSmall)}/>
              LinkedIn
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Button variant="raised" size="small" fullWidth href="https://github.com/wildeee">
              <FaGithubAlt className={classNames(classes.leftIcon, classes.iconSmall)}/>
              GitHub
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Contacts);