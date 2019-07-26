import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return(
<div className="aboutus-section">
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="aboutus">
                    <h2 className="aboutus-title">About Us</h2>
                    <p className="aboutus-text">This is our first full stack project at LEARN Academy.
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
