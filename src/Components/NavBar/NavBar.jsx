import { NavLink } from "react-router-dom";
import './NavBar.css'
import Logo from '../../../public/images/Logo_Magi_Home.png'

export default function NavBar() {
    return (

        <nav className="nav-bar">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="links">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/new'>New</NavLink>
                <button>Contact us</button>
            </div>
        </nav>

    )
}
