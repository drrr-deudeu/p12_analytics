import Header from "../../components/Header"
import UserBarchart from "../../components/UserBarChart"
import UserLineChart from "../../components/UserLineChart"
import UserRadarChart from "../../components/UserRadarChart"

function User() {
  return (
    <div className='user'>
      <div>
        <Header />
        <div className='container'>
          <div className='left'>
            <div className='left__icon'>
              <img src='/assets/LotusPosition.png' alt='lotus'></img>
            </div>
            <div className='left__icon'>
              <img src='/assets/Crawl.png' alt='crawl'></img>
            </div>
            <div className='left__icon'>
              <img src='/assets/Bicycle.png' alt='bicycle'></img>
            </div>
            <div className='left__icon'>
              <img src='/assets/Dumbbells.png' alt='halteres'></img>
            </div>
          </div>
          <div className='container__contain'>
            <UserBarchart />
            <UserLineChart />
            <UserRadarChart />
          </div>
        </div>
      </div>
    </div>
  )
}
export default User
