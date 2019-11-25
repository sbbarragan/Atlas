import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Translate } from '../../HOC';
import constants from '../../../constants';

const { settings } = constants;
class Settings extends Component {
  render() {
    return (
      <Row className={classnames('no-gutters')}>
        <Col className={classnames('settings')}>
          <h2>
            <Translate word={settings} />
          </h2>
        </Col>
      </Row>
    );
  }
}

export default Settings;
