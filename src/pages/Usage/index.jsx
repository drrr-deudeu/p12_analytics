import { Link } from "react-router-dom"
function Usage() {
  return (
    <div className='usage'>
      <Link to='/user/12'>goto user 12</Link>
      <Link to='/user/18'>goto user 18</Link>
      <Link to='/user/1'>goto user 1</Link>
    </div>
  )
}
export default Usage
