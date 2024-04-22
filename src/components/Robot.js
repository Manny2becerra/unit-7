import Gallery from "./Gallery";
import Nav from "./Nav";
import SearchForm from "./SearchForm";
import React from "react";

const Computers = ({flicker}) => {
    return (
        // flicker holds the api key uses tag to pass in search tag
        <>
            <Gallery tag="Robot" flickerKey={flicker}/>
        </>
    )
}

export default Computers;