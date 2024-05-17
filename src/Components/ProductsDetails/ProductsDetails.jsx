import { Link, useParams } from 'react-router-dom'
import './ProductsDetails.css'
import data from '../../../Data/ProduitData.json'
import { useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'

export default function ProductsDetails() {
    const { id } = useParams()
    const Products = data.produits
    const Product = Products.filter(i => i.id == id)
    const relatedProducts = Products.filter(i => (i.id_categorie == Product[0].id_categorie) && (i.id !== Product[0].id)).slice(0, 8)
    const [Img, setImg] = useState(``)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    useEffect(() => {
        setImg(`/images/ProductsImages/${Product[0].img}`)
    }, [id]);

    const handleclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    const handleChangeImg = (img) => {
        setImg(img)
    }
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='Products-details'
        >
            <div className="backLink">
                / <Link to='/products'>Produits</Link> / {Product[0].nom}
            </div>

            <div className="details-wrraper">
                <h2 className="title">{Product[0].nom}</h2>
                <div className="details">
                    <div className="otherImags">
                        {Product[0].plusImg.map((item, i) => (
                            <div key={i} className="imgContainer">
                                <img src={`/images/PlusImgProduits/${item}`} alt="product img" onClick={() => handleChangeImg(`/images/PlusImgProduits/${item}`)} />
                            </div>
                        ))}
                        <div className="imgContainer">
                            <img src={`/images/ProductsImages/${Product[0].img}`} alt="product img" onClick={() => handleChangeImg(`/images/ProductsImages/${Product[0].img}`)} />
                        </div>
                    </div>
                    <div className="mainImg">
                        <img src={Img} alt="product img" />
                    </div>

                    <div className="text">
                        <h3>Description :</h3>
                        <p>{Product[0].description}</p>
                    </div>
                </div>

            </div>

            <div className="related">
                <h2 className='title'>Consultez également</h2>
                <div className="items">
                    {relatedProducts.map((item, index) => (
                        <div className="item" key={index}>
                            <img src={`/images/ProductsImages/${item.img}`} alt="product img" />
                            <h3>{item.nom}</h3>
                            <p>{item.description}</p>
                            <Link to={`/products/${item.id}`} onClick={handleclick}> Voir Details</Link>
                        </div >
                    ))}

                </div>

            </div>
        </m.div>
    )
}