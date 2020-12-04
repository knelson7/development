import React from 'react'
import './App.css';
import FilteredList from './FilteredList'



function App() {

  const productList = [
    { name: "Ben Platt", profession: "Musician", gender: "Male", count: 0, rating: 4.9},
    { name: "Quinn XCII", profession: "Musician", gender: "Male", count: 0, rating: 3.4},
    { name: "Demi Lovato", profession: "Musician", gender: "Female", count: 0, rating: 4.2},
    { name: "Taylor Swift", profession: "Musician", gender: "Female", count: 0, rating: 3.9},
    { name: "David Dobrik", profession: "Influencer", gender: "Male", count: 0, rating: 2.7},
    { name: "Chrissy Tiegen", profession: "Influencer", gender: "Female", count: 0, rating: 3.1},
    { name: "Kylie Jenner", profession: "Influencer", gender: "Female", count: 0, rating: 1.7},
    { name: "Logan Paul", profession: "Influencer", gender: "Male", count: 0, rating: 0.5},
    { name: "Jennifer Aniston", profession: "Actor", gender: "Female", count: 0, rating: 2.3},
    { name: "Chris Evans", profession: "Actor", gender: "Male", count: 0, rating: 3.6},
    { name: "Robert Pattinson", profession: "Actor", gender: "Male", count: 0, rating: 4.2},
    { name: "Meryl Streep", profession: "Actor", gender: "Female", count: 0, rating: 4.7}
   ]

   
  return (
    <div className="App">
      <FilteredList list={productList} />
    </div>
  );
}

export default App;
