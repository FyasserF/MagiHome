import './About.css'
import NavBar from "../../Components/NavBar/NavBar";
import Footer from '../../Components/Footer/Footer';
import { motion as m } from 'framer-motion'


export default function About() {
    return (
        <div >
            <NavBar />
            <div className="about">
                <div className="aboutUs">
                    <m.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: .2, ease: "easeInOut" }}
                    >
                        {/* À propos de  */}
                        Magi'home
                    </m.h1>
                    <m.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: .4, ease: "easeInOut" }}
                    >
                        Depuis de nombreuses années, <strong>Magi'home</strong> est synonyme de choix malin :
                        nous proposons des articles électroménagers utiles, de qualité irréprochable et à des prix doux.
                    </m.p>
                    <m.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: .6, ease: "easeInOut" }}
                    >
                        Chez Magi'home, l'esprit qui anime nos équipes est clair : mettre à disposition de
                        nos clients des technologies novatrices à des prix attractifs. Nous croyons en l'importance
                        de rendre accessible l'excellence et l'innovation à tous les foyers.
                    </m.p>
                    <m.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: .8, ease: "easeInOut" }}
                    >
                        Nous nous engageons à fournir des produits qui non seulement améliorent votre quotidien,
                        mais qui sont également conçus pour durer. L'engagement envers la qualité et la satisfaction
                        du client est au cœur de notre démarche, reflétant notre passion pour l'excellence.
                    </m.p>
                    <m.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        Rejoignez-nous dans cette aventure où chaque produit est une promesse de durabilité,
                        de performance et d'accessibilité.
                    </m.p>
                </div>
                <m.div
                    className="img"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <img src="/images/R.jpeg" alt="" />
                </m.div>
            </div>
            <Footer />
        </div>
    )
}
