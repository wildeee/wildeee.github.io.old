import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import routeNamer from './RouteNamer';

const styles = {
  menuName: {
    margin: '0 auto',
  },
  header: {
    marginBottom: 15,
  },
  menuButton: {
    position: 'absolute',
    left: 10,
  },
  toolbar: {
    position: 'relative',
  },
};

class CustomAppBar extends Component {
  render() {
    const menuName = routeNamer(this.props.pathName);
    const { classes } = this.props;
    return (
      <AppBar position="static" color="default" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.props.onOpenMenu}>
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.menuName}>
            {menuName}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

CustomAppBar.propTypes = {
  onOpenMenu: PropTypes.func.isRequired,
  pathName: PropTypes.string.isRequired,
};

export default withStyles(styles)(CustomAppBar);