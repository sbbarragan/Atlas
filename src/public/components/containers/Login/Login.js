import React, { Component, Fragment } from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  Button
} from 'reactstrap';
import classnames from 'classnames';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pass: '',
      token: '',
      writeToken: false
    };
  }

  render() {
    const { writeToken } = this.state;
    const inputs = writeToken ? (
      <FormGroup row>
        <InputGroup className={classnames('col')}>
          <InputGroupAddon addonType="prepend">LOCK</InputGroupAddon>
          <Input type="password" placeholder="Password" />
        </InputGroup>
      </FormGroup>
    ) : (
      <Fragment>
        <FormGroup row>
          <InputGroup className={classnames('col')}>
            <Input placeholder="Username" />
          </InputGroup>
        </FormGroup>
        <FormGroup row>
          <InputGroup className={classnames('col')}>
            <Input type="password" placeholder="Password" />
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
          <Form onSubmit={this.handleSubmit} className={classnames('col')}>
            {inputs}
            <FormGroup row>
              <Col sm="12" md="6" className={classnames('text-center')}>
                <Label>
                  <Input type="checkbox" /> Keep me logged in
                </Label>
              </Col>
              <Col sm="12" md="6" className={classnames('text-center')}>
                <Button type="primary" className="login-form-button">
                  Log in
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Login;
