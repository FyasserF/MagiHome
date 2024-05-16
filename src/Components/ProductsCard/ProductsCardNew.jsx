import './PCN.css'
import { Link } from 'react-router-dom'
import img from '../../../public/images/ProductsImages/BBQ MH366.png'
import New from '../../../public/assets/neveau.png'


export default function ProductsCardNew({ item }) {
  console.log(item)
  return (
    <div>
      <div className="item" >
        <div className="new">
          <img src={New} alt="" />
        </div>
        <img src={img} alt="product img" />
        {/* <img src={`/images/ProductsImages/${item.img}`} alt="product img" /> */}

        <h3>{item.nom}</h3>
        <p>{item.description}</p>
        <Link to={`/products/${item.id}`}> Voir Details</Link>
      </div >
    </div>
  )
}
