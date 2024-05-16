import { useEffect, useState } from 'react';
import { motion as m } from 'framer-motion';
import data from '../../../Data/ProduitData.json'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer';
import ProductsCardNew from '../../Components/ProductsCard/ProductsCardNew';





export default function Products() {
    const [filtredProducts, setfiltredProducts] = useState(data.produits)


   


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