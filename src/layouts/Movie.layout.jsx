import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import MovieNavbar from '../components/Navbar/movieNavbar.component';
import { MovieContext } from '../context/movie.context';
import axios from 'axios';

export const MovieLayout = (props) => {
    const { id } = useParams();
    const { movie, setMovie } = useContext(MovieContext);

    useEffect(() => {
        const requestMovieData = async () => {
            const getMovieData = await axios.get(`/movie/${id}`);
            setMovie(getMovieData.data);
        }
        requestMovieData();
    }, [id, setMovie]);
    return (
        <>
            <MovieNavbar />
            {props.children}
        </>
    )
}

export default MovieLayout;
