import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import constants from '../../../constants';

const { by } = constants;
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  render() {
    return (
      <Row>
        <Col className={classnames('footer')}>footer</Col>
      </Row>
    );
  }
}

export default Footer;
