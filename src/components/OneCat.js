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
    handleClick = (id) => {
        updateCat(id, this.state.form)
        showCat(id).then(APIcats => {
            this.setState({cat:APIcats})
        })
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
              <br/><br/><br/>
              <fieldset class="text-light w-50 p-3 mx-auto">
                <legend class="font-weight-bold">Update the cat</legend>
                <hr class="my-4" />
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
                <button className="btn btn-dark" onClick ={this.handleClick.bind(this,this.state.cat.id)}>Submit </button>
              </fieldset>
              <br/>
            <div id='result' class="card bg-light mb-3 w-50 p-3 mx-auto">
                <h5 class="card-header bg-light">Cat Id: {this.state.cat.id} </h5>
                <h5 >Cat name: {this.state.cat.name} </h5>
                <h5>Cat age: {this.state.cat.age} </h5>
                <h5>Cat enjoys: {this.state.cat.enjoys} </h5>
            </div>
            </div>
        )
    }
}
