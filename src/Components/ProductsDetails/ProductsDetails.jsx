import { Link, useParams } from 'react-router-dom'
import './ProductsDetails.css'
import data from '../../../Data/ProduitData.json'
import { useEffect } from 'react'
import { motion as m } from 'framer-motion'

export default function ProductsDetails() {
    const { id } = useParams()
    const Products = data.produits
    const Product = Products.filter(i => i.id == id)
    const relatedProducts = Products.filter(i => (i.id_categorie == Product[0].id_categorie) && (i.id !== Product[0].id)).slice(0, 8)
    // console.log(relatedProducts)
    // const [images, setimages] = useState([

    // ])


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const handleclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='Products-details'
        >
            <div className="backLink">
                / <Link to='/products'>Products</Link> / {Product[0].nom}
            </div>

            <div className="details-wrraper">
                <h2 className="title">{Product[0].nom}</h2>
                <div className="details">
                    <div className="otherImags">
                        {Product[0].plusImg.map((item, index) => {
                            // console.log(item)
                            return (
                                <div className="imgContainer" key={index}>
                                    <img src={`/images/PlusImgProduits/${item}`} alt="product img" />
                                </div>
                            )

                        })}
                    </div>
                    <div className="mainImg">
                        <img src={`/images/ProductsImages/${Product[0].img}`} alt="product img" />
                    </div>

                    <div className="text">
                        <h3>Description :</h3>
                        <p>{Product[0].description}</p>
                    </div>
                </div>

            </div>

            <div className="related">
                <h2 className='title'>Related Articles</h2>
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
        </m.div >
    )
}