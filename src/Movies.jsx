import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import movielist from './Movielist';
import { Link } from 'react-router-dom';

function Movies({ adding }) {
  return (
    <div className='cards'>
      {adding.map((movie) => (
        <Card style={{ width: '18rem', height: '650px' }} key={movie.id}>
          <Link   key={movie.id}  to={`/Movies/${movie.id}`}>
            <Card.Img variant="top" src={movie.Image} />
          </Link>
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text className="mb-2 text-muted">{movie.desc.slice(0, 100)}...</Card.Text>
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

export default Movies;