import React, { useState, useEffect } from 'react';
import './App.css';
import rock from './img/rock.png';
import paper from './img/paper.png';
import scissors from './img/scissors.png';

const INITIAL_STATE = {
  tesoura: 
    {
      win: 'papel',
      lose: 'pedra'
    }
  ,
  pedra: 
    {
      win: 'tesoura',
      lose: 'papel'
    }
  ,
  papel: 
    {
      win: 'pedra',
      lose: 'tesoura'
    }
  
}

function App() {
  const [ userScore, setUserScore ] = useState(0);
  const [ compScore, setCompScore ] = useState(0);
  const [ result, setResult ] = useState('');
  const [ compChoice, setCompChoice ] = useState('');
  const [ choice, setChoice ] = useState(INITIAL_STATE)

  
  const comp = () => {
    const textArray = ['pedra','papel','tesoura'];
  const randomChoice = textArray[Math.floor(Math.random()*textArray.length)];
  setCompChoice(randomChoice);
  }

  useEffect(() => {
    game();
  }, [choice]);

  const game = () => {
    comp();
    if(choice.win === compChoice){
      setUserScore(userScore + 1)
      setResult(`${choice} ganha de ${compChoice}, parabens`)
    } else if(choice.lose === compChoice){
      setCompScore(compScore + 1)
      setResult(`${choice} perde de ${compChoice}, voce perdeu`)
    } else{
      setResult(`${choice} eh igual a ${compChoice}, voces empataram`)
    }
    setChoice(INITIAL_STATE)
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
          <img src={rock} alt="rock" onClick={() => {setChoice(choice.pedra)}}/>
        
        </div>
        
          <div className="choice" id='p'>
            <img src={paper} alt="paper" onClick={() => {setChoice(choice.papel)}}/>
          </div>
       
          <div className="choice" id='s'>
            <img src={scissors} alt="scissors" onClick={() => {setChoice(choice.tesoura)}}/>
        </div>
      </div>
      <p id="action-message">make your move</p>
    </div>
  );
}

export default App;

