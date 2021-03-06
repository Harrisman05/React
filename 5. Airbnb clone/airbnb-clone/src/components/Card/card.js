import './card.css'


function Card (props) {
    console.log(props.status)
    return (
        <div className="card-container">
            <img src={props.image} alt="profile"></img>
            <h3>⭐ {props.rating} <span>(6)∙USA</span></h3>
            <h3>Life lessons with {props.name}</h3>
            <h3><span>From {props.price}</span> / person</h3>
            {props.status === "SOLD OUT" && <div className="status-tag">{props.status}</div>}
        </div>
    )
}

export default Card;
