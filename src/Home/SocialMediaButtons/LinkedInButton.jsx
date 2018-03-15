import React, { PureComponent  } from 'react';
import { withStyles } from 'material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import classNames from 'classnames';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import SocialMediaButton from './SocialMediaButton.jsx';

const styles = theme => ({
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0077B5',
      dark: '#1087C5',
      contrastText: '#FFFFFF',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

class LinkedInButton extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <SocialMediaButton href="https://www.linkedin.com/in/wilde-rossi-18b371a1/">
          <FaLinkedinSquare className={classNames(classes.leftIcon, classes.iconSmall)}/>
          LinkedIn
        </SocialMediaButton>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(LinkedInButton);