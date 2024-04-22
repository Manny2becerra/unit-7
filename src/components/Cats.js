import Gallery from "./Gallery";
import Nav from "./Nav";
import SearchForm from "./SearchForm";
import React, {useEffect, useState} from "react";
import axios from "axios";
const api = axios.create();
const Cats = ({flicker}) => {

    return (
        // flicker holds the api key uses tag to pass in search tag
        <>
            <Gallery tag="Cats" flickerKey={flicker}/>
        </>
    )
}

export default Cats;