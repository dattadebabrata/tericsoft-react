import Card from "../card/card.component";
import './card-list.styles.css';
import {Monster} from "../../App";

type CardListProps = {
    monsters: Monster[]
}

const CardList = ({monsters}: CardListProps) => {
    return (
        <div className={"card-list"}>
            {monsters.map(monster => {
                return <Card key={monster.id} monster={monster}/>
            })}
        </div>)
}


// Class component;
// import {Component} from "react";
// class CardList extends Component {
//     render() {
//         const {monsters} = this.props;
//         return (
//             <div className={"card-list"}>
//                 {monsters.map(monster => {
//                     return <Card key={monster.id} monster={monster}/>
//                 })}
//             </div>
//         )
//     }
// }

export default CardList;