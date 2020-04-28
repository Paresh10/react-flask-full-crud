import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class EditLaptop extends Component {

  constructor(props) {
    super(props)

      this.state = {
        maker: props.laptopToBeEdited.maker,
        model: props.laptopToBeEdited.model,
        manufactured_on: Date()
      }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // this.props.createNewLaptop(this.state)

  }

  render() {
    return(
      <Segment>
        <h3> Edit </h3>
        <Form onSubmit={this.handleSubmit}>
          <Label> Maker </Label>
          <Form.Input
          type="text"
          name="maker"
          value={this.state.maker}
          placeholder="Maker of the Laptop"
          onChange={this.handleChange}
          />


          <Label> Model </Label>
          <Form.Input
          type="text"
          name="model"
          value={this.state.model}
          placeholder="Which model is it?"
          onChange={this.handleChange}
          />


          <Label> Maker </Label>
          <Form.Input
          type="date"
          name="manufactured_on"
          value={this.state.manufactured_on}
          placeholder="manufacturing date"
          onChange={this.handleChange}
          />

          <Button type="Submit"> Update Laptop! </Button>
        </Form>
      </Segment>
    )
  }

}


//
