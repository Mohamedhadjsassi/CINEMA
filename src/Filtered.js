import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import movielist from './Movielist';

function Filtered({ search , rating , adding}) {
   
    console.log(rating);
  // Filter the movie list based on the search query
  const filteredMovies = adding.filter(movie =>
       (movie.title.toLocaleLowerCase().includes(search.toLowerCase())==true)&&( (movie.rate >=(rating)) ==true)   );
  
  

  console.log(filteredMovies);
  
  
  
  return (
    <div className="cards">
      {(filteredMovies).map(movie => (
        <Card key={movie.id} style={{ width: '18rem', height: '650px' }}>
          <Card.Img variant="top" src={movie.Image} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text className="mb-2 text-muted">
              {movie.desc.slice(0, 100)}...
            </Card.Text>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <h5>Rating: {movie.rate}</h5>
              <Button variant="primary">Watch Now</Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Filtered;