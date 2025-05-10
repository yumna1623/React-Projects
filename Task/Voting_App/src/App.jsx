import { useState } from 'react';
import Vote_Box from './components/Vote_Box';
import Vote_Result from './components/Vote_Result';
import './App.css';

const App = () => {
  const [votes, setVotes] = useState({
    candidate1: 0,
    candidate2: 0,
    candidate3: 0
  });

  const handleVote = (candidate) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [candidate]: prevVotes[candidate] + 1
    }));
  };

  const handleReset = () => {
    setVotes({
      candidate1: 0,
      candidate2: 0,
      candidate3: 0
    });
  };

  const totalVotes = votes.candidate1 + votes.candidate2 + votes.candidate3;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Voting Application</h1>
        <p>Total votes cast: {totalVotes}</p>
      </header>
      
      <main className="app-main">
        <Vote_Box 
          votes={votes} 
          onVote={handleVote} 
        />
        
        <Vote_Result 
          votes={votes} 
          onReset={handleReset} 
        />
      </main>
    </div>
  );
};

export default App;