import './index.css'

const LatestMatch = props => {
  const {matchList} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = matchList
  return (
    <div className="latest-cont">
      <div className="cont1">
        <p className="head">{competingTeam}</p>
        <p className="head1">{date}</p>
        <p className="p1">{venue}</p>
        <p className="p1">{result}</p>
      </div>
      <div className="cont2">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="img"
        />
      </div>
      <div className="cont3">
        <p className="head2">First Innings</p>
        <p className="p1">{firstInnings}</p>
        <p className="head2">Second Innings</p>
        <p className="p1">{secondInnings}</p>
        <p className="head2">Man Of The Match</p>
        <p className="p1">{manOfTheMatch}</p>
        <p className="head2">Umpires</p>
        <p className="p1">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
