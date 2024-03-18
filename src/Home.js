import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { shuffle } from 'lodash'; // to make a random array

import movielist from './Movielist';
import Serielist from './Serielist';

function Home() {
  const [randomMovies, setRandomMovies] = useState(movielist.slice(0,4));
  const [randomSeries, setRandomSeires] = useState(Serielist.slice(0,4));


  useEffect(() => {
    
    const intervalId = setInterval(() => {

      const randomFourMovies = shuffle(movielist).slice(0, 4);
      const randomFourSeries=shuffle(Serielist).slice(0,4);
      setRandomMovies(randomFourMovies);
      setRandomSeires(randomFourSeries);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div id='Home'>
      <h3 style={{marginLeft:'600px'}}>Our Movies</h3>
      <div className='cards'>
       
        {randomMovies.map((movie) => (
          <Card style={{ width: '18rem', height: '650px' }} key={movie.id}>
            <Link to={`/Movie/${movie.id}`}>
              <Card.Img variant="top" src={movie.Image} />
            </Link>
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text className="mb-2 text-muted">{movie.desc.slice(0, 100)}...</Card.Text>
              <h5>Rating: {movie.rate}</h5>
            </Card.Body>
          </Card>
        ))}
      </div>
        <h3 style={{marginLeft:'600px'}}>Our Series</h3>
        <div className='cards'>
       
        {randomSeries.map((movie) => (
          <Card style={{ width: '18rem', height: '650px' }} key={movie.id}>
            <Link to={`/TVShow/${movie.id}`}>
              <Card.Img variant="top" src={movie.Image} />
            </Link>
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text className="mb-2 text-muted">{movie.desc.slice(0, 100)}...</Card.Text>
              <h5>Rating: {movie.rate}</h5>
            </Card.Body>
          </Card>
        ))}
      </div>
    
    </div>
  );
}

export default Home;