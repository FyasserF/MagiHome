import { useEffect, useState } from 'react';
import { motion as m } from 'framer-motion';
import data from '../../../Data/ProduitData.json'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer';
import ProductsCardNew from '../../Components/ProductsCard/ProductsCardNew';





export default function Products() {
    const [filtredProducts, setfiltredProducts] = useState([{
        "id": 112,
        "nom": "Friteuse 11L",
        "description": "La friteuse à air de 11 litres et 2400 watts offre une grande capacité et une puissance élevée. Avec 10 programmes de cuisson, elle répond à divers besoins culinaires. Son écran tactile numérique facilite son utilisation.",
        "id_categorie": 2,
        "img":"Friteuse à air 11L 2.png",
        "plusImg":["Friteuse à air 11L.png","Friteuse à air 11L 1.png"]
      },{
        "id": 136,
        "nom": "Ventilateur sur pied",
        "description": "Le ventilateur sur pied MH0001 est équipé de cinq pales ajustables en hauteur, offrant ainsi une meilleure direction du flux d'air. Avec trois vitesses différentes, vous pouvez choisir celle qui vous convient le mieux. Son moteur silencieux assure un fonctionnement sans perturbation, et sa minuterie permet une utilisation programmée. De plus, sa couverture horizontale à 80 degrés assure une distribution optimale de l'air dans la pièce.",
        "id_categorie": 6,
        "img":"Ventilateur sur pied.png",
        "plusImg":[]
      },
      {
        "id": 136,
        "nom": "Ventilateur sur pied Max",
        "description": "Le ventilateur sur pied MH0002 MAX est équipé de cinq pales offrant un flux d'air puissant. Réglable jusqu'à 125 cm de hauteur, il assure une distribution optimale de l'air. Avec trois vitesses, un moteur silencieux et une couverture horizontale à 80 degrés, il garantit confort et fraîcheur dans toute la pièce.",
        "id_categorie": 6,
        "img":"Ventilateur sur pied Max.png",
        "plusImg":[]
      }])


   


    return (
        <>
            <NavBar />
            <div className="products-wrraper">
                <div>
                    {filtredProducts.length == 0 ?
                        <div className="nodata">
                            <img src="assets/no-data.png" alt="" />
                            <p>Aucune produits exist</p>
                        </div>
                        :
                        <div className="products">
                            {filtredProducts.map((item, index) => {
                                let duration = (index % 10) * 0.2;

                                return (
                                    <m.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration, ease: "easeInOut" }}
                                        key={item.id}
                                    >
                                        <ProductsCardNew item={item} />
                                    </m.div>

                                )
                            })}
                        </div>
                    }
                </div>
            </div>
            <Footer />


        </>
    )
}