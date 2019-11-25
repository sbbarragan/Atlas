import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import User from './User';
import Zone from './Zone';
import { showMenu } from '../../../actions';
import constants from '../../../constants'; // aca se puede obtener el logo en base64

class Header extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e) {
    e.preventDefault();
    const { displayMenu, display } = this.props;
    displayMenu(!display);
  }

  render() {
    return (
      <Row className={classnames('header', 'align-items-center', 'py-4')}>
        <Col className={classnames('col-12', 'col-sm-6')}>
          <Button
            outline
            color="primary"
            className={classnames('mr-3')}
            onClick={this.toggleMenu}
          >
            <i className={classnames('fas', 'fa-bars')} />
          </Button>
        </Col>
        <Col
          className={classnames(
            'col-12',
            'col-sm-6',
            'justify-content-end',
            'd-flex'
          )}
        >
          <Zone />
          <User />
        </Col>
      </Row>
    );
  }
}

Header.propTypes = {
  display: PropTypes.bool,
  displayMenu: PropTypes.func
};

Header.defaultProps = {
  display: false,
  displayMenu: () => undefined
};

const mapStateToProps = state => {
  const { General } = state;
  return {
    display: General.displayMenu
  };
};

const mapDispatchToProps = dispatch => ({
  displayMenu: display => dispatch(showMenu(display))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
