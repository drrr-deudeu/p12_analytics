import PropTypes from "prop-types"
function MetabolismComponent(props) {
  const { label, value, icon, className } = props

  return (
    <div className='metabolismcomponent'>
      <div className={"metabolismcomponent__icon " + className}>
        <div className='metabolismcomponent__icon__icon'>
          <img src={"/assets/" + icon} alt={label}></img>
        </div>
      </div>
      <div className='metabolismcomponent__datas'>
        <div className='metabolismcomponent__datas__value'>{value}</div>
        <div className='metabolismcomponent__datas__label'>{label}</div>
      </div>
    </div>
  )
}

MetabolismComponent.propsTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default MetabolismComponent
