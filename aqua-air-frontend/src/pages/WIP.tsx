import wrenches from '../assets/wrenches.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function WIP() {
    
  return (
    <div className="construction-container">
        <img src={wrenches} alt='wrenches' />
        <div className="container-content content-in-bg">
            <h1>Work in Progress <FontAwesomeIcon icon={faGear} className="gear-cog" /></h1>
        </div>
    </div>
  )
}

export default WIP;