import {Component} from 'react'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, cricketList: []}

  componentDidMount() {
    this.getData()
    console.log('hi')
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    console.log('hi')
    const data = await response.json()
    const updataedList = data.teams
    const updatedData = updataedList.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({cricketList: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, cricketList} = this.state

    return (
      <div className="main-container">
        <div className="logo-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
            className="logo-img"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="items-list">
          {cricketList.map(eachItem => (
            <TeamCard teamList={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
