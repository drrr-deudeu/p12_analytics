import "../../style/style.css"
function Header() {
  return (
    <div className='header'>
      <div className='header__logo'>
        <div className='header__logo__img'>
          <img src='/assets/Runner.png' alt='SportSee logo'></img>
        </div>
        <div className='header__logo__titre'>
          <img src='/assets/sportsee_titre.png' alt='SportSee'></img>
        </div>
      </div>
      <div className='header__menu'>
        <div className='header__menu__item textes'>Accueil</div>
        <div className='header__menu__item textes'>Profil</div>
        <div className='header__menu__item textes'>Réglage</div>
        <div className='header__menu__item textes'>Communauté</div>
      </div>
    </div>
  )
}

export default Header
