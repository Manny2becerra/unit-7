import React from "react";

const GalleryItem = ({image}) => {

    return (
        // display image using image prop
        <li>
            <img src={image} alt="" />
        </li>
    )
}

export default GalleryItem;