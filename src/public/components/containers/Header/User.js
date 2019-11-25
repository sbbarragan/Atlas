import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Label
} from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Translate } from '../../HOC';
import constants from '../../../constants'; // aca se puede obtener el logo en base64

const { Language } = constants;
const User = props => {
  const { SignOut } = constants;
  const [display, setDisplay] = useState(false);
  const toggle = () => setDisplay(!display);
  return (
    <Dropdown
      className={classnames('mx-1')}
      isOpen={display}
      toggle={toggle}
      size="sm"
    >
      <DropdownToggle color="outline-primary">
        <i className={classnames('fas', 'fa-user', 'mr-1')} />
        pepe
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem divider />
        <div className={classnames('drodown-item', 'col-12')}>
          <Label for="changeLang">
            <small>
              <b>
                <Translate word={Language} />
              </b>
            </small>
          </Label>
          <Translate />
        </div>
        <DropdownItem divider />
        <DropdownItem className={classnames('text-center')}>
          <i className={classnames('fas', 'fa-power-off', 'mr-1')} />
          <Translate word={SignOut} />
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
