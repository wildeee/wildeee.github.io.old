import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

const styles = {
  img: {
    width: '100%',
  },
};

class ProfilePicture extends Component {
  constructor (props) {
    super(props);
    this.state = {};
    fetch('https://graph.facebook.com/745080472278255/picture?type=large')
      .then(this.setPicture);
  };

  setPicture = (data) => {
    this.setState({ url: data.url });
  };

  render() {
    const { classes } = this.props;
    let img;
    if (this.state.url) {
      img = (
        <img src={this.state.url} alt="" className={classes.img}/>
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