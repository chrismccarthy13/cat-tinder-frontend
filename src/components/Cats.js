import React, { Component } from 'react'
import {
    Col, Container, Row, ListGroup
} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import OneCat from './OneCat'
export default class Cats extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleDelete = (id) =>{
        this.props.deleteCat(id)
    }
    render() {
        return(
          <div>
            <br/><br/><br/>
            <Router>
            <Switch>
            <Route exact path= {`/cats/:id`} component={OneCat}/ >
            // <Route exact path ={`/cats/:id`} component={() => <OneCat changeCat = {this.props.updateCat}/>} />
            <Container>
            <Row>
                <Col xs={12}>
                <ListGroup>
                {this.props.cats.map((cat, index) =>{
                  return (
                    <ListGroup.Item key={index}>
                    <div class="card bg-light mb-3">
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
                </Col>
                </Row>
            </Container>
            <Route path= {`/cats`} component={Cats} />
            </Switch>
            </Router>
          </div>
        )
    }
}
