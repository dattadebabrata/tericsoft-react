import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: '',
        }
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()).then(user => this.setState(() => {
            return {monsters: user}
        }, () => {
            console.log(this.state)
        }))
    };

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return {searchField}
        })
    }

    render() {
        const {monsters, searchField} = this.state;
        const {onSearchChange} = this;

        const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField));

        return (
            <div className="App">
                {/*<input className={'Search-Box'} type="search " placeholder={"Search Monsters"}*/}
                {/*       onChange={onSearchChange}/>*/}
                {/*{filteredMonsters.map(monster => <h1>{monster.name}</h1>)}h1*/}
                <SearchBox className={"monster-search-box"} onChangeHandler={onSearchChange}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        )
    }
}

export default App;
