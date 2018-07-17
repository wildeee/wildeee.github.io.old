import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Headroom from 'react-headroom';
import Menu from '../Menu/Menu';
import AppBar from './AppBar';

class MainAppBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  menuSetter = value => () => this.setState({ menuOpen: value });

  render() {
    return (
      <div>
        <Headroom>
          <AppBar onOpenMenu={this.menuSetter(true)} pathName={this.props.location.pathname}/>
        </Headroom>
        <Menu open={this.state.menuOpen} onClose={this.menuSetter(false)}/>
      </div>
    );
  }
}

MainAppBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default MainAppBar;