import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

//const state ={
    //robots: [],
    //searchfield:''
//}

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resoponse=> resoponse.json())
            .then(users=> this.setState({robots:users}));
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
            <h1>loading</h1> :
        (
            <div className='tc'>
                <div className='heading'>
                    <h1>robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                </div>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;