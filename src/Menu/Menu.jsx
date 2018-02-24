import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';

class Menu extends Component {
  render() {
    return (
      <Drawer open={this.props.open} onClose={this.props.onClose}>
        <div>
          <List>Home</List>
          <Divider />
          <List>Menu 2</List>
        </div>
      </Drawer>
    );
  }
}

export default Menu;