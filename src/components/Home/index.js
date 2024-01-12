import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, cricketList: []}

  componentDidMount() {
    this.getData()
    
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedList = data.teams
    const updatedData = updatedList.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({cricketList: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, cricketList} = this.state

    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
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
        )}
      </>
    )
  }
}
export default Home
