import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import constants from '../../../constants';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  render() {
    return (
      <Row>
        <Col className={classnames('header')}>header</Col>
      </Row>
    );
  }
}

export default Header;
