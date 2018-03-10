import React, { PureComponent  } from 'react';
import Button from 'material-ui/Button';

class SocialMediaButton extends PureComponent {
  render() {
    return (
      <Button color="primary" variant="raised" size="small" fullWidth href={this.props.href}>
        {this.props.children}
      </Button>
    );
  }
}

export default SocialMediaButton;