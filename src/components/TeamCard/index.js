import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamList} = props
  const {id, name, teamImageUrl} = teamList

  return (
    <Link to={`/ipl/${id}`} className="item-link">
      <li className="list-cont">
        <img src={teamImageUrl} alt={name} className="team-img" />
        <h1 className="heading1">{name}</h1>
      </li>
    </Link>
  )
}
export default TeamCard
