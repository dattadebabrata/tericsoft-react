import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";


const App = () => {
    const [searchField, setSearchField] = useState("")
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()).then(user => setMonsters(user))
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField))
        setFilteredMonsters(newFilteredMonsters)
    }, [monsters, searchField])

    console.log(searchField)
    const onSearchChange = (event) => {
        const searchValue = event.target.value.toLocaleLowerCase();
        setSearchField(searchValue);

    }

    return (
        <div className="App">

            <h1 className="app-title">Monster Rolodex</h1>
            <SearchBox className={"monster-search-box"} onChangeHandler={onSearchChange}/>
            <CardList monsters={filteredMonsters}/>
        </div>
    )
}

// Class component;
// import {Component} from "react";

// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             monsters: [],
//             searchField: '',
//         }
//     };
//
//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json()).then(user => this.setState(() => {
//             return {monsters: user}
//         }, () => {
//             console.log(this.state)
//         }))
//     };
//
//     onSearchChange = (event) => {
//         const searchField = event.target.value.toLocaleLowerCase();
//         this.setState(() => {
//             return {searchField}
//         })
//     }
//
//     render() {
//         const {monsters, searchField} = this.state;
//         const {onSearchChange} = this;
//
//         const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField));
//
//         return (
//             <div className="App">
//                 {/*<input className={'Search-Box'} type="search " placeholder={"Search Monsters"}*/}
//                 {/*       onChange={onSearchChange}/>*/}
//                 {/*{filteredMonsters.map(monster => <h1>{monster.name}</h1>)}h1*/}
//                 <h1 className="app-title">Monster Rolodex</h1>
//                 <SearchBox className={"monster-search-box"} onChangeHandler={onSearchChange}/>
//                 <CardList monsters={filteredMonsters}/>
//             </div>
//         )
//     }
// }

export default App;
