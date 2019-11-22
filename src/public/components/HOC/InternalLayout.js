import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import PrincipalMenu from '../containers/PrincipalMenu';

class InternalLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row className={classnames('flex-grow-1')}>
          <Col className={classnames('menu')}>
            <PrincipalMenu />
          </Col>
          <Col className={classnames('content')}>{children}</Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

InternalLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ])
};

InternalLayout.defaultProps = {
  children: []
};

export default InternalLayout;
