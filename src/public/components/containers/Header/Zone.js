import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Zone = props => {
  const [display, setDisplay] = useState(false);
  const toggle = () => setDisplay(!display);
  return (
    <Dropdown isOpen={display} toggle={toggle} size="sm">
      <DropdownToggle color="outline-primary">pepe</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem divider />
        <DropdownItem>
          <Button>pepe!</Button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

Zone.propTypes = {
  display: PropTypes.bool,
  displayMenu: PropTypes.func
};

Zone.defaultProps = {
  display: false,
  displayMenu: () => undefined
};

const mapStateToProps = state => {
  const { Opennebula } = state;
  return {
    display: Opennebula.user
  };
};

const mapDispatchToProps = dispatch => ({
  clearData: display => dispatch(showMenu(display))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Zone);
