import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchValidateAuthenticatedUser, removeStoreData } from '../../utils';
import { setUser } from '../../actions';

class AuthLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      access: false,
      redirect: false
    };
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem && localStorage.getItem('token')) {
      fetchValidateAuthenticatedUser().then(response => {
        if (response && response.id) {
          this.setState({ access: true });
          this.props.changeName(response.name);
        } else {
          this.setState({ redirect: true });
        }
      });
    } else {
      removeStoreData(['opennebulaToken']);
      this.setState({ access: false });
    }
  }

  render() {
    const { access, redirect } = this.state;
    const { children } = this.props;
    const DisplayOrRedirect = () => {
      let rtn = <Fragment />;
      if (redirect) {
        rtn = <Redirect to="/" />;
      }
      return rtn;
    };
    const render = access ? (
      <Fragment>{children}</Fragment>
    ) : (
      <DisplayOrRedirect />
    );
    return render;
  }
}
AuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  changeName: PropTypes.func
};

AuthLayout.defaultProps = {
  children: [],
  changeName: () => undefined
};

const mapStateToProps = ({ App }) => {
  const { user } = App;
  return { user };
};

const mapDispatchToProps = dispatch => ({
  changeName: name => dispatch(setUser(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLayout);
