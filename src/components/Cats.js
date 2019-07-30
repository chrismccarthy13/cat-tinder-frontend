import React, { Component } from 'react'
import {
    Col, Container, Row, ListGroup
} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import OneCat from './OneCat'
import '../App.css'
export default class Cats extends Component {

    handleDelete = (id) =>{
        this.props.deleteCat(id)
    }
    render() {
        return(
          <div id ='cat'>
            <br/><br/><br/>

            // <Route exact path ={`/cats/:id`} component={() => <OneCat changeCat = {this.props.updateCat}/>} />
                <ListGroup id="cats-container">
                {this.props.cats.map((cat, index) =>{
                  return (
                    <ListGroup.Item key={index} id='list-cats'>
                    <div id='cat-card' className="card bg-light mb-3">
                      <h4 class="card-header bg-light">
                        <Link to={`/cats/${cat.id}`} className='nav-link'>
                          <span className='cat-name text-info'>{cat.name}</span>
                        </Link>
                      </h4>
                      <div class="card-body">
                        <h5 className='card-text text-muted'>{cat.age} years old</h5>
                        <br/>
                        <span className='card-text'>{cat.enjoys}</span>
                        <br/><br/>
                        <button className='btn btn-dark' onClick ={this.handleDelete.bind(this,cat.id)}> Delete </button>
                      </div>
                      </div>
                     </ListGroup.Item>
                    )
                  })}
                </ListGroup>
          </div>
        )
    }
}
