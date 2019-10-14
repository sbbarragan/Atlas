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
import constants from '../../../constants';
import { Translate, Tr } from '../../HOC';

const { checkbox, classInputInvalid } = constants;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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
    if (element && element.preventDefault) {
      element.preventDefault();
    }
  }

  render() {
    const { writeToken, token, username, password, showError } = this.state;
    const classnameError = {};
    classnameError[classInputInvalid] = showError;
    const inputs = writeToken ? (
      <FormGroup row>
        <InputGroup className={classnames('col')}>
          <InputGroupAddon addonType="prepend">
            <icon className={classnames('fas', 'fa-lock-alt')} />
          </InputGroupAddon>
          <Input
            className={classnames(classnameError)}
            type="password"
            autoComplete="off"
            placeholder={Tr('2FA Token')}
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
              placeholder={Tr('Username')}
              value={username}
              onChange={e => {
                this.handleChange('username', e);
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
              placeholder={Tr('Password')}
              value={password}
              onChange={e => {
                this.handleChange('password', e);
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
                    onClick={e => {
                      this.handleChange('keepLogged', e);
                    }}
                  />
                  <Translate word="Keep me logged in" />
                </Label>
              </Col>
              <Col sm="12" md="6" className={classnames('text-center')}>
                <Button
                  type="primary"
                  className="login-form-button"
                  onClick={this.handleSubmit}
                >
                  <Translate word="Login" />
                </Button>
              </Col>
            </FormGroup>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Login;
