import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return(
          <div className="jumbotron w-75 p-3 mx-auto">
              <br/><br/><br/>
              <h2 className="display-3">About Us</h2>
              <br/>
              <p className="lead">This is our first full stack project at LEARN Academy.</p>
              <br/>
              <hr class="my-4" />
              <br/>
              <p className='text-bold'>Created By:</p>
              <div class="card mb-3">
                <h3 class="card-header">Lior Kaufman</h3>
                <div class="card-body">
                  <img className="lior" />
                  <br />
                  <h6 class="card-subtitle text-muted">Full Stack Developer</h6>
                </div>
                <div class="card-body">
                  <a href="https://github.com/LiorKaufman" class="card-link" target="_blank">Github</a>
                  <a href="https://www.linkedin.com/in/lior-kaufman/" class="card-link" target="_blank">LinkedIn</a>
                </div>
              </div>
              <div class="card mb-3">
                <h3 class="card-header">Chris McCarthy</h3>
                <div class="card-body">
                  <img className="chris" />
                  <br />
                  <h6 class="card-subtitle text-muted">Full Stack Developer</h6>
                </div>
                <div class="card-body">
                  <a href="https://github.com/chrismccarthy13" class="card-link" target="_blank">Github</a>
                  <a href="https://www.linkedin.com/in/chrism1313/" class="card-link" target="_blank">LinkedIn</a>
                </div>
              </div>
          </div>
        )
    }
}
