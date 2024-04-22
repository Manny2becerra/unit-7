import React from "react";

const NotFound = () => {

    //component used when invalid url is input by the user
    return (
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
        </li>
    )
}

export default NotFound;
