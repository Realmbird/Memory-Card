function Card ({url, description,handleClick}) {
    return (
        <div className="card" onClick={handleClick}>
            <img src={url} alt={description} />
            <br />
            <span>{description}</span>
        </div>
    ) 
}
export default Card