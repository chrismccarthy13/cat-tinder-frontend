import React, { Component } from 'react'
import {
      Form
} from 'react-bootstrap'

export default class NewCat extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                id: '',
                name: '',
                age:'',
                enjoys: ''
            }
        }
    }

    handleChange = (event) => {
        let {form} = this.state
        form[event.target.name] = event.target.value
        this.setState({form:form})
    }
    // newCatClick = () => {
    //     console.log(this.state.form);
    //     let {form} = this.state
    //     if (this.validateFields()) {
    //         this.props.clickFunc(this.state.form)
    //
    //         this.setState({isValid:false})
    //     }
    //
    // }
    // validateFields = () => {
    //     let valid = this.state.isValid
    //     if (this.state.form.name ==='' || this.state.form.age ==='' || this.state.form.enjoys ==='') {
    //         valid = false
    //     }
    //     else  {
    //         valid = true
    //     }
    //     this.setState({isValid:valid})
    //     return valid
    // }
    handleClick = () => {
        this.props.clickFunc(this.state.form)
        let emptyForm = {
                    id: '',
                    name: '',
                    age:'',
                    enjoys:''
                }
        this.setState({form: emptyForm})
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
          />
    </Form.Group>

    <Form.Group>
      <Form.Label>Age:</Form.Label>
      <Form.Control
      type ='number'
      name = 'age'
      onChange = {this.handleChange}
      value ={this.state.form.age}
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
    <button className="btn btn-primary" onClick ={this.handleClick}>Submit </button>
  </fieldset>
  </div>
        )
    }
}
