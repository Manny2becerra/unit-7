import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import GalleryItem from "./GalleryItem";
import '../App.css';
import axios from "axios";
const Gallery = ({flickerKey, tag}) => {
    //stores array of images returned from flicker api
    const [images, setImages] = useState([]);

    //stores params from search param
    let params = useParams().search;

    //if params exist override the value passed to tag. This allows search by changing the URL manually or by typing in the search input.
    if (params) {
        tag=params
    }

    // after rendering call flicker api and store images in the images state
    useEffect(()=>{
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickerKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
        .then(data => setImages(data.data.photos.photo));
        //console.log(images)
    }, [])
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {   
                    //mapp through images creating a gallery item for each image
                    images.map(image => {
                        //console.log(image);
                        return <GalleryItem key={image.id} image={`https://farm5.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}/>
                    })
                }
            </ul>
      </div>
    )
}

export default Gallery;