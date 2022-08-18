import { Link } from "react-router-dom"
import Header from "../../components/Header"

function NotFound() {
  return (
    <div className='page_container'>
      <Header />
      <main id='notfound' className='notfound'>
        <div>
          <span className='code'>404</span>{" "}
        </div>
        <div className='oups'>
          <span className='oups'>
            Oups! La page que vous demandez n'existe pas.
          </span>
        </div>
        <div className='retour_accueil'>
          <Link to='/' className='navlink'>
            Retourner sur la page d’accueil
          </Link>
        </div>
      </main>
    </div>
  )
}

export default NotFound
