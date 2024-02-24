import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MovieItem from './Movies/MovieItem';
import { Link } from "react-router-dom";
import { getAllMovies } from '../api-helpers/api-helpers';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  console.log(movies);
  return <Box width={'80%'} height={'100%'} margin={"auto"} marginTop={2}>
    <Box margin={"auto"} width={"80%"} height={"40vh"} padding={2}>
      <img src='https://images.firstpost.com/wp-content/uploads/2023/11/samnew.jpg?impolicy=website&width=640&height=363'
        alt="Sam Bahadur"
        width={"100%"}
        height={"100%"} />
    </Box>
    <Box padding={5} margin="auto">
      <Typography variant="h4" textAlign={"center"}>
        Latest Releases
      </Typography>
    </Box>
    <Box
      display="flex"
      width="100%"
      justifyContent={"center"}
      flexWrap="wrap">
      {movies && movies.slice(0, 4).map((movie, index) => (
        <MovieItem id={movie.id} title={movie.title} posterUrl={movie.posterUrl} releaseDate={movie.releaseDate} key={index} />
      ))}
    </Box>
    <Box display="flex" padding={5} margin="auto">
      <Button
        LinkComponent={Link} to="/movies"
        variant="outlined"
        sx={{ margin: "auto", color: "#2b2d42" }}
      >
        View All Movies
      </Button>
    </Box>
  </Box>
}

export default HomePage;