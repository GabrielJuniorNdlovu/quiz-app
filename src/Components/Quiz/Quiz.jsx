import React, { useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data';

const Quiz = () => {

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]); 
  return (
    <div>
      <div className="container">
        <h1>Quiz App</h1>
        <hr/>
        <h2>{index+1}. Which device is required for the Internet connection</h2>
        <ul>
            <li>Moderm</li>
            <li>Router</li>
            <li>LAN Cable</li>
            <li>Pen Drive</li>
        </ul>
        <button>Next</button>
        <div className="index"> 1 of 5 questions</div>
      </div>
    </div>
  )
}

export default Quiz
