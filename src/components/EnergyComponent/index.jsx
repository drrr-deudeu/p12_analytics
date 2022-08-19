import PropTypes from "prop-types"
function EnergyComponent(props) {
  const { label, value, icon, className } = props

  return (
    <div className='energycomponent'>
      <div className={"energycomponent__icon " + className}>
        <div className='energycomponent__icon__icon'>
          <img src={"/assets/" + icon} alt={label}></img>
        </div>
      </div>
      <div className='energycomponent__datas'>
        <div className='energycomponent__datas__value'>{value}</div>
        <div className='energycomponent__datas__label'>{label}</div>
      </div>
    </div>
  )
}

EnergyComponent.propsTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default EnergyComponent
