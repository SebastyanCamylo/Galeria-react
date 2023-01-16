const Card = ({link, titulo, descripcion}) => {
  return (
    <div className="card text-center">
      <img src={`${link}`} alt="" />
      <div className="card-body d-flex flex-column">
        <div>
          <h4 className="card-title">{titulo}</h4>
          <p className="card-text">{descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;