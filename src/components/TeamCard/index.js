import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamList} = props
  const {id, name, teamImageUrl} = teamList

  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="list-cont">
        <img src={teamImageUrl} alt={name} className="team-img" />
        <p className="heading1">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
