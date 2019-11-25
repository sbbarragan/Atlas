import React, { Component, Fragment } from 'react';
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  Button
} from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import constants from '../../../constants';
import { requestData, removeStoreData, storage } from '../../../utils';
import { Translate, Tr } from '../../HOC';

const {
  checkbox,
  classInputInvalid,
  SignIn,
  Username,
  Password,
  keepLoggedIn,
  Token2FA
} = constants;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      token: '',
      writeToken: false,
      showError: false,
      keepLogged: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type = '', element = false) {
    if (
      element &&
      element.preventDefault &&
      element.target &&
      element.target.type &&
      type &&
      Object.keys(this.state).includes(type)
    ) {
      const { target } = element;
      if (target.type !== checkbox) {
        element.preventDefault();
      }
      const { showError, keepLogged } = this.state;
      const newState = {};
      newState[type] = target.type === checkbox ? !keepLogged : target.value;
      if (showError) {
        newState.showError = !showError;
      }
      this.setState(newState);
    }
  }

  handleSubmit(element = false) {
    const { jwtName, endpoints, reactEndpoints } = constants;
    const { user, pass, token, writeToken, keepLogged } = this.state;
    const { history } = this.props;
    const loginParams = {
      data: { user, pass },
      method: 'POST',
      authenticate: false
    };
    if (writeToken && token) {
      loginParams.data.token = token;
    }
    if (element && element.preventDefault) {
      let newState = { showError: true };
      element.preventDefault();
      if (user && pass) {
        removeStoreData(jwtName);
        requestData(endpoints.login, loginParams).then(response => {
          if (response && response.data) {
            const { id, data } = response;
            const { token: opennebulaToken, message } = data;
            if (id === 401 && message) {
              newState = { showError: false, writeToken: true };
            } else if (id === 200 && opennebulaToken) {
              newState = { showError: false, writeToken: false };
              storage(jwtName, opennebulaToken, keepLogged);
              history.push(reactEndpoints.home);
              return;
            }
            this.setState(newState);
          }
        });
      } else {
        this.setState(newState);
      }
    }
  }

  render() {
    const { writeToken, token, user, pass, showError, keepLogged } = this.state;
    const classnameError = {};
    classnameError[classInputInvalid] = showError;
    const inputs = writeToken ? (
      <FormGroup row>
        <InputGroup className={classnames('col')}>
          <InputGroupAddon addonType="prepend">
            <i className={classnames('fas', 'fa-lock-alt')} />
          </InputGroupAddon>
          <Input
            className={classnames(classnameError)}
            type="password"
            autoComplete="off"
            placeholder={Tr(Token2FA)}
            value={token}
            onChange={e => {
              this.handleChange('token', e);
            }}
          />
        </InputGroup>
      </FormGroup>
    ) : (
      <Fragment>
        <FormGroup row>
          <InputGroup className={classnames('col')}>
            <Input
              className={classnames(classnameError)}
              type="text"
              autoComplete="off"
              placeholder={Tr(Username)}
              value={user}
              onChange={e => {
                this.handleChange('user', e);
              }}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup row>
          <InputGroup className={classnames('col')}>
            <Input
              className={classnames(classnameError)}
              type="password"
              autoComplete="off"
              placeholder={Tr(Password)}
              value={pass}
              onChange={e => {
                this.handleChange('pass', e);
              }}
            />
          </InputGroup>
        </FormGroup>
      </Fragment>
    );

    return (
      <Row className={classnames('min-vh-100')}>
        <Col
          sm="12"
          md={{ size: 4, offset: 4 }}
          className={classnames('align-items-center', 'd-flex')}
        >
          <div onSubmit={this.handleSubmit} className={classnames('col')}>
            {inputs}
            <FormGroup row>
              <Col sm="12" md="6" className={classnames('text-center')}>
                <Label>
                  <Input
                    type="checkbox"
                    checked={keepLogged}
                    onChange={e => {
                      this.handleChange('keepLogged', e);
                    }}
                  />
                  <Translate word={keepLoggedIn} />
                </Label>
              </Col>
              <Col sm="12" md="6" className={classnames('text-center')}>
                <Button
                  type="primary"
                  className="login-form-button"
                  onClick={this.handleSubmit}
                >
                  <Translate word={SignIn} />
                </Button>
              </Col>
            </FormGroup>
          </div>
        </Col>
      </Row>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({}),
    path: PropTypes.string,
    isExact: PropTypes.bool,
    url: PropTypes.string
  })
};

Login.defaultProps = {
  history: {
    push: () => undefined
  },
  match: {
    params: {},
    path: '',
    isExact: false,
    url: ''
  }
};

export default Login;
