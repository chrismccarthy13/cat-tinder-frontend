import React, { Component } from 'react'
import {
    Col, Container, Row, ListGroup
} from 'react-bootstrap'

export default class About extends Component {
    render() {
        return(
<div class="aboutus-section">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="aboutus">
                    <h2 class="aboutus-title">About Us</h2>
                    <p class="aboutus-text">This is our first full stack project at LEARN Academy.
                    <br>
                    </br>
                    </p>
                    <small className='text-bold'>Chris McCarthy & Lior Kaufman</small>
                </div>
            </div>
        </div>
    </div>
</div>
        )
    }
}
