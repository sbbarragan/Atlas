import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestData, removeStoreData, findStorageData } from '../../utils';
import constants from '../../constants';
import { setUser } from '../../actions';

class AuthLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.redirectToLogin = this.redirectToLogin.bind(this);
  }

  componentDidMount() {
    const { jwtName, endpoints } = constants;
    const { changeName } = this.props;
    if (findStorageData && findStorageData(jwtName)) {
      requestData(endpoints.userInfo).then(response => {
        if (response && response.data && response.data.USER) {
          const { USER: userInfo } = response.data;
          this.setState({ show: true });
          changeName(userInfo.NAME);
        } else {
          this.redirectToLogin();
        }
      });
    } else {
      this.redirectToLogin();
    }
  }

  redirectToLogin() {
    const { jwtName, reactEndpoints } = constants;
    const { history } = this.props;
    removeStoreData(jwtName);
    history.push(reactEndpoints.login);
  }

  render() {
    const { show } = this.state;
    const { children } = this.props;
    const render = show ? <Fragment>{children}</Fragment> : <Fragment />;
    return render;
  }
}
AuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({}),
    path: PropTypes.string,
    isExact: PropTypes.bool,
    url: PropTypes.string
  }),
  changeName: PropTypes.func
};

AuthLayout.defaultProps = {
  children: [],
  history: {
    push: () => undefined
  },
  match: {
    params: {},
    path: '',
    isExact: false,
    url: ''
  },
  changeName: () => undefined
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  changeName: name => dispatch(setUser(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLayout);
