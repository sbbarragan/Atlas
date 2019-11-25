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
import constants from '../../../constants'; // aca se puede obtener el logo en base64

const User = props => {
  const [display, setDisplay] = useState(false);
  const toggle = () => setDisplay(!display);
  return (
    <Dropdown
      className={classnames('mx-1')}
      isOpen={display}
      toggle={toggle}
      size="sm"
    >
      <DropdownToggle color="outline-primary">pepe</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem divider />
        <DropdownItem>
          <Button color="danger" className={classnames('w-100')}>
            pepe!
          </Button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

User.propTypes = {
  display: PropTypes.bool,
  displayMenu: PropTypes.func
};

User.defaultProps = {
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
)(User);
