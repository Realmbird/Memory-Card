function Card ({url, description}) {
    return (
        <div className="card">
            <img src={url} alt={description} />
            <br />
            <span>{description}</span>
        </div>
    ) 
}
export default Card