import { useEffect, useState } from "react"
import Card from "./card"
import '../style/cardlist.css'
function CardList () {
    const request = "https://api.giphy.com/v1/gifs/search?api_key=Y1kF6AzP9mQEdcf88JeCgMUDhR1K0f1a&q=birds&limit=3"
    const [imgList, setImgList] = useState([])
    // onload of component
    useEffect(() => {
        fetch(request)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setImgList(data.data.map((item => ({
                url: item.images.original.url,
                title: item.title,
                id: item.id
            }
            ))))
        }).catch(err => {
            console.error("error loading", err);
            // Fallback images
            setImgList([
                "https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg",
                "https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg",
                "https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg",
                "https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg"
            ]);
        });
    }, [])
    return(
        <div id="card-grid">
            {imgList.map((card) => (
                <Card url={card.url} description={card.title} key={card.id} />
            ))}
        </div>
    )
}
export default CardList