import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl, ControlLabel, Checkbox, Button } from 'react-bootstrap';

class LogIn extends Component {
    render() {
        return (
            <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={3}>
                Email
              </Col>
              <Col sm={5}>
                <FormControl type="email" placeholder="Email" />
              </Col>
            </FormGroup>
        
            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={3}>
                Password
              </Col>
              <Col sm={5}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>
        
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>
        
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
                  Sign in
                </Button>
              </Col>
            </FormGroup>
          </Form>
        );
    }
}

export default LogIn;