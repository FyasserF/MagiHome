import { Link } from "react-router-dom"

const ProductsCard = ({ item }) => {

    return (
        <div className="item" >
            <img src={`images/ProductsImages/${item.img}`} alt="product img" />
            <h3>{item.nom}</h3>
            <p>{item.description}</p>
            <Link to={`${item.id}`}> Voir Details</Link>
        </div >
    )
}
export default ProductsCard