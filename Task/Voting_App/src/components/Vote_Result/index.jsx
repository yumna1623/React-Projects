import './Vote_Result.css'; 

const Vote_Result = ({ votes, onReset }) => {
  return (
    <div className="vote-result">
      <h2>Voting Results</h2>
      <div className="result-display">
        <p>Candidate 1: {votes.candidate1} votes</p>
        <p>Candidate 2: {votes.candidate2} votes</p>
        <p>Candidate 3: {votes.candidate3} votes</p>
      </div>
      <button className='cool-btn' onClick={onReset}>
        Reset All Votes
      </button>
    </div>
  );
};

export default Vote_Result;