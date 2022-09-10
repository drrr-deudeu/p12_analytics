import Header from "../../components/Header"
import Left from "../../components/Left"
import UserPieChart from "../../components/UserPieChart"
import UserBarchart from "../../components/UserBarChart"
import UserLineChart from "../../components/UserLineChart"
import UserRadarChart from "../../components/UserRadarChart"
import MetabolismComponent from "../../components/MetabolismComponent"
import Welcome from "../../components/Welcome"
import { useParams } from "react-router-dom"

import { useAPIService } from "../../utils/useAPIService"
import { DataContext, DataProvider } from "../../utils/dataContext"
import { useContext } from "react"
/**
 * User Main Page
 * See also /src/index.js
 * @returns User Page.
 */
function User() {
  // get URL parameter: userId
  const params = useParams()

  // get boolean value isMockData from the context DataContext
  const { isMockdata } = useContext(DataContext)
  const {
    user,
    activity,
    averageSessions,
    performance,
    isLoading,
    error,
    errMsg,
  } = useAPIService(params.userId, isMockdata)

  if (error) {
    return (
      <DataProvider>
        <div className='user'>
          <div>
            <Header />
          </div>
          <div>API Service answer with error: {errMsg}</div>
        </div>
      </DataProvider>
    )
  }
  if (
    !isLoading &&
    user.userInfos &&
    performance.data &&
    averageSessions.sessions &&
    activity.sessions
  ) {
    return (
      <DataProvider>
        <div className='user'>
          <div>
            <Header />
            <div className='container'>
              <Left />
              <div className='container__contain'>
                <div className='container__welcome'>
                  <Welcome firstName={user.userInfos.firstName} />
                </div>
                <div className='container__datas'>
                  <div className='container__datas__charts'>
                    <div className='container__datas__charts__barchart'>
                      <UserBarchart
                        series={activity.sessions}
                        units={activity.units}
                        legends={activity.legends}
                        datakeys={activity.datakeys}
                        colors={activity.colors}
                        yaxis={activity.yaxis}
                      />
                    </div>
                    <div className='container__datas__charts__inline'>
                      <UserLineChart
                        serie={averageSessions.sessions}
                        unit={averageSessions.unit}
                      />
                      <UserRadarChart performance={performance.data} />
                      <UserPieChart score={user.score} />
                    </div>
                  </div>
                  <div className='container__datas__metabolism'>
                    <div className='metabolism'>
                      {user.metabolism.map((m) => (
                        <MetabolismComponent
                          key={m.label}
                          label={m.label}
                          value={m.value}
                          icon={m.icon}
                          className={m.className}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DataProvider>
    )
  }
}
export default User
