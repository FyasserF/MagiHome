import './Products.css'
import { useEffect, useState } from 'react';
import { motion as m } from 'framer-motion';
import data from '../../../Data/ProduitData.json'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer';
import ProductsCard from '../../Components/ProductsCard/ProductsCard';




export default function Products() {
    const categories = data.categories;
    const [catagorie, setcatagorie] = useState('all')
    const [search, setsearch] = useState('')
    const [filtredProducts, setfiltredProducts] = useState(data.produits)


    useEffect(() => {
        const filteredData = data.produits?.filter(item =>
            (catagorie == 'all' || item.id_categorie == catagorie) &&
            (item.nom.toLowerCase().includes(search.toLowerCase()) ||
                item.description.toLowerCase().includes(search.toLowerCase()))
        );
        setfiltredProducts(filteredData);
    }, [catagorie, search]);



    return (
        <>
            <NavBar />
            <div className="products-wrraper">
                <div className="filter-section">
                    <div className="select">
                        <i className="fa-solid fa-filter"></i>
                        <m.select
                            value={catagorie}
                            onChange={(e) => setcatagorie(e.target.value)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: .4, ease: "easeInOut" }}
                        >
                            <option value="all">Tout les produits</option>
                            {categories.map((item, index) => (
                                <option key={index} value={item.id}>{item.nom}</option>
                            ))}
                        </m.select>
                    </div>


                    <m.div
                        className="group"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: .8, ease: "easeInOut" }}
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
                            <g>
                                <path
                                    d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                                ></path>
                            </g>
                        </svg>

                        <input
                            className="input"
                            type="search"
                            placeholder="Search..."
                            onChange={(e) => setsearch(e.target.value)}
                        />
                    </m.div>

                </div>
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
                                        <ProductsCard item={item} />
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