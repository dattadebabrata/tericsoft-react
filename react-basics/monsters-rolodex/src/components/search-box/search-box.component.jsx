import {Component} from "react"
import './search-box.styles.css';

const SearchBox = ({onChangeHandler, className}) => {
    return (
        <input className={`search-box ${className}`} type="search " placeholder={"Search Monsters"}
               onChange={onChangeHandler}/>
    )
}

// class SearchBox extends Component {
//     render() {
//         return (
//             <input className={`search-box ${this.props.className}`} type="search " placeholder={"Search Monsters"}
//                    onChange={this.props.onChangeHandler}/>
//         )
//     }
// }

export default SearchBox;