export default function Card({card}){
    return(
       <div className="card">
        <img src = {card.image}/>
        <ul className="stat-list">
            <li className="stat-list-item">
            <span>{card.stats[0].name}</span>
        <span>{card.stats[0].value}</span>
            </li>
            <li>
                <span>Chocolatiness</span>
                <span>10</span>
            </li>
            <li>
                <span>Sugariness</span>
                <span>69</span>
            </li>
        </ul>
        
       </div>
    );
}