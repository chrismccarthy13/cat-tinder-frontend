import React, {Component} from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import {getCats, createCat, showCat, deleteCat, updateCat} from './api/index'
import NavBar from './components/NavBar'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            // cats: []
            cats: [

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
        .then( successCat => {
        getCats().then(APIcats => {
            this.setState({cats:APIcats})
        })})
    }
    handleDelete = (id) => {
        deleteCat(id)
        .then( successCat => {
        getCats().then(APIcats => {
            this.setState({cats:APIcats})
        })})
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
