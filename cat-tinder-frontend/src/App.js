import React, {Component} from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import {getCats, createCat, showCat, deleteCat} from './api/index'
import NavBar from './components/NavBar'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            cats: []
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

        <div>
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
