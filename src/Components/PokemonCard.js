

const PokemonCard = (props) => {
  return (
      <div>
        <h3>{props.name}</h3>
        <img
          className="card-image" 
          src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`} 
          alt={props.name}
        />
      </div>
  );
}

export default PokemonCard;