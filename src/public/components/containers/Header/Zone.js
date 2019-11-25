import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { connect } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Zone = props => {
  const [display, setDisplay] = useState(false);
  const toggle = () => setDisplay(!display);
  return (
    <Dropdown isOpen={display} toggle={toggle} size="sm">
      <DropdownToggle color="outline-primary">
        <i className={classnames('fas', 'fa-globe', 'mr-1')} />
        pepe
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>pepe!</DropdownItem>
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
