import React, { PureComponent  } from 'react';
import { withStyles } from 'material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import classNames from 'classnames';
import SocialMediaButton from './SocialMediaButton.jsx';
import FaFacebook from 'react-icons/lib/fa/facebook';

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
      main: '#283593',
      dark: '#3845A3',
      contrastText: '#FFFFFF',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

class FacebookButton extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <SocialMediaButton href="https://www.facebook.com/wilde.augusto">
          <FaFacebook className={classNames(classes.leftIcon, classes.iconSmall)}/>
          Facebook
        </SocialMediaButton>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(FacebookButton);