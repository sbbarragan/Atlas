import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import constants from '../../../constants';

const { dashboard } = constants;
class Dashboard extends Component {
  render() {
    return (
      <Row>
        <Col className={classnames('dashboard')}>{dashboard}</Col>
      </Row>
    );
  }
}

export default Dashboard;
