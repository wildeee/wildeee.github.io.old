import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import MenuItem from './MenuItem.jsx';


const styles = {
  menuWrapper: {
    width: 300,
  },
};


class Menu extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Drawer open={this.props.open} onClose={this.props.onClose}>
        <div className={classes.menuWrapper}>
          <MenuItem>Home</MenuItem>
          <MenuItem>Experiências</MenuItem>
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Menu);