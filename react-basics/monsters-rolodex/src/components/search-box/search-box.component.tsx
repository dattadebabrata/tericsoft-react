import {ChangeEvent} from "react"
import './search-box.styles.css';

type SearchBoxProps = {
    className: string,
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({onChangeHandler, className}: SearchBoxProps) => {
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