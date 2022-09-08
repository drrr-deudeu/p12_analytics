import PropTypes from "prop-types"
/**
 *
 * const { label, value, icon, className } = props
 * @param {string} label displayed label
 * @param {string} value displayed value + unit
 * @param {string} icon displayed icon
 * @param {string} className scss class used
 * @returns {JSX.Element}
 */
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

MetabolismComponent.propTypes = {
  /**
   * displayed label
   */
  label: PropTypes.string.isRequired,
  /**
   * displayed value + unit
   */
  value: PropTypes.string.isRequired,
  /** displayed icon */
  icon: PropTypes.string.isRequired,
  /** scss class used */
  className: PropTypes.string.isRequired,
}

export default MetabolismComponent
