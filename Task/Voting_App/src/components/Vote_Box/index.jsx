import Vote_btn from "../Vote_btn";
import "./Vote_Box.css";

const Vote_Box = ({ votes, onVote }) => {
  return (
    <div className="vote-box">
      <h2>Cast Your Vote</h2>
      
      <div className="vote-options">
        <Vote_btn 
          title={`Vote for Candidate 1 (Current: ${votes.candidate1})`}
          onClick={() => onVote('candidate1')}
        />
        <Vote_btn 
          title={`Vote for Candidate 2 (Current: ${votes.candidate2})`}
          onClick={() => onVote('candidate2')}
        />
        <Vote_btn 
          title={`Vote for Candidate 3 (Current: ${votes.candidate3})`}
          onClick={() => onVote('candidate3')}
        />
      </div>
    </div>
  );
};

export default Vote_Box;