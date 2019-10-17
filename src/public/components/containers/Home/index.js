import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import Menu from '../Menu';

class Home extends Component {
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
        <Row>
          <Col>
            <Menu />
          </Col>
          <Col>{children}</Col>
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

Home.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ])
};

Home.defaultProps = {
  children: []
};

export default Home;
