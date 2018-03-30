import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';

const styles = {
  img: {
    width: '100%',
  },
};

class ProfilePicture extends PureComponent {
  render() {
    const { classes } = this.props;
    let img;
    if (this.props.pictureUrl) {
      img = (
        <img src={this.props.pictureUrl} alt="" className={classes.img}/>
      );
    }
    return (
      <div>
        {img}
      </div>
    );
  };
}

export default withStyles(styles)(ProfilePicture);