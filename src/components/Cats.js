import Gallery from "./Gallery";
import React from "react";
const Cats = ({flicker}) => {

    return (
        // flicker holds the api key uses tag to pass in search tag
        <>
            <Gallery tag="Cats" flickerKey={flicker}/>
        </>
    )
}

export default Cats;