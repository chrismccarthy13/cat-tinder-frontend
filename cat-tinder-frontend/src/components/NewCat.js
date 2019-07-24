import React, { Component } from 'react'
import {
     ListGroup, Form, Alert
} from 'react-bootstrap'
import {Input} from 'reactstrap'
export default class NewCat extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                id: '',
                name: '',
                age:'',
                enjoys: ''
            },
            isValid: false
        }
    }

    handleChange = (event) => {
        let {form} = this.state
        form[event.target.name] = event.target.value
        this.setState({form:form})
    }
    newCatClick = () => {
        console.log(this.state.form);
        let {form} = this.state
        if (this.validateFields()) {
            this.props.clickFunc(this.state.form)
            let emptyForm = {
                id: '',
                name: '',
                age:'',
                enjoys:''
            }
            this.setState({form: emptyForm})
            this.setState({isValid:false})
        }

    }
    validateFields = () => {
        let valid = this.state.isValid
        if (this.state.form.name ==='' || this.state.form.age ==='' || this.state.form.enjoys ==='') {
            valid = false
        }
        else  {
            valid = true
        }
        this.setState({isValid:valid})
        return valid
    }

    render(){
        return(
<div>
  <fieldset>
    <legend>Create a new cat</legend>
    <Form.Group>
        <Form.Label>Name:</Form.Label>
          <Form.Control
          type='text'
          name = 'name'
          onChange = {this.handleChange}
          value ={this.state.form.name}
          required
          />
    </Form.Group>

    <Form.Group>
      <Form.Label>Age:</Form.Label>
      <Form.Control
      type ='number'
      name = 'age'
      onChange = {this.handleChange}
      value ={this.state.form.age}
      required = 'required'
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Cat enjoys:</Form.Label>
      <Form.Control
      type ='text-area'
      name = 'enjoys'
      onChange = {this.handleChange}
      value ={this.state.form.enjoys}
      />
    </Form.Group>
    <button className="btn btn-primary" onClick ={this.newCatClick} >Submit </button>
  </fieldset>
  </div>
        )
    }
}
