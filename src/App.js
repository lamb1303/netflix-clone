import React from 'react';
import Row from './components/Row/Row'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
import request from './request'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row title="Netflix Originals"
        isLargeRow
        fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending"
        fetchUrl={request.fetchTrending} />
      <Row title="Top Rated"
        fetchUrl={request.fetchTopRated} />
      <Row title="Action"
        fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy"
        fetchUrl={request.fetchComedyMovies} />
    </div>
  );
}

export default App;
