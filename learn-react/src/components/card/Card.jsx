import "./card-style.css";
function Card(props) {
  return (
    <div className="container">
      <div className="img-box">
        <img src={props.image} alt={props.name} />
      </div>
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
    </div>
  );
}
export default Card;
