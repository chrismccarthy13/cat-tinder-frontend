import React, {Component} from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import {getCats, createCat, showCat, deleteCat} from './api/index'
import NavBar from './components/NavBar'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            // cats: []
            cats: [
        {
          id: 1,
          name: 'Morris',
          age: 2,
          enjoys: "Long walks on the beach."
        },
        {
          id: 2,
          name: 'Paws',
          age: 4,
          enjoys: "Snuggling by the fire."
        },
        {
          id: 3,
          name: 'Mr. Meowsalot',
          age: 12,
          enjoys: "Being in charge."
        }
      ]
        }
    }
    componentDidMount() {
        getCats().then(APIcats => {
                console.log(APIcats);
                this.setState({cats:APIcats})
            })
    }
    handleCatUpdate(){

    }
    handleNewCat = (newCatInfo) => {
        let catList = this.state.cats
        createCat(newCatInfo)
            .then(successCat => {
                // if (successCat.name !== 'Error') {
                //     catList.push(successCat)
                //     this.setState({cats:catList})
                // }
            })
    }
    handleDelete = (id) => {
        deleteCat(id)

    }
    componentDidUpdate = (cat) => {
          getCats(cat).then(APIcats => {
              this.setState({cats:APIcats})
          })
	    }

    render(){
      return (
        <div className="masthead">
            <NavBar cats={this.state.cats}
            newCat ={this.handleNewCat}
            showOne = {showCat}
            deleteCat = {this.handleDelete}
            updateCat = {this.handleCatUpdate}
            />
        </div>
      );
    }
}

export default App;
