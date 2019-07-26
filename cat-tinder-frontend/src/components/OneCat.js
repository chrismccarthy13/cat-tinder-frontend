import React, { Component } from 'react'
import {
    Col, Container, Row, ListGroup
} from 'react-bootstrap'
import {
      Form
} from 'react-bootstrap'
import {showCat, updateCat} from '../api/index'
export default class OneCat extends Component {
    constructor (props){
        super(props)
        const {match} = props
        this.state = {
            form: {
                id: '',
                name: '',
                age:'',
                enjoys: ''
            },
            cat:{
                id: '',
                name:'',
                age:'',
                enjoys:''
            }
        }
    }


    componentDidMount (){
        showCat(this.props.match.params.id).then(APIcats => {
            console.log(APIcats);
                this.setState({cat:APIcats})
            })

    }
    componentDidUpdate(prevProps){
        const prevCat = prevProps.match
	    const{ match } = this.props
	    if(match.params.id != prevCat.params.id){
          showCat(match.params.id).then(APIcats => {
              this.setState({cat:APIcats})
          })

	    }
    }
    handleChange = (event) => {
        let {form} = this.state
        form[event.target.name] = event.target.value
        this.setState({form:form})
    }
    handleClick = () => {
        console.log(this.state.form);
        let emptyForm = {
                    id: '',
                    name: '',
                    age:'',
                    enjoys:''
                }
        this.setState({form: emptyForm})
    }
    render() {
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
            <div id='result'>
                <h5>Cat Id: {this.state.cat.id} </h5>
                <h5>Cat name: {this.state.cat.name} </h5>
                <h5>Cat age: {this.state.cat.age} </h5>
                <h5>Cat enjoys: {this.state.cat.enjoys} </h5>
            </div>
            </div>
        )
    }
}
