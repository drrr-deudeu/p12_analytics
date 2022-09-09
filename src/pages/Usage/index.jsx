import { Link } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../../utils/dataContext"
/**
 * This react component displays the application links availables
 * and a button allowing the user to switch between back server's datas and the mocked datas
 * @returns Usage component
 */
function Usage() {
  const { toggleData, isMockdata } = useContext(DataContext)

  return (
    <div className='usage'>
      <Link to='/user/12'>goto user 12</Link>
      <Link to='/user/18'>goto user 18</Link>
      <Link to='/user/1'>goto user 1</Link>
      <button onClick={() => toggleData()}>
        MockData: {`${isMockdata}`}.Click to change
      </button>
    </div>
  )
}
export default Usage
