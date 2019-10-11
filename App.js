import React, { useState, useEffect } from 'react';
import './App.css';
import rock from './img/rock.png';
import paper from './img/paper.png';
import scissors from './img/scissors.png';

function App() {
  const [ userScore, setUserScore ] = useState(0);
  const [ compScore, setCompScore ] = useState(0);
  const [ result, setResult ] = useState('');
  const [ choice, setChoice ] = useState('');
  const [ compChoice, setCompChoice ] = useState('');

  const comp = () => {
    const textArray = ['rock','paper','scissors'];
  const randomChoice = textArray[Math.floor(Math.random()*textArray.length)];
  setCompChoice(randomChoice);
  }

  useEffect(() => {
    game();
  }, [choice]);

  const game = () => {
    comp();
    if(choice === compChoice){
      setResult(`you both chose ${choice}, its a draw`);
    } 
    if(choice === 'rock' && compChoice === 'paper'){
      setCompScore(compScore + 1);
      setResult('paper covers rock, you lose!');
    }
    if(choice === 'rock' && compChoice === 'scissors'){
      setUserScore(userScore + 1);
      setResult('rock beats scissors, you win!');
    }
    if(choice === 'paper' && compChoice === 'rock'){
      setUserScore(userScore + 1);
      setResult('paper covers rock, you win!');
    }
    if(choice === 'paper' && compChoice === 'scissors'){
      setCompScore(compScore + 1);
      setResult('scissors cuts paper, you lose!');
    }
    if(choice === 'scissors' && compChoice === 'rock'){
      setCompScore(compScore + 1);
      setResult('rock beats scissors, you lose!');
    }
    if(choice === 'scissors' && compChoice === 'paper'){
      setUserScore(userScore + 1);
      setResult('scissors cuts paper, you win!');
    }
    console.log(choice, compChoice);
  }

  return (
    <div className="App">
      <header>
        <h1>Jokenpo</h1>
      </header>
      <div className="score-board">
        <div className="badge" id="user-label">user</div>
        <div className="badge" id="comp-label">comp</div>
        <span id="user-score">{ userScore }</span><span>:</span><span id="comp-score">{ compScore }</span>
      </div>
      <div className="result">
        <p>{result}</p>
      </div>
      <div className="choices">
        <div className="choice" id='r'>
          <img src={rock} alt="rock" onClick={() => {setChoice('rock')}}/>
        
        </div>
        
          <div className="choice" id='p'>
            <img src={paper} alt="paper" onClick={() => {setChoice('paper')}}/>
          </div>
       
          <div className="choice" id='s'>
            <img src={scissors} alt="scissors" onClick={() => {setChoice('scissors')}}/>
        </div>
      </div>
      <p id="action-message">make your move</p>
    </div>
  );
}

export default App;
