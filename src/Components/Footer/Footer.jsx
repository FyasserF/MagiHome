import './Footer.css'
import Logo from '/images/Logo_Magi_Home.png'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <footer>
            <div className="first-section">
                <div className="footer-logo">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Pages</h4>
                    <ul>
                        <li><Link to='/'>Accueil</Link></li>
                        <li><Link>Produits</Link></li>
                        <li><Link>Nouveautés</Link></li>
                        <li><Link>Notre Entreprise</Link></li>
                        <li><Link>Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-col Map">
                    <h4>Informations</h4>
                    <ul>
                        <li><i className="fas fa-map-marker-alt"></i><a href="#"> N°82 . Étage 1, zone industrielle, commune ouled Azzouz, Casablanca </a></li>
                        <li><i className="fas fa-phone"></i><a href="#"> 0522906978 </a></li>
                        <li><i className="fas fa-envelope"></i><a href="#"> Monahome.home@gmail.com </a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Suivez nous</h4>
                    <div className="social-links">
                        <a href="https://web.facebook.com/electro.magi.home"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/magihome_electro/"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
            <div className="secend-section">
                <p>Copyright © 2024 - MagiHome | All Rights Reserved</p>
            </div>
        </footer>
    )
}
