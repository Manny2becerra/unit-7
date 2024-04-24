import Gallery from "./Gallery";
import React from "react";

const Dogs = ({flicker}) => {
    return (
        // flicker holds the api key uses tag to pass in search tag
        <>
            <Gallery tag="Dogs" flickerKey={flicker}/>
        </>
    )
}

export default Dogs;