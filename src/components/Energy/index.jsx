import PropTypes from "prop-types"

import EnergyComponent from "../EnergyComponent"
function Energy(props) {
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = props

  function calorieFormat(calorie) {
    return (calorie / 1000).toFixed(3)
  }
  return (
    <div className='energy'>
      <EnergyComponent
        label='calories'
        value={calorieFormat(calorieCount) + "kCal"}
        icon='Calories.png'
        className='cal'
      />
      <EnergyComponent
        label='Proteines'
        value={proteinCount + "g"}
        icon='Protein.png'
        className='prot'
      />
      <EnergyComponent
        label='Glucides'
        value={carbohydrateCount + "g"}
        icon='Glucides.png'
        className='gluc'
      />
      <EnergyComponent
        label='Lipides'
        value={lipidCount + "g"}
        icon='LipidesFull.png'
        className='lipi'
      />
    </div>
  )
}

Energy.propsTypes = {
  calorieCount: PropTypes.number.isRequired,
  proteinCount: PropTypes.number.isRequired,
  carbohydrateCount: PropTypes.number.isRequired,
  lipidCount: PropTypes.number.isRequired,
}
Energy.defaultProps = {
  calorieCount: 2843,
  proteinCount: 2844,
  carbohydrateCount: 2845,
  lipidCount: 2846,
}
export default Energy
