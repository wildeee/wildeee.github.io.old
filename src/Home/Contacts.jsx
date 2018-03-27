import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import FaWhatsapp from 'react-icons/lib/fa/whatsapp';
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o';
import FacebookButton from './SocialMediaButtons/FacebookButton.jsx';
import LinkedInButton from './SocialMediaButtons/LinkedInButton.jsx';
import GitHubButton from './SocialMediaButtons/GitHubButton.jsx';
import ContactDiv from './ContactDiv.jsx';

const styles = {
  iconSmall: {
    fontSize: 28,
  },
  contactContainer: {
    marginBottom: 10,
  },
};

class Contacts extends Component {
  render() {
    const { classes } = this.props;
    const iconWhatsapp = (<FaWhatsapp className={classes.iconSmall}/>);
    const iconMail = (<FaEnvelopeO className={classes.iconSmall}/>);
    return (
      <div>
        <div className={classes.contactContainer}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <ContactDiv icon={iconWhatsapp}>
                <strong>44 99960-6007</strong>
              </ContactDiv>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <ContactDiv icon={iconMail}>
                <strong>gutopicciani@gmail.com</strong>
              </ContactDiv>
            </Grid>
          </Grid>
        </div>
        <div className={classes.contactContainer}>
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
      </div>
    );
  }
}

export default withStyles(styles)(Contacts);