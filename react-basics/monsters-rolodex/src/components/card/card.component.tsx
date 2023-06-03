import './card.styles.css';
import {Monster} from "../../App";

type CardProps = {
    monster: Monster;
}

const Card = ({monster: {id, name, email}}: CardProps) => {
    return (
        <div className="card-conteiner">
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

// import {Component} from "react";
//
// class Card extends Component {
//     render() {
//         const {name, email, id} = this.props.monster
//         return (
//             <div className="card-conteiner">
//                 <img src={`https://robohash.org/${id}?set=set2&size=180x180`}
//                      alt={`monster ${name}`}/>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }

export default Card;