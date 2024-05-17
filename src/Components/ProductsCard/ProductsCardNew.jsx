import './PCN.css'
import { Link } from 'react-router-dom'
import New from '/assets/neveau.png'


export default function ProductsCardNew({ item }) {
  console.log(item)
  return (
    <div>
      <div className="item" >
        <div className="new">
          <img src={New} alt="" />
        </div>
        <img src={`/images/ProductsImages/${item.img}`} alt="product img" />

        <h3>{item.nom}</h3>
        <p>{item.description}</p>
        <Link to={`/products/${item.id}`}> Voir Details</Link>
      </div >
    </div>
  )
}
