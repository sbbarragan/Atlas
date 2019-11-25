import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';
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
    const { children, display } = this.props;
    return (
      <Fragment>
        <Header />
        <Row className={classnames('flex-grow-1')}>
          <Col
            className={classnames(
              'menu',
              { open: display },
              { close: !display }
            )}
          >
            <PerfectScrollbar>
              <PrincipalMenu />
            </PerfectScrollbar>
          </Col>
          <Col className={classnames('content')}>
            <PerfectScrollbar>{children}</PerfectScrollbar>
          </Col>
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
  ]),
  display: PropTypes.bool
};

InternalLayout.defaultProps = {
  children: [],
  display: false
};

const mapStateToProps = state => {
  const { General } = state;
  return {
    display: General.displayMenu
  };
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InternalLayout);
