import ArgentBankIcon from "../../assets/argentBankLogo.png"
import { Link } from "react-router-dom"

function Header() {
    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img src={ArgentBankIcon} alt='Logo Argent Bank' className='main-nav-logo-image'></img>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            <div>
                <Link to="/sign-in" className="main-nav-item">
                    <i className="fa fa-user-circle icon-sign"></i>
                    Sign In 
                </Link>
            </div>
        </nav>
    )
}

export default Header