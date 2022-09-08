import PropTypes from "prop-types"
/**
 *
 * const { firstName } = props
 * @param {string} firstName User's firstname
 * @returns {JSX.Element} welcome message
 */
function Welcome(props) {
  const { firstName } = props

  return (
    <div className='welcome'>
      <div className='welcome__title'>
        <span className='welcome__title__bonjour'>Bonjour</span>
        <span className='welcome__title__firstname'>{firstName}</span>
      </div>
      <div className='welcome__congratulations'>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </div>
    </div>
  )
}

Welcome.propTypes = {
  firstName: PropTypes.string.isRequired,
}

export default Welcome
