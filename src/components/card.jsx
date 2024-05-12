function Card ({url, description, handleClick, id}) {
    return (
        <div className="card" onClick={handleClick} id = {id}>
            <img src={url} alt={description} id = {id} />
            <br />
            <span id = {id}>{description}</span>
        </div>
    ) 
}
export default Card