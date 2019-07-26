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
                      <h4>
                        <Link to={`/cats/${cat.id}`} className='nav-link'>
                            <span className='cat-name'>{cat.name}</span>
                        </Link>
                        <small className='cat-age'>{cat.age} years old</small>
                      </h4>
                        <span className='cat-enjoys'>{cat.enjoys}</span>
                        <button className='btn btn-danger' onClick ={this.handleDelete.bind(this,cat.id)}> Delete </button>
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
        )
    }
}
