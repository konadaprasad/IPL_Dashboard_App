// Write your code here
import './index.css'

const MatchCard = props => {
  const {items} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = items
  let isWon
  if (matchStatus === 'Won') {
    isWon = true
  } else {
    isWon = false
  }

  return (
    <li className="card-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="wonMatch-img"
      />
      <p className="head3">{competingTeam}</p>
      <p className="p2">{result}</p>
      <p className={isWon ? 'cardPara-green' : 'cardPara-red'}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
