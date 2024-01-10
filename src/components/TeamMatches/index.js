import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, cricketItemList: {}}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        id: data.latest_match_details.id,
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(each => ({
        id: each.id,
        manOfTheMatch: each.man_of_the_match,
        umpires: each.umpires,
        result: each.result,
        date: each.date,
        venue: each.venue,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        firstInnings: each.first_innings,
        secondInnings: each.second_innings,
        matchStatus: each.match_status,
      })),
    }
    this.setState({cricketItemList: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, cricketItemList} = this.state
    const {latestMatchDetails, recentMatches, teamBannerUrl} = cricketItemList
    console.log(latestMatchDetails)

    const {id} = {latestMatchDetails}
    console.log(id)
    return (
      <div className="blog-container">
        <div className="team-banner-cont">
          <img
            src={cricketItemList.teamBannerUrl}
            alt="team banner"
            className="banner-img"
          />
        </div>
        <div className="latest-matches">
          <p className="para">Latest Matches</p>
          <LatestMatch matchList={latestMatchDetails} key={id} />
        </div>
      </div>
    )
  }
}

export default TeamMatches
