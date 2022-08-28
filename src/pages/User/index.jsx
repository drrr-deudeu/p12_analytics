import Header from "../../components/Header"
import Score from "../../components/Score"
import UserBarchart from "../../components/UserBarChart"
import UserLineChart from "../../components/UserLineChart"
import UserRadarChart from "../../components/UserRadarChart"
import Welcome from "../../components/Welcome"
import { useParams } from "react-router-dom"
// import NotFound from "../NotFound"
import Energy from "../../components/Energy"

import { useAxios } from "../../utils/useAxios"

function User() {
  const params = useParams()

  const { user, activity, averageSessions, performance, isLoading } = useAxios(
    params.userId
  )

  if (
    !isLoading &&
    user.userInfos &&
    performance.data &&
    averageSessions.sessions &&
    activity.sessions
  ) {
    return (
      <div className='user'>
        <div>
          <Header />
          <div className='container'>
            <div className='left'>
              <div className='left__icons'>
                <div className='left__icons__icon'>
                  <img src='/assets/LotusPosition.png' alt='lotus'></img>
                </div>
                <div className='left__icons__icon'>
                  <img src='/assets/Crawl.png' alt='crawl'></img>
                </div>
                <div className='left__icons__icon'>
                  <img src='/assets/Bicycle.png' alt='bicycle'></img>
                </div>
                <div className='left__icons__icon'>
                  <img src='/assets/Dumbbells.png' alt='halteres'></img>
                </div>
              </div>
              <div className='left__copyright'>Copiryght, SportSee 2020</div>
            </div>
            <div className='container__contain'>
              <div className='container__welcome'>
                <Welcome firstName={user.userInfos.firstName} />
              </div>
              <div className='container__datas'>
                <div className='container__datas__charts'>
                  <div className='container__datas__charts__barchart'>
                    <UserBarchart sessions={activity.sessions} />
                  </div>
                  <div className='container__datas__charts__inline'>
                    <UserLineChart averageSessions={averageSessions} />
                    <UserRadarChart
                      firstName={user.userInfos.firstName}
                      performance={performance}
                    />
                    <Score
                      score={user.score ? user.score : 0}
                      todayScore={user.todayScore ? user.todayScore : 0}
                    />
                  </div>
                </div>
                <div className='container__datas__energy'>
                  <Energy
                    calorieCount={user.keyData.calorieCount}
                    proteinCount={user.keyData.proteinCount}
                    carbohydrateCount={user.keyData.carbohydrateCount}
                    lipidCount={user.keyData.lipidCount}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default User
