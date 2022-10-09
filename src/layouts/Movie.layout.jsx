import React from 'react';
import Navbar from "../components/Navbar/navbar.component";

export const MovieLayout = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    )
}

export default MovieLayout;
