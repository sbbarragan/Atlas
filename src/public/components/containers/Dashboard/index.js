import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Translate } from '../../HOC';
import constants from '../../../constants';

const { dashboard } = constants;
class Dashboard extends Component {
  render() {
    return (
      <Row className={classnames('no-gutters')}>
        <Col className={classnames('dashboard')}>
          <h2>
            <Translate word={dashboard} />
          </h2>
        </Col>
      </Row>
    );
  }
}

export default Dashboard;
