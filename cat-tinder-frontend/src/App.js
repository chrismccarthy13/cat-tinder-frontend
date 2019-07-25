import React, {Component} from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import {getCats} from './api/index'
import NavBar from './components/NavBar'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            cats:[
                {
                    id: 1,
                    name: 'Morris',
                    age: 2,
                    enjoys: 'Long walks'
                },
                {
                    id: 2,
                    name: 'Paws',
                    age: 4,
                    enjoys: 'Short walks'
                },
                {
                    id: 3,
                    name: 'Terminator of paws',
                    age: 9000,
                    enjoys: 'Eating humans'
                }
            ]
        }
    }
    handleClick = (cat) => {
        let catList = this.state.cats
        cat.id = catList.length + 1
        cat.age = parseInt(cat.age)
        catList.push(cat)
        this.setState({cats:catList})
        console.log(this.state.cats);
    }

    render(){
      return (

        <div>
            <NavBar cats={this.state.cats} newCat ={this.handleClick} />
        </div>

      );
    }
}

export default App;
