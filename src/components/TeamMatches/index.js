import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    latestMatchList: {},
    bannerImage: '',
    recentMatchesList: [],
  }

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatchDetails = {
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
    }

    const teamBannerUrl = data.team_banner_url
    const recentMatches = data.recent_matches.map(each => ({
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
    }))
    this.setState({
      latestMatchList: latestMatchDetails,
      bannerImage: teamBannerUrl,
      recentMatchesList: recentMatches,
      isLoading: false,
    })
  }

  render() {
    const {
      isLoading,
      latestMatchList,
      bannerImage,
      recentMatchesList,
    } = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    let backgroundColor
    if (id === 'KKR') {
      backgroundColor = 'kkr'
    } else if (id === 'RCB') {
      backgroundColor = 'rcb'
    } else if (id === 'CSK') {
      backgroundColor = 'csk'
    } else if (id === 'MI') {
      backgroundColor = 'mi'
    } else if (id === 'KXP') {
      backgroundColor = 'kxp'
    } else if (id === 'SH') {
      backgroundColor = 'sh'
    } else if (id === 'RR') {
      backgroundColor = 'rr'
    } else if (id === 'DC') {
      backgroundColor = 'dc'
    }

    return (
      <>
        {isLoading ? (
          <div
            className={`teamMatchMainContainer ${backgroundColor}`}
            testid="loader"
          >
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-container">
            <img src={bannerImage} alt="team banner" className="banner-img" />
            <p className="para">Latest Matches</p>
            <LatestMatch matchList={latestMatchList} />
            <ul className="unorder-List">
              {recentMatchesList.map(each => (
                <MatchCard items={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
