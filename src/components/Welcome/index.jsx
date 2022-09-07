import PropTypes from "prop-types"

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

Welcome.propsTypes = {
  title: PropTypes.string.isRequired,
}

export default Welcome
