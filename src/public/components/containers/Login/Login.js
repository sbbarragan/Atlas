import React, { Component, Fragment } from 'react';
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';

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
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
    ) : (
      <Fragment>
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
      </Fragment>
    );

    return (
      <Row
        style={{ width: '100%' }}
        type="flex"
        justify="center"
        align="middle"
      >
        <Col span={4}>
          <Form onSubmit={this.handleSubmit}>
            {inputs}
            <Form.Item>
              <Checkbox>Remember me</Checkbox>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Login;
