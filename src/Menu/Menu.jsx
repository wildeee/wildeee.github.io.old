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
          <MenuItem route="/" onSelectMenu={this.props.onClose}>Home</MenuItem>
          <MenuItem route="/experiences" onSelectMenu={this.props.onClose}>Experiências</MenuItem>
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Menu);