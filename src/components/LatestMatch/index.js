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
  } = {matchList}
  return (
    <div className="latest-cont">
      <div className="cont1">
        <h1 className="head">{competingTeam}</h1>
        <h1 className="head1">{date}</h1>
        <p className="p1">{venue}</p>
        <p className="p1">{result}</p>
      </div>
      <div className="cont2">
        <img src={competingTeamLogo} alt={competingTeam} className="img" />
      </div>
    </div>
  )
}
export default LatestMatch
