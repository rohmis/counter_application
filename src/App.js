import React, { Component } from 'react'
import logo from "./logo.svg";
import "./App.css";
import { Button, Form, Stack, Container, Row, Col } from "react-bootstrap";

export default class App extends Component {
  constructor(){
    super()
    this.state={
      count:0
    }
  }
  increment(){
    this.setState({count: this.state.count+1}) 
  }

  decrement(){
    if (this.state.count>0){
    this.setState({count: this.state.count-1}) 
  }}

  reset(){
    this.setState({count: this.state.count=0}) 
  }
  render() {
    
    return (
          <>
      <Container className="justify-content-md-center  w-50 mt-5  bg-warning">
        <h1>Counter Application</h1>

        <Row>
          <Col md="auto">
            <Stack direction="horizontal" gap={3}>
              <Button as="a" variant="primary" onClick={()=>{this.decrement()}}>
                Decrement
              </Button>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label></Form.Label>
                  <Form.Control type="text" value={this.state.count} readOnly/>
                </Form.Group>
              </Form>
              <Button as="a" variant="success" onClick={()=>{this.increment()}}>
                Increment
              </Button>
              <Button as="a" variant="danger" onClick={()=>{this.reset()}}>
                Reset
              </Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
    )
  }
}



