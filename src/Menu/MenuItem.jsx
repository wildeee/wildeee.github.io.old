import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom'

const styles = {
  menu: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  link: {
    textDecoration: 'none',
  },
};


class MenuItem extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Link to={this.props.route} onClick={this.props.onSelectMenu} className={classes.link}>
          <List className={classes.menu}>
            <Typography variant="title" align="center">
              {this.props.children}
            </Typography>
          </List>
        </Link>
        <Divider />
      </div>
    );
  }
}

export default withStyles(styles)(MenuItem);