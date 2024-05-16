import './NosPoints.css'
import img from '../../../public/images/NosPointsImages/point.png'

export default function NosPoints() {

    return (
        <div className='nos-points'>

            <h2>Nos Points</h2>
            <div className='nos-points-wrraper'>
                <img src={img} alt="" />
            </div>
        </div>
    )
}
