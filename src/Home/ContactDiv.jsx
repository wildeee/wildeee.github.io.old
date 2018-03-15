import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = {
  contact: {
    border: 'solid',
    borderRadius: 5,
    padding: 20,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    left: '10%',
    top: 15,
  },
};

class ContactDiv extends PureComponent {
  render () {
    const { classes } = this.props;
    return (
      <div className={classes.contact}>
        <div className={classes.icon}>
          {this.props.icon}
        </div>
        <Typography align="center">{this.props.children}</Typography>
      </div>
    );
  }
}

export default withStyles(styles)(ContactDiv);