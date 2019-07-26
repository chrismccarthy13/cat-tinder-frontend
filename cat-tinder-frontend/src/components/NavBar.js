import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Cats from './Cats'
import NewCat from './NewCat'
import About from './About'

export default class NavBar extends Component {
    render(){
        return(
            <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to="/" className='navbar-brand'>Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link to="/" className='nav-link'>Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/cats" className='nav-link'>Cats</Link>
      </li>
      <li className="nav-item">
        <Link to="/newcat" className='nav-link'>Create new cat</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className='nav-link'>About</Link>
      </li>
    </ul>
  </div>
</nav>
<Switch>
<Route  exact path='/cats' render={(props) => <Cats
    cats={this.props.cats}
    deleteCat = {this.props.deleteCat}
    updateCat = {this.props.updateCat}
    />}/>
    <Route exact path='/newcat' render={(props) => <NewCat clickFunc ={this.props.newCat}/>} />
    <Route path='/about' component = {About}/>
    <Route path='/'/>
    </Switch>
</Router>
        )
    }
}
