import { useEffect, useState } from "react"
import Card from "./card"
import '../style/cardlist.css'
function shuffle (array){
    let clone =  structuredClone(array);
    console.log(array)
    console.log(clone)
    let shuffled = []
    let n = array.length 
    // while n not 0
    while (n) {
        let random = Math.floor(Math.random() * n); //random 0 - n
        
        shuffled.push(clone[random])
        clone.splice(random, 1)
        n--
    }
    return shuffled
}
function CardList ({increaseScore}) {
    const request = "https://api.giphy.com/v1/gifs/search?api_key=Y1kF6AzP9mQEdcf88JeCgMUDhR1K0f1a&q=birds&limit=3"
    const [imgList, setImgList] = useState([]) 
    function handleClick() {
        increaseScore()
        setImgList(shuffle(imgList))
    }
    // onload of component
    useEffect(() => {
        fetch(request)
        .then((response) => response.json())
        .then((data) => {
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
                <Card url={card.url} description={card.title} key={card.id} handleClick={handleClick} />
            ))}
        </div>
    )
}
export default CardList