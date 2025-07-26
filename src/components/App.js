import React from 'react'
import Review from './Review'
import './../styles/App.css';

const App = () => {
  return (
    <div>
        <section className="container">
        <h2 id="review-heading">Our Reviews</h2>
        <Review />
        </section>
    </div>
  )
}

export default App

