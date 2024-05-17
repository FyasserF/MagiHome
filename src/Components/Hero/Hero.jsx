import './Hero.css'
import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'
export default function Hero() {
    return (
        <div className='hero'>

            <div className="hero-text">
                <m.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .2, ease: "easeInOut" }}
                >
                    Mona&#39;Home
                </m.h1>
                <m.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .5, ease: "easeInOut" }}
                >
                    Le choix malin pour votre cuisine
                </m.h3>
                <m.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .8, ease: "easeInOut" }}
                >
                    Fort de notre conviction qu&#39;il est possible d&#39;équiper nos foyers et nos cuisines en articles utiles,
                    de très bonne qualité et à des prix doux, Mona&#39;home se donne comme mission de mettre sa marque Magi&#39;home à la disposition de la majorité des
                    clients marocains.
                </m.p>
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.1, ease: "easeInOut" }}
                >
                    <Link to='/products'>Voir Plus</Link>
                </m.div>
            </div>

            <m.div
                className="hero-img"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
            >
                <div className="img">
                    <img src="images/heroimg.png" alt="" />
                </div>
            </m.div>
        </div>
    )
}
