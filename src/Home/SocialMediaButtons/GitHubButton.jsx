import React, { PureComponent  } from 'react';
import { withStyles } from 'material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import classNames from 'classnames';
import SocialMediaButton from './SocialMediaButton.jsx';
import FaGithubAlt from 'react-icons/lib/fa/github-alt';

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
      main: '#24292E',
      dark: '#34393E',
      contrastText: '#FFFFFF',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

class GitHubButton extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <SocialMediaButton href="https://github.com/wildeee">
          <FaGithubAlt className={classNames(classes.leftIcon, classes.iconSmall)}/>
          GitHub
        </SocialMediaButton>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(GitHubButton);